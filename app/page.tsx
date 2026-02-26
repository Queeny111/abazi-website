'use client';

import { useState, useCallback, useRef } from 'react';
import { BirthForm } from '@/components/birth-form';
import { BaZiDisplay } from '@/components/bazi-display';
import { CityRecommendation } from '@/components/city-recommendation';
import { calculateBaZi } from '@/lib/wuxing';
import { recommendCities } from '@/lib/cities';
import type { BaZiResult, WuXingElement, Gender } from '@/lib/wuxing';
import type { CityInfo } from '@/lib/cities';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

interface ResultData {
  baZi: BaZiResult;
  bestMatch: CityInfo[];
  goodMatch: CityInfo[];
  currentCityInfo: CityInfo | null;
  currentCityAnalysis: string;
}

export default function HomePage() {
  const [result, setResult] = useState<ResultData | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSubmit = useCallback(
    (data: {
      year: number;
      month: number;
      day: number;
      hour: number;
      isLunar: boolean;
      gender: Gender;
      currentCity: string;
    }) => {
      const baZi = calculateBaZi(data.year, data.month, data.day, data.hour, data.isLunar, data.gender);
      const cityResult = recommendCities(
        baZi.missingWuXing,
        baZi.strongWuXing,
        baZi.dayMaster,
        data.currentCity || undefined
      );

      setResult({
        baZi,
        ...cityResult,
      });

      // 滚动到结果区域
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    },
    []
  );

  const handleReset = useCallback(() => {
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* 顶部装饰线 */}
      <div className="h-1 bg-primary" />

      {/* 头部 */}
      <header className="pt-12 pb-8 md:pt-20 md:pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            天干地支 / 五行命理
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight text-balance">
            五行命理分析
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            输入您的出生时间，精准计算八字五行属性，
            智能推荐最适合您发展的城市
          </p>
        </div>
      </header>

      {/* 五行装饰符号 */}
      <div className="flex justify-center gap-4 md:gap-6 pb-8 md:pb-12">
        {(['木', '火', '土', '金', '水'] as WuXingElement[]).map((element) => (
          <WuXingSymbol key={element} element={element} />
        ))}
      </div>

      {/* 分隔线 */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="h-px bg-border" />
      </div>

      {/* 表单区域 */}
      <section className="py-8 md:py-12 px-4">
        <BirthForm onSubmit={handleSubmit} />
      </section>

      {/* 结果区域 */}
      {result && (
        <div ref={resultRef}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="h-px bg-border" />
          </div>

          <section className="py-8 md:py-12 px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                测算结果
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {'基于天干地支理论的八字五行分析 '}
                <span className="text-foreground font-medium">
                  {'('}{result.baZi.dayMasterLabel}{')'}
                </span>
              </p>
            </div>

            <BaZiDisplay result={result.baZi} />

            <div className="mt-8">
              <CityRecommendation
                bestMatch={result.bestMatch}
                goodMatch={result.goodMatch}
                currentCityInfo={result.currentCityInfo}
                currentCityAnalysis={result.currentCityAnalysis}
                missingElements={result.baZi.missingWuXing}
              />
            </div>

            {/* 重新测算按钮 */}
            <div className="flex justify-center mt-12 mb-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleReset}
                className="gap-2"
              >
                <ArrowUp className="w-4 h-4" />
                重新测算
              </Button>
            </div>
          </section>
        </div>
      )}

      {/* 页脚 */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            本站仅供传统文化交流参考，测算结果基于天干地支五行理论推演。
            城市推荐结合五行方位学说，实际发展请综合考量个人能力与市场环境。
          </p>
        </div>
      </footer>
    </main>
  );
}

function WuXingSymbol({ element }: { element: WuXingElement }) {
  const config: Record<WuXingElement, { symbol: string; color: string; bg: string }> = {
    '木': { symbol: '木', color: 'text-[oklch(0.35_0.14_145)]', bg: 'bg-[oklch(0.92_0.06_145)]' },
    '火': { symbol: '火', color: 'text-[oklch(0.40_0.20_30)]', bg: 'bg-[oklch(0.92_0.06_30)]' },
    '土': { symbol: '土', color: 'text-[oklch(0.40_0.12_85)]', bg: 'bg-[oklch(0.92_0.05_85)]' },
    '金': { symbol: '金', color: 'text-[oklch(0.40_0.02_80)]', bg: 'bg-[oklch(0.92_0.02_80)]' },
    '水': { symbol: '水', color: 'text-[oklch(0.35_0.12_250)]', bg: 'bg-[oklch(0.92_0.05_250)]' },
  };

  const c = config[element];

  return (
    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${c.bg} flex items-center justify-center`}>
      <span className={`text-lg md:text-xl font-serif font-bold ${c.color}`}>
        {c.symbol}
      </span>
    </div>
  );
}
