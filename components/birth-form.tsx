'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getCityNames } from '@/lib/cities';

export type Gender = '男' | '女';

interface BirthFormProps {
  onSubmit: (data: {
    year: number;
    month: number;
    day: number;
    hour: number;
    isLunar: boolean;
    gender: Gender;
    currentCity: string;
  }) => void;
}

const TIME_PERIODS = [
  { value: '0', label: '子时 (23:00-01:00)' },
  { value: '2', label: '丑时 (01:00-03:00)' },
  { value: '4', label: '寅时 (03:00-05:00)' },
  { value: '6', label: '卯时 (05:00-07:00)' },
  { value: '8', label: '辰时 (07:00-09:00)' },
  { value: '10', label: '巳时 (09:00-11:00)' },
  { value: '12', label: '午时 (11:00-13:00)' },
  { value: '14', label: '未时 (13:00-15:00)' },
  { value: '16', label: '申时 (15:00-17:00)' },
  { value: '18', label: '酉时 (17:00-19:00)' },
  { value: '20', label: '戌时 (19:00-21:00)' },
  { value: '22', label: '亥时 (21:00-23:00)' },
];

export function BirthForm({ onSubmit }: BirthFormProps) {
  const [calendarType, setCalendarType] = useState<'solar' | 'lunar'>('solar');
  const [gender, setGender] = useState<Gender | ''>('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const cityNames = useMemo(() => getCityNames(), []);

  const filteredCities = useMemo(() => {
    if (!citySearch) return [];
    return cityNames.filter((name) => name.includes(citySearch)).slice(0, 10);
  }, [citySearch, cityNames]);

  const years = useMemo(() => {
    const arr = [];
    for (let y = 2025; y >= 1940; y--) {
      arr.push(y);
    }
    return arr;
  }, []);

  const months = useMemo(() => {
    const arr = [];
    for (let m = 1; m <= 12; m++) {
      arr.push(m);
    }
    return arr;
  }, []);

  const days = useMemo(() => {
    const arr = [];
    for (let d = 1; d <= 30; d++) {
      arr.push(d);
    }
    return arr;
  }, []);

  const handleSubmit = () => {
    if (!year || !month || !day || !hour || !gender) return;
    onSubmit({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      hour: parseInt(hour),
      isLunar: calendarType === 'lunar',
      gender,
      currentCity: selectedCity,
    });
  };

  const isFormValid = year && month && day && hour && gender;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-xl border border-border p-6 md:p-8">
        {/* 日历类型选择 */}
        <div className="mb-8">
          <Label className="text-sm font-medium text-muted-foreground mb-3 block">
            历法选择
          </Label>
          <RadioGroup
            value={calendarType}
            onValueChange={(v) => setCalendarType(v as 'solar' | 'lunar')}
            className="flex gap-6"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="solar" id="solar" />
              <Label htmlFor="solar" className="cursor-pointer text-card-foreground">
                阳历（公历）
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="lunar" id="lunar" />
              <Label htmlFor="lunar" className="cursor-pointer text-card-foreground">
                阴历（农历）
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* 性别选择 */}
        <div className="mb-8">
          <Label className="text-sm font-medium text-muted-foreground mb-3 block">
            性别
          </Label>
          <RadioGroup
            value={gender}
            onValueChange={(v) => setGender(v as Gender)}
            className="flex gap-6"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="男" id="male" />
              <Label htmlFor="male" className="cursor-pointer text-card-foreground">
                男
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="女" id="female" />
              <Label htmlFor="female" className="cursor-pointer text-card-foreground">
                女
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* 出生日期 */}
        <div className="mb-8">
          <Label className="text-sm font-medium text-muted-foreground mb-3 block">
            出生日期
          </Label>
          <div className="grid grid-cols-3 gap-3">
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger className="bg-secondary text-secondary-foreground">
                <SelectValue placeholder="年" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={String(y)}>
                    {y}年
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger className="bg-secondary text-secondary-foreground">
                <SelectValue placeholder="月" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={String(m)}>
                    {m}月
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={day} onValueChange={setDay}>
              <SelectTrigger className="bg-secondary text-secondary-foreground">
                <SelectValue placeholder="日" />
              </SelectTrigger>
              <SelectContent>
                {days.map((d) => (
                  <SelectItem key={d} value={String(d)}>
                    {d}日
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 出生时辰 */}
        <div className="mb-8">
          <Label className="text-sm font-medium text-muted-foreground mb-3 block">
            出生时辰
          </Label>
          <Select value={hour} onValueChange={setHour}>
            <SelectTrigger className="bg-secondary text-secondary-foreground">
              <SelectValue placeholder="选择时辰" />
            </SelectTrigger>
            <SelectContent>
              {TIME_PERIODS.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 当前居住城市 */}
        <div className="mb-8">
          <Label className="text-sm font-medium text-muted-foreground mb-3 block">
            当前居住城市（可选）
          </Label>
          <div className="relative">
            <Input
              placeholder="输入城市名搜索..."
              value={citySearch}
              onChange={(e) => {
                setCitySearch(e.target.value);
                setShowCityDropdown(true);
                if (!e.target.value) setSelectedCity('');
              }}
              onFocus={() => setShowCityDropdown(true)}
              className="bg-secondary text-secondary-foreground placeholder:text-muted-foreground"
            />
            {selectedCity && (
              <div className="mt-2 text-sm text-muted-foreground">
                {'已选择: '}
                <span className="text-card-foreground font-medium">{selectedCity}</span>
              </div>
            )}
            {showCityDropdown && filteredCities.length > 0 && (
              <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg overflow-hidden">
                {filteredCities.map((name) => (
                  <button
                    key={name}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => {
                      setSelectedCity(name);
                      setCitySearch(name);
                      setShowCityDropdown(false);
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 提交按钮 */}
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className="w-full h-12 text-base font-medium"
          size="lg"
        >
          开始测算
        </Button>
      </div>
    </div>
  );
}
