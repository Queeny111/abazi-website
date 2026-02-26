// 天干
export const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'] as const;
// 地支
export const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const;
// 生肖
export const SHENG_XIAO = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'] as const;

// 五行类型
export type WuXingElement = '金' | '木' | '水' | '火' | '土';

// 天干对应五行
export const TIAN_GAN_WU_XING: Record<string, WuXingElement> = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水',
};

// 地支对应五行
export const DI_ZHI_WU_XING: Record<string, WuXingElement> = {
  '子': '水', '丑': '土',
  '寅': '木', '卯': '木',
  '辰': '土', '巳': '火',
  '午': '火', '未': '土',
  '申': '金', '酉': '金',
  '戌': '土', '亥': '水',
};

// 地支藏干
export const DI_ZHI_CANG_GAN: Record<string, string[]> = {
  '子': ['癸'],
  '丑': ['己', '癸', '辛'],
  '寅': ['甲', '丙', '戊'],
  '卯': ['乙'],
  '辰': ['戊', '乙', '癸'],
  '巳': ['丙', '庚', '戊'],
  '午': ['丁', '己'],
  '未': ['己', '丁', '乙'],
  '申': ['庚', '壬', '戊'],
  '酉': ['辛'],
  '戌': ['戊', '辛', '丁'],
  '亥': ['壬', '甲'],
};

// 五行相生关系
export const WU_XING_SHENG: Record<WuXingElement, WuXingElement> = {
  '木': '火', '火': '土', '土': '金', '金': '水', '水': '木',
};

// 五行相克关系
export const WU_XING_KE: Record<WuXingElement, WuXingElement> = {
  '木': '土', '土': '水', '水': '火', '火': '金', '金': '木',
};

// 纳音五行（六十甲子纳音表）
const NA_YIN_TABLE: [string, string, WuXingElement, string][] = [
  ['甲子', '乙丑', '金', '海中金'],
  ['丙寅', '丁卯', '火', '炉中火'],
  ['戊辰', '己巳', '木', '大林木'],
  ['庚午', '辛未', '土', '路旁土'],
  ['壬申', '癸酉', '金', '剑锋金'],
  ['甲戌', '乙亥', '火', '山头火'],
  ['丙子', '丁丑', '水', '涧下水'],
  ['戊寅', '己卯', '土', '城头土'],
  ['庚辰', '辛巳', '金', '白蜡金'],
  ['壬午', '癸未', '木', '杨柳木'],
  ['甲申', '乙酉', '水', '泉中水'],
  ['丙戌', '丁亥', '土', '屋上土'],
  ['戊子', '己丑', '火', '霹雳火'],
  ['庚寅', '辛卯', '木', '松柏木'],
  ['壬辰', '癸巳', '水', '长流水'],
  ['甲午', '乙未', '金', '沙中金'],
  ['丙申', '丁酉', '火', '山下火'],
  ['戊戌', '己亥', '木', '平地木'],
  ['庚子', '辛丑', '土', '壁上土'],
  ['壬寅', '癸卯', '金', '金箔金'],
  ['甲辰', '乙巳', '火', '覆灯火'],
  ['丙午', '丁未', '水', '天河水'],
  ['戊申', '己酉', '土', '大驿土'],
  ['庚戌', '辛亥', '金', '钗钏金'],
  ['壬子', '癸丑', '木', '桑柘木'],
  ['甲寅', '乙卯', '水', '大溪水'],
  ['丙辰', '丁巳', '土', '沙中土'],
  ['戊午', '己未', '火', '天上火'],
  ['庚申', '辛酉', '木', '石榴木'],
  ['壬戌', '癸亥', '水', '大海水'],
];

export function getNaYin(ganZhi: string): { element: WuXingElement; name: string } | null {
  for (const [gz1, gz2, element, name] of NA_YIN_TABLE) {
    if (ganZhi === gz1 || ganZhi === gz2) {
      return { element, name };
    }
  }
  return null;
}

// 阴历数据表（1900-2100）
// 每个元素的格式：
// 低12位表示每月大小（1=大月30天，0=小月29天）
// 高4位表示闰月月份（0表示无闰月）
// 最后一个字节的某位用于闰月大小
const LUNAR_INFO = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
  0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a4d0, 0x0d150, 0x0f252,
  0x0d520,
];

// 获取农历某年的闰月月份（0=无闰月）
function lunarLeapMonth(year: number): number {
  return LUNAR_INFO[year - 1900] & 0xf;
}

