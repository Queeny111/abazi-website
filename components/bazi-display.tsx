'use client';

import type { BaZiResult, WuXingElement } from '@/lib/wuxing';
import { TIAN_GAN_WU_XING, DI_ZHI_WU_XING, WU_XING_DESC, WU_XING_REMEDY } from '@/lib/wuxing';

const ELEMENT_STYLES: Record<WuXingElement, { bg: string; text: string; border: string }> = {
  '金': { bg: 'bg-[oklch(0.92_0.02_80)]', text: 'text-[oklch(0.40_0.02_80)]', border: 'border-[oklch(0.70_0.02_80)]' },
  '木': { bg: 'bg-[oklch(0.92_0.06_145)]', text: 'text-[oklch(0.35_0.14_145)]', border: 'border-[oklch(0.55_0.14_145)]' },
  '水': { bg: 'bg-[oklch(0.92_0.05_250)]', text: 'text-[oklch(0.35_0.12_250)]', border: 'border-[oklch(0.45_0.12_250)]' },
  '火': { bg: 'bg-[oklch(0.92_0.06_30)]', text: 'text-[oklch(0.40_0.20_30)]', border: 'border-[oklch(0.55_0.20_30)]' },
  '土': { bg: 'bg-[oklch(0.92_0.05_85)]', text: 'text-[oklch(0.40_0.12_85)]', border: 'border-[oklch(0.60_0.12_85)]' },
};

interface BaZiDisplayProps {
  result: BaZiResult;
}

function PillarCard({
  label,
  gan,
  zhi,
}: {
  label: string;
  gan: string;
  zhi: string;
}) {
  const ganElement = TIAN_GAN_WU_XING[gan];
  const zhiElement = DI_ZHI_WU_XING[zhi];
  const ganStyle = ELEMENT_STYLES[ganElement];
  const zhiStyle = ELEMENT_STYLES[zhiElement];

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
      <div className="flex flex-col items-center gap-1.5">
        <div
          className={`w-16 h-16 md:w-20 md:h-20 rounded-lg ${ganStyle.bg} ${ganStyle.border} border flex flex-col items-center justify-center`}
        >
          <span className={`text-2xl md:text-3xl font-serif font-bold ${ganStyle.text}`}>
            {gan}
          </span>
          <span className={`text-[10px] ${ganStyle.text} opacity-70`}>{ganElement}</span>
        </div>
        <div
          className={`w-16 h-16 md:w-20 md:h-20 rounded-lg ${zhiStyle.bg} ${zhiStyle.border} border flex flex-col items-center justify-center`}
        >
          <span className={`text-2xl md:text-3xl font-serif font-bold ${zhiStyle.text}`}>
            {zhi}
          </span>
          <span className={`text-[10px] ${zhiStyle.text} opacity-70`}>{zhiElement}</span>
        </div>
      </div>
    </div>
  );
}

function WuXingBar({ element, count, max }: { element: WuXingElement; count: number; max: number }) {
  const style = ELEMENT_STYLES[element];
  const percentage = Math.min((count / max) * 100, 100);

  return (
    <div className="flex items-center gap-3">
      <span className={`w-8 text-center text-lg font-serif font-bold ${style.text}`}>
        {element}
      </span>
      <div className="flex-1 h-7 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${style.bg} ${style.border} border`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-12 text-right text-sm text-muted-foreground tabular-nums">
        {count.toFixed(1)}
      </span>
    </div>
  );
}

