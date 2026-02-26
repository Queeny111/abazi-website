'use client';

import type { WuXingElement } from '@/lib/wuxing';
import type { CityInfo } from '@/lib/cities';
import { DIRECTION_ELEMENT } from '@/lib/cities';
import { MapPin, Star, TrendingUp, Building2 } from 'lucide-react';

const ELEMENT_STYLES: Record<WuXingElement, { bg: string; text: string; dot: string }> = {
  '金': { bg: 'bg-[oklch(0.92_0.02_80)]', text: 'text-[oklch(0.40_0.02_80)]', dot: 'bg-[oklch(0.70_0.02_80)]' },
  '木': { bg: 'bg-[oklch(0.92_0.06_145)]', text: 'text-[oklch(0.35_0.14_145)]', dot: 'bg-[oklch(0.55_0.14_145)]' },
  '水': { bg: 'bg-[oklch(0.92_0.05_250)]', text: 'text-[oklch(0.35_0.12_250)]', dot: 'bg-[oklch(0.45_0.12_250)]' },
  '火': { bg: 'bg-[oklch(0.92_0.06_30)]', text: 'text-[oklch(0.40_0.20_30)]', dot: 'bg-[oklch(0.55_0.20_30)]' },
  '土': { bg: 'bg-[oklch(0.92_0.05_85)]', text: 'text-[oklch(0.40_0.12_85)]', dot: 'bg-[oklch(0.60_0.12_85)]' },
};

const TIER_CONFIG: Record<string, { icon: React.ReactNode; label: string }> = {
  '超一线': { icon: <Star className="w-3.5 h-3.5" />, label: '超一线' },
  '一线': { icon: <Star className="w-3.5 h-3.5" />, label: '一线' },
  '新一线': { icon: <TrendingUp className="w-3.5 h-3.5" />, label: '新一线' },
  '二线': { icon: <Building2 className="w-3.5 h-3.5" />, label: '二线' },
  '潜力城市': { icon: <TrendingUp className="w-3.5 h-3.5" />, label: '潜力' },
  '地级市': { icon: <MapPin className="w-3.5 h-3.5" />, label: '地级市' },
};

function ElementTag({ element }: { element: WuXingElement }) {
  const style = ELEMENT_STYLES[element];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${style.bg} ${style.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {element}
    </span>
  );
}

function CityCard({ city, rank }: { city: CityInfo; rank?: number }) {
  const tierConfig = TIER_CONFIG[city.tier];
  const dirElement = DIRECTION_ELEMENT[city.direction];

  return (
    <div className="group bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-all hover:shadow-sm">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {rank && (
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              {rank}
            </span>
          )}
          <div>
            <h3 className="font-semibold text-card-foreground text-base">{city.name}</h3>
            <p className="text-xs text-muted-foreground">{city.province}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 bg-secondary rounded-md text-xs text-secondary-foreground">
          {tierConfig?.icon}
          <span>{tierConfig?.label}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {city.elements.map((e, i) => (
          <ElementTag key={`${e}-${i}`} element={e} />
        ))}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs text-muted-foreground bg-secondary">
          <MapPin className="w-3 h-3" />
          {city.direction}方({dirElement})
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {city.description}
      </p>
    </div>
  );
}

interface CityRecommendationProps {
  bestMatch: CityInfo[];
  goodMatch: CityInfo[];
  currentCityInfo: CityInfo | null;
  currentCityAnalysis: string;
  missingElements: WuXingElement[];
}

export function CityRecommendation({
  bestMatch,
  goodMatch,
  currentCityInfo,
  currentCityAnalysis,
  missingElements,
}: CityRecommendationProps) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* 当前城市分析 */}
      {currentCityInfo && (
        <div className="bg-card rounded-xl border border-border p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-card-foreground mb-4">
            当前城市分析
          </h2>
          <div className="mb-4">
            <CityCard city={currentCityInfo} />
          </div>
          <div className="p-4 bg-secondary rounded-lg border border-border">
            <p className="text-sm text-secondary-foreground leading-relaxed">{currentCityAnalysis}</p>
          </div>
        </div>
      )}

      {/* 最佳推荐 */}
      <div className="bg-card rounded-xl border border-border p-6 md:p-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-serif font-bold text-card-foreground">
            最佳推荐城市
          </h2>
          <div className="flex gap-1.5">
            {missingElements.map((e) => (
              <ElementTag key={e} element={e} />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          以下城市的五行属性最适合补充您命理中缺失的五行能量
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bestMatch.map((city, index) => (
            <CityCard key={city.name} city={city} rank={index + 1} />
          ))}
        </div>
      </div>

      {/* 次优推荐 */}
      {goodMatch.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-card-foreground mb-2">
            其他推荐城市
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            以下城市同样具有一定的五行补益作用，可作为备选考虑
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goodMatch.map((city) => (
              <CityCard key={city.name} city={city} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