// 获取农历某年闰月的天数
function lunarLeapDays(year: number): number {
  if (lunarLeapMonth(year)) {
    return (LUNAR_INFO[year - 1900] & 0x10000) ? 30 : 29;
  }
  return 0;
}

// 获取农历某年某月的天数
function lunarMonthDays(year: number, month: number): number {
  return (LUNAR_INFO[year - 1900] & (0x10000 >> month)) ? 30 : 29;
}

// 获取农历某年的总天数
function lunarYearDays(year: number): number {
  let sum = 348;
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    sum += (LUNAR_INFO[year - 1900] & i) ? 1 : 0;
  }
  return sum + lunarLeapDays(year);
}

// 阳历转阴历
export function solarToLunar(year: number, month: number, day: number): {
  lunarYear: number;
  lunarMonth: number;
  lunarDay: number;
  isLeap: boolean;
} {
  // 以1900年1月31日（农历正月初一）为基准
  const baseDate = new Date(1900, 0, 31);
  const targetDate = new Date(year, month - 1, day);
  let offset = Math.floor((targetDate.getTime() - baseDate.getTime()) / 86400000);

  let lunarYear = 1900;
  let temp = 0;
  for (lunarYear = 1900; lunarYear < 2101 && offset > 0; lunarYear++) {
    temp = lunarYearDays(lunarYear);
    offset -= temp;
  }
  if (offset < 0) {
    offset += temp;
    lunarYear--;
  }

  const leap = lunarLeapMonth(lunarYear);
  let isLeap = false;
  let lunarMonth = 1;

  for (lunarMonth = 1; lunarMonth < 13 && offset > 0; lunarMonth++) {
    if (leap > 0 && lunarMonth === (leap + 1) && !isLeap) {
      --lunarMonth;
      isLeap = true;
      temp = lunarLeapDays(lunarYear);
    } else {
      temp = lunarMonthDays(lunarYear, lunarMonth);
    }
    if (isLeap && lunarMonth === (leap + 1)) {
      isLeap = false;
    }
    offset -= temp;
  }

  if (offset === 0 && leap > 0 && lunarMonth === leap + 1) {
    if (isLeap) {
      isLeap = false;
    } else {
      isLeap = true;
      --lunarMonth;
    }
  }
  if (offset < 0) {
    offset += temp;
    --lunarMonth;
  }
  const lunarDay = offset + 1;

  return { lunarYear, lunarMonth, lunarDay, isLeap };
}

// 阴历转阳历
export function lunarToSolar(lunarYear: number, lunarMonth: number, lunarDay: number, isLeap: boolean = false): {
  year: number;
  month: number;
  day: number;
} {
  const leap = lunarLeapMonth(lunarYear);

  // 计算从1900年正月初一到目标日期的天数
  let offset = 0;
  for (let y = 1900; y < lunarYear; y++) {
    offset += lunarYearDays(y);
  }

  for (let m = 1; m < lunarMonth; m++) {
    offset += lunarMonthDays(lunarYear, m);
    if (m === leap) {
      offset += lunarLeapDays(lunarYear);
    }
  }

  if (isLeap && lunarMonth === leap) {
    offset += lunarMonthDays(lunarYear, lunarMonth);
  }

  offset += lunarDay - 1;

  const baseDate = new Date(1900, 0, 31);
  const resultDate = new Date(baseDate.getTime() + offset * 86400000);

  return {
    year: resultDate.getFullYear(),
    month: resultDate.getMonth() + 1,
    day: resultDate.getDate(),
  };
}

// 节气数据（用于确定月柱）
// 每年24节气对应的日期偏差
const JIEQI_BASE = [
  [6, 20], // 小寒, 大寒 (1月)
  [4, 19], // 立春, 雨水 (2月)
  [6, 21], // 惊蛰, 春分 (3月)
  [5, 20], // 清明, 谷雨 (4月)
  [6, 21], // 立夏, 小满 (5月)
  [6, 21], // 芒种, 夏至 (6月)
  [7, 23], // 小暑, 大暑 (7月)
  [7, 23], // 立秋, 处暑 (8月)
  [8, 23], // 白露, 秋分 (9月)
  [8, 23], // 寒露, 霜降 (10月)
  [7, 22], // 立冬, 小雪 (11月)
  [7, 22], // 大雪, 冬至 (12月)
];