export function BaZiDisplay({ result }: BaZiDisplayProps) {
  const maxCount = Math.max(...Object.values(result.wuXingCount), 1);
  const allElements: WuXingElement[] = ['木', '火', '土', '金', '水'];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* 基本信息卡片 */}
      <div className="bg-card rounded-xl border border-border p-6 md:p-8">
        {/* 命主标签 - 如 "己土女" / "壬水男" */}
        <div className="flex flex-col items-center mb-8">
          <div className={`inline-flex items-center gap-1 px-6 py-3 rounded-xl ${ELEMENT_STYLES[result.dayMaster].bg} ${ELEMENT_STYLES[result.dayMaster].border} border`}>
            <span className={`text-3xl md:text-4xl font-serif font-bold tracking-wider ${ELEMENT_STYLES[result.dayMaster].text}`}>
              {result.dayMasterLabel}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            日主 {result.dayGan} 属 {result.dayMaster}，{result.gender === '男' ? '乾造' : '坤造'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-serif font-bold text-card-foreground">
              八字命盘
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {'生肖: '}
              <span className="text-card-foreground font-medium">{result.shengXiao}</span>
              {result.naYin && (
                <>
                  {' | 纳音: '}
                  <span className="text-card-foreground font-medium">{result.naYin.name}</span>
                  {'（'}
                  <span className={ELEMENT_STYLES[result.naYin.element].text}>
                    {result.naYin.element}
                  </span>
                  {'）'}
                </>
              )}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-secondary">
              {result.gender === '男' ? '乾造' : '坤造'}
            </span>
          </div>
        </div>

        {/* 四柱 */}
        <div className="flex justify-center gap-4 md:gap-8">
          <PillarCard label="年柱" gan={result.yearGan} zhi={result.yearZhi} />
          <PillarCard label="月柱" gan={result.monthGan} zhi={result.monthZhi} />
          <PillarCard label="日柱" gan={result.dayGan} zhi={result.dayZhi} />
          <PillarCard label="时柱" gan={result.hourGan} zhi={result.hourZhi} />
        </div>
      </div>

      {/* 五行分布 */}
      <div className="bg-card rounded-xl border border-border p-6 md:p-8">
        <h2 className="text-xl font-serif font-bold text-card-foreground mb-6">
          五行分布
        </h2>
        <div className="space-y-3">
          {allElements.map((element) => (
            <WuXingBar
              key={element}
              element={element}
              count={result.wuXingCount[element]}
              max={maxCount}
            />
          ))}
        </div>

        {/* 缺失五行提示 */}
        {result.missingWuXing.length > 0 && (
          <div className="mt-6 p-4 bg-secondary rounded-lg border border-border">
            <h3 className="text-sm font-semibold text-card-foreground mb-2">
              五行缺失分析
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {'您的八字五行中缺少: '}
              {result.missingWuXing.map((e, i) => (
                <span key={e}>
                  {i > 0 && '、'}
                  <span className={`font-bold ${ELEMENT_STYLES[e].text}`}>{e}</span>
                </span>
              ))}
            </p>
            <div className="space-y-2">
              {result.missingWuXing.map((e) => (
                <div key={e} className="text-sm">
                  <span className={`font-serif font-bold ${ELEMENT_STYLES[e].text}`}>
                    {e}
                  </span>
                  <span className="text-muted-foreground">
                    {' - '}{WU_XING_DESC[e]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {result.missingWuXing.length === 0 && (
          <div className="mt-6 p-4 bg-secondary rounded-lg border border-border">
            <h3 className="text-sm font-semibold text-card-foreground mb-2">
              五行齐全
            </h3>
            <p className="text-sm text-muted-foreground">
              恭喜您，八字中五行齐全，属于五行平衡的命局。虽然五行齐全，但各行力量有强弱之分，仍可通过选择合适的发展方位来增强运势。
            </p>
          </div>
        )}
      </div>

      {/* 补救建议 */}
      {result.missingWuXing.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-6 md:p-8">
          <h2 className="text-xl font-serif font-bold text-card-foreground mb-4">
            五行补救建议
          </h2>
          <div className="space-y-3">
            {result.missingWuXing.map((e) => (
              <div key={e} className={`p-4 rounded-lg ${ELEMENT_STYLES[e].bg} ${ELEMENT_STYLES[e].border} border`}>
                <span className={`font-serif font-bold text-lg ${ELEMENT_STYLES[e].text}`}>
                  补{e}
                </span>
                <p className={`mt-1 text-sm ${ELEMENT_STYLES[e].text} opacity-80`}>
                  {WU_XING_REMEDY[e]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