// 获取年柱
function getYearGanZhi(year: number, month: number, day: number): { gan: string; zhi: string } {
  // 立春前属于上一年
  let y = year;
  if (month < 2 || (month === 2 && day < 4)) {
    y = y - 1;
  }
  const ganIndex = (y - 4) % 10;
  const zhiIndex = (y - 4) % 12;
  return {
    gan: TIAN_GAN[ganIndex >= 0 ? ganIndex : ganIndex + 10],
    zhi: DI_ZHI[zhiIndex >= 0 ? zhiIndex : zhiIndex + 12],
  };
}

// 获取月柱
function getMonthGanZhi(year: number, month: number, day: number): { gan: string; zhi: string } {
  // 根据节气确定月份
  let y = year;
  let m = month;

  // 节气月份：立春开始为寅月
  const jieDay = JIEQI_BASE[month - 1]?.[0] ?? 6;
  if (day < jieDay) {
    m = m - 1;
    if (m === 0) {
      m = 12;
      y = y - 1;
    }
  }

  // 月支：寅月=1月(立春后)
  const monthZhiMap = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1]; // 月份对应地支索引
  const zhiIndex = monthZhiMap[m - 1];

  // 年干决定月干起始
  const yearGan = getYearGanZhi(y, m === 1 ? 2 : m, m === 1 ? 5 : day);
  const yearGanIndex = TIAN_GAN.indexOf(yearGan.gan as typeof TIAN_GAN[number]);

  // 五虎遁月法
  const monthGanBase = [2, 4, 6, 8, 0]; // 甲己起丙寅、乙庚起戊寅...
  const ganStart = monthGanBase[yearGanIndex % 5];
  const ganIndex = (ganStart + zhiIndex) % 10;

  return {
    gan: TIAN_GAN[ganIndex],
    zhi: DI_ZHI[zhiIndex],
  };
}

// 获取日柱（使用简化计算法）
function getDayGanZhi(year: number, month: number, day: number): { gan: string; zhi: string } {
  // 基于蔡勒公式变体计算日干支
  // 以2000年1月7日（甲子日）为基准
  const baseDate = new Date(2000, 0, 7);
  const targetDate = new Date(year, month - 1, day);
  const diff = Math.floor((targetDate.getTime() - baseDate.getTime()) / 86400000);
  const index = ((diff % 60) + 60) % 60;
  return {
    gan: TIAN_GAN[index % 10],
    zhi: DI_ZHI[index % 12],
  };
}

// 获取时柱
function getHourGanZhi(dayGan: string, hour: number): { gan: string; zhi: string } {
  // 时辰地支
  const hourZhiIndex = Math.floor(((hour + 1) % 24) / 2);

  // 五鼠遁时法
  const dayGanIndex = TIAN_GAN.indexOf(dayGan as typeof TIAN_GAN[number]);
  const hourGanBase = [0, 2, 4, 6, 8]; // 甲己起甲子、乙庚起丙子...
  const ganStart = hourGanBase[dayGanIndex % 5];
  const ganIndex = (ganStart + hourZhiIndex) % 10;

  return {
    gan: TIAN_GAN[ganIndex],
    zhi: DI_ZHI[hourZhiIndex],
  };
}

// 完整八字计算
export type Gender = '男' | '女';

export interface BaZiResult {
  yearGan: string;
  yearZhi: string;
  monthGan: string;
  monthZhi: string;
  dayGan: string;
  dayZhi: string;
  hourGan: string;
  hourZhi: string;
  wuXingCount: Record<WuXingElement, number>;
  missingWuXing: WuXingElement[];
  strongWuXing: WuXingElement[];
  dayMaster: WuXingElement;
  naYin: { element: WuXingElement; name: string } | null;
  shengXiao: string;
  gender: Gender;
  /** 例如 "己土女" / "壬水男" */
  dayMasterLabel: string;
}

export function calculateBaZi(
  year: number,
  month: number,
  day: number,
  hour: number,
  isLunar: boolean = false,
  gender: Gender = '男'
): BaZiResult {
  let solarYear = year;
  let solarMonth = month;
  let solarDay = day;

  if (isLunar) {
    const solar = lunarToSolar(year, month, day);
    solarYear = solar.year;
    solarMonth = solar.month;
    solarDay = solar.day;
  }

  const yearPillar = getYearGanZhi(solarYear, solarMonth, solarDay);
  const monthPillar = getMonthGanZhi(solarYear, solarMonth, solarDay);
  const dayPillar = getDayGanZhi(solarYear, solarMonth, solarDay);
  const hourPillar = getHourGanZhi(dayPillar.gan, hour);

  // 统计五行
  const wuXingCount: Record<WuXingElement, number> = {
    '金': 0, '木': 0, '水': 0, '火': 0, '土': 0,
  };

  // 天干五行
  const allGan = [yearPillar.gan, monthPillar.gan, dayPillar.gan, hourPillar.gan];
  const allZhi = [yearPillar.zhi, monthPillar.zhi, dayPillar.zhi, hourPillar.zhi];

  for (const g of allGan) {
    wuXingCount[TIAN_GAN_WU_XING[g]]++;
  }

  // 地支五行（含藏干）
  for (const z of allZhi) {
    wuXingCount[DI_ZHI_WU_XING[z]]++;
    const cangGan = DI_ZHI_CANG_GAN[z];
    if (cangGan) {
      for (const cg of cangGan) {
        wuXingCount[TIAN_GAN_WU_XING[cg]] += 0.3; // 藏干权重较低
      }
    }
  }

  // 缺失五行
  const missingWuXing: WuXingElement[] = [];
  const strongWuXing: WuXingElement[] = [];
  const elements: WuXingElement[] = ['金', '木', '水', '火', '土'];

  for (const e of elements) {
    if (wuXingCount[e] < 0.5) {
      missingWuXing.push(e);
    }
    if (wuXingCount[e] >= 3) {
      strongWuXing.push(e);
    }
  }

  // 日主（日干）
  const dayMaster = TIAN_GAN_WU_XING[dayPillar.gan];

  // 纳音
  const yearGanZhi = yearPillar.gan + yearPillar.zhi;
  const naYin = getNaYin(yearGanZhi);

  // 生肖
  const lunarInfo = isLunar
    ? { lunarYear: year }
    : solarToLunar(solarYear, solarMonth, solarDay);
  const shengXiaoIndex = ((lunarInfo.lunarYear - 4) % 12 + 12) % 12;

  return {
    yearGan: yearPillar.gan,
    yearZhi: yearPillar.zhi,
    monthGan: monthPillar.gan,
    monthZhi: monthPillar.zhi,
    dayGan: dayPillar.gan,
    dayZhi: dayPillar.zhi,
    hourGan: hourPillar.gan,
    hourZhi: hourPillar.zhi,
    wuXingCount,
    missingWuXing,
    strongWuXing,
    dayMaster,
    naYin,
    shengXiao: SHENG_XIAO[shengXiaoIndex],
    gender,
    dayMasterLabel: `${dayPillar.gan}${dayMaster}${gender}`,
  };
}

// 五行颜色映射
export const WU_XING_COLORS: Record<WuXingElement, string> = {
  '金': 'var(--metal)',
  '木': 'var(--wood)',
  '水': 'var(--water)',
  '火': 'var(--fire)',
  '土': 'var(--earth)',
};

export const WU_XING_COLOR_CLASSES: Record<WuXingElement, string> = {
  '金': 'text-metal',
  '木': 'text-wood',
  '水': 'text-water',
  '火': 'text-fire',
  '土': 'text-earth',
};

export const WU_XING_BG_CLASSES: Record<WuXingElement, string> = {
  '金': 'bg-metal',
  '木': 'bg-wood',
  '水': 'bg-water',
  '火': 'bg-fire',
  '土': 'bg-earth',
};

// 五行描述
export const WU_XING_DESC: Record<WuXingElement, string> = {
  '金': '代表义气、果断、刚毅。金主收敛，性格坚毅，做事有魄力。',
  '木': '代表仁慈、正直、上进。木主生长，性格温和，富有创造力。',
  '水': '代表智慧、灵活、包容。水主流动，性格聪慧，善于变通。',
  '火': '代表礼仪、热情、光明。火主向上，性格热烈，充满激情。',
  '土': '代表诚信、稳重、包容。土主承载，性格敦厚，踏实可靠。',
};

// 五行补救建议
export const WU_XING_REMEDY: Record<WuXingElement, string> = {
  '金': '可多穿白色、金色衣物，佩戴金属饰品，向西方发展有利。',
  '木': '可多穿绿色衣物，多接近花草树木，向东方发展有利。',
  '水': '可多穿黑色、蓝色衣物，多亲近水源，向北方发��有利。',
  '火': '可多穿红色、紫色衣物，多晒太阳，向南方发展有利。',
  '土': '可多穿黄色、棕色衣物，多接触土地，居中发展最佳。',
};
