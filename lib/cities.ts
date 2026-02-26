import type { WuXingElement } from './wuxing';

export interface CityInfo {
  name: string;
  province: string;
  elements: WuXingElement[];
  tier: '超一线' | '一线' | '新一线' | '二线' | '潜力城市' | '地级市';
  description: string;
  direction: '东' | '南' | '西' | '北' | '中' | '东南' | '东北' | '西南' | '西北';
}

// 方位对应五行
export const DIRECTION_ELEMENT: Record<string, WuXingElement> = {
  '东': '木',
  '南': '火',
  '西': '金',
  '北': '水',
  '中': '土',
  '东南': '木',
  '东北': '土',
  '西南': '土',
  '西北': '金',
};

// 全面的城市数据库 - 涵盖超一线/一线/新一线/二线/潜力/各省地级市
export const CITY_DATABASE: CityInfo[] = [
  // === 超一线城市 ===
  { name: '北京', province: '北京', elements: ['火', '土'], tier: '超一线', direction: '北', description: '千年古都，政治文化中心，土气深厚，火气旺盛' },
  { name: '上海', province: '上海', elements: ['水', '金'], tier: '超一线', direction: '东', description: '东方明珠，金融之都，水运亨通，金气汇聚' },
  { name: '广州', province: '广东', elements: ['火', '木'], tier: '超一线', direction: '南', description: '南国花城，商贸之都，火气充沛，木气盎然' },
  { name: '深圳', province: '广东', elements: ['水', '火'], tier: '超一线', direction: '南', description: '创新之城，科技之都，水火相济，蒸蒸日上' },

  // === 一线城市 ===
  { name: '成都', province: '四川', elements: ['土', '木'], tier: '一线', direction: '西南', description: '天府之国，宜居之城，土地肥沃，木气繁盛' },
  { name: '杭州', province: '浙江', elements: ['水', '木'], tier: '一线', direction: '东', description: '人间天堂，电商之都，水韵悠长，木秀江南' },
  { name: '重庆', province: '重庆', elements: ['火', '土'], tier: '一线', direction: '西南', description: '山城雾都，火锅之都，火土交融，热情似火' },
  { name: '武汉', province: '湖北', elements: ['水', '火'], tier: '一线', direction: '中', description: '九省通衢，江城水韵，水火相济，活力四射' },

  // === 新一线城市 ===
  { name: '南京', province: '江苏', elements: ['火', '水'], tier: '新一线', direction: '东', description: '六朝古都，文化名城，火水交融，文脉深厚' },
  { name: '天津', province: '天津', elements: ['水', '金'], tier: '新一线', direction: '北', description: '天子渡口，北方港城，水运通达，金气凝聚' },
  { name: '苏州', province: '江苏', elements: ['水', '木'], tier: '新一线', direction: '东', description: '园林之城，人间天堂，水木清华，温婉秀丽' },
  { name: '西安', province: '陕西', elements: ['金', '土'], tier: '新一线', direction: '西北', description: '十三朝古都，金土浑厚，厚重大气' },
  { name: '长沙', province: '湖南', elements: ['火', '土'], tier: '新一线', direction: '中', description: '星城火辣，娱乐之都，火气旺盛，土气稳固' },
  { name: '郑州', province: '河南', elements: ['土', '火'], tier: '新一线', direction: '中', description: '中原腹地，交通枢纽，土气厚重，火运兴旺' },
  { name: '东莞', province: '广东', elements: ['金', '火'], tier: '新一线', direction: '南', description: '世界工厂，制造之城，金气锐利，火气充沛' },
  { name: '青岛', province: '山东', elements: ['水', '木'], tier: '新一线', direction: '东', description: '帆船之都，啤酒之城，水木相生，清新宜人' },
  { name: '沈阳', province: '辽宁', elements: ['金', '水'], tier: '新一线', direction: '东北', description: '东北门户，工业重镇，金水相生，底蕴深厚' },
  { name: '宁波', province: '浙江', elements: ['水', '金'], tier: '新一线', direction: '东', description: '东方大港，商贸名城，水运通达，金气汇聚' },
  { name: '昆明', province: '云南', elements: ['木', '火'], tier: '新一线', direction: '西南', description: '春城无处不飞花，木气盎然，火气温和' },
  { name: '合肥', province: '安徽', elements: ['土', '水'], tier: '新一线', direction: '中', description: '科教名城，创新高地，土水相融，潜力无限' },
  { name: '佛山', province: '广东', elements: ['金', '火'], tier: '新一线', direction: '南', description: '武术之乡，陶瓷之都，金火淬炼，刚柔并济' },

  // === 二线城市 ===
  { name: '大连', province: '辽宁', elements: ['水', '金'], tier: '二线', direction: '东北', description: '北方明珠，滨海之城，水韵悠长，金气清新' },
  { name: '厦门', province: '福建', elements: ['水', '火'], tier: '二线', direction: '东南', description: '海上花园，宜居之城，水火相济，温润秀美' },
  { name: '福州', province: '福建', elements: ['木', '水'], tier: '二线', direction: '东南', description: '有福之州，温泉之城，木水相生，福气盈盈' },
  { name: '无锡', province: '江苏', elements: ['水', '金'], tier: '二线', direction: '东', description: '太湖明珠，鱼米之乡，水金相生，富庶安康' },
  { name: '济南', province: '山东', elements: ['水', '土'], tier: '二线', direction: '东', description: '泉城水韵，齐鲁之邦，水土相融，厚德载物' },
  { name: '哈尔滨', province: '黑龙江', elements: ['水', '金'], tier: '二线', direction: '东北', description: '冰城雪韵，东方莫斯科，水寒金冷，壮美辽阔' },
  { name: '长春', province: '吉林', elements: ['木', '水'], tier: '二线', direction: '东北', description: '汽车之城，北国春城，木水相生，生机勃勃' },
  { name: '贵阳', province: '贵州', elements: ['土', '木'], tier: '二线', direction: '西南', description: '林城绿意，避暑之都，土木相宜，清凉爽朗' },
  { name: '南宁', province: '广西', elements: ['木', '火'], tier: '二线', direction: '南', description: '绿城南宁，中国绿都，木火通明，热情好客' },
  { name: '石家庄', province: '河北', elements: ['土', '金'], tier: '二线', direction: '北', description: '燕赵古都，药都之城，土金相生，稳健发展' },
  { name: '太原', province: '山西', elements: ['金', '土'], tier: '二线', direction: '北', description: '龙城太原，煤铁之都，金土浑厚，底蕴深厚' },
  { name: '南昌', province: '江西', elements: ['火', '木'], tier: '二线', direction: '东南', description: '英雄之城，红色故土，火木相生，朝气蓬勃' },
  { name: '兰州', province: '甘肃', elements: ['金', '土'], tier: '二线', direction: '西北', description: '黄河之都，丝路重镇，金土相生，西北明珠' },
  { name: '温州', province: '浙江', elements: ['水', '火'], tier: '二线', direction: '东', description: '商贸名城，民营之都，水火交融，商道亨通' },
  { name: '海口', province: '海南', elements: ['水', '火'], tier: '二线', direction: '南', description: '椰城海韵，热带天堂，水火既济，温暖如春' },
  { name: '呼和浩特', province: '内蒙古', elements: ['土', '金'], tier: '二线', direction: '北', description: '青城召庙，塞外明珠，土金相生，辽阔豪迈' },

  // === 潜力城市 ===
  { name: '珠海', province: '广东', elements: ['水', '金'], tier: '潜力城市', direction: '南', description: '浪漫之城，宜居花园，水金相生，清新优雅' },
  { name: '芜湖', province: '安徽', elements: ['水', '木'], tier: '潜力城市', direction: '东', description: '长江明珠，创新之城，水木清华，生机盎然' },
  { name: '惠州', province: '广东', elements: ['木', '水'], tier: '潜力城市', direction: '南', description: '半城山色半城湖，木水相生，灵秀宜人' },
  { name: '中山', province: '广东', elements: ['火', '土'], tier: '潜力城市', direction: '南', description: '伟人故里，宜居之城，火土相生，勤劳进取' },
  { name: '嘉兴', province: '浙江', elements: ['水', '木'], tier: '潜力城市', direction: '东', description: '南湖烟雨，江南水乡，水木交融，润泽丰饶' },
  { name: '泉州', province: '福建', elements: ['水', '火'], tier: '潜力城市', direction: '东南', description: '海丝起点，商贸之都，水火既济，千年繁华' },
  { name: '常州', province: '江苏', elements: ['土', '木'], tier: '潜力城市', direction: '东', description: '龙城常州，智造名城，土木相生，稳中求进' },
  { name: '绍兴', province: '浙江', elements: ['水', '木'], tier: '潜力城市', direction: '东', description: '水乡酒城，名士之乡，水木秀丽，文脉悠长' },
  { name: '烟台', province: '山东', elements: ['水', '金'], tier: '潜力城市', direction: '东', description: '仙境海岸，葡萄酒城，水金相生，清雅怡人' },
  { name: '洛阳', province: '河南', elements: ['土', '火'], tier: '潜力城市', direction: '中', description: '十三朝古都，牡丹之城，土火相生，历史厚重' },
  { name: '银川', province: '宁夏', elements: ['金', '水'], tier: '潜力城市', direction: '西北', description: '塞上明珠，黄河之城，金水相生，独特魅力' },
  { name: '三亚', province: '海南', elements: ['水', '火'], tier: '潜力城市', direction: '南', description: '热带天堂，度假圣地，水火交融，温暖明媚' },

  // === 各省地级市代表 ===
  // 河北省
  { name: '唐山', province: '河北', elements: ['金', '土'], tier: '地级市', direction: '北', description: '钢铁之城，凤凰涅槃，金土浑厚，坚韧不拔' },
  { name: '保定', province: '河北', elements: ['土', '木'], tier: '地级市', direction: '北', description: '京畿重镇，古莲花城，土木相生，稳健厚实' },
  { name: '廊坊', province: '河北', elements: ['木', '土'], tier: '地级市', direction: '北', description: '京津走廊，宜居之城，木土交融，蓬勃发展' },
  { name: '邯郸', province: '河北', elements: ['土', '金'], tier: '地级市', direction: '北', description: '成语之都，历史名城，土金相生，文化厚重' },
  // 山西省
  { name: '大同', province: '山西', elements: ['金', '土'], tier: '地级市', direction: '北', description: '煤都云冈，塞外名城，金土浑厚，历史悠久' },
  { name: '临汾', province: '山西', elements: ['土', '火'], tier: '地级市', direction: '北', description: '华夏源头，尧都故地，土火相生，文明根基' },
  // 辽宁省
  { name: '鞍山', province: '辽宁', elements: ['金', '土'], tier: '地级市', direction: '东北', description: '钢都鞍山，玉都之城，金土浑厚，工业重镇' },
  { name: '营口', province: '辽宁', elements: ['水', '金'], tier: '地级市', direction: '东北', description: '百年港城，河海之交，水金相生，通达四方' },
  // 吉林省
  { name: '吉林', province: '吉林', elements: ['水', '木'], tier: '地级市', direction: '东北', description: '雾凇之都，松花江畔，水木清华，北国江城' },
  // 黑龙江省
  { name: '齐齐哈尔', province: '黑龙江', elements: ['水', '木'], tier: '地级市', direction: '东北', description: '鹤城齐齐哈尔，丹顶鹤之乡，水木灵秀' },
  { name: '牡丹江', province: '黑龙江', elements: ['水', '木'], tier: '地级市', direction: '东北', description: '雪城牡丹江，镜泊湖畔，水木相依，秀美壮丽' },
  // 江苏省
  { name: '南通', province: '江苏', elements: ['水', '土'], tier: '地级市', direction: '东', description: '江海之城，教育之乡，水土相融，勤劳致富' },
  { name: '徐州', province: '江苏', elements: ['土', '金'], tier: '地级市', direction: '东', description: '彭城徐州，兵家必争，土金相生，雄浑大气' },
  { name: '扬州', province: '江苏', elements: ['水', '木'], tier: '地级市', direction: '东', description: '运河名城，淮扬菜都，水木相生，诗意栖居' },
  { name: '盐城', province: '江苏', elements: ['水', '土'], tier: '地级市', direction: '东', description: '麋鹿之乡，盐碱之城，水土相容，生态富庶' },
  { name: '镇江', province: '江苏', elements: ['金', '水'], tier: '地级市', direction: '东', description: '天下第一江山，金水相生，山水秀丽' },
  { name: '泰州', province: '江苏', elements: ['水', '土'], tier: '地级市', direction: '东', description: '汉唐古郡，水韵泰州，水土相融，安泰祥和' },
  // 浙江省
  { name: '金华', province: '浙江', elements: ['金', '火'], tier: '地级市', direction: '东', description: '火腿之乡，婺学之邦，金火淬炼，商贸兴盛' },
  { name: '台州', province: '浙江', elements: ['水', '金'], tier: '地级市', direction: '东', description: '海洋经济，民营之都，水金相生，创业热土' },
  { name: '湖州', province: '浙江', elements: ['水', '木'], tier: '地级市', direction: '东', description: '丝绸之府，鱼米之乡，水木清华，生态宜居' },
  // 安徽省
  { name: '蚌埠', province: '安徽', elements: ['水', '土'], tier: '地级市', direction: '中', description: '珠城蚌埠，淮河明珠，水土交融，交通枢纽' },
  { name: '马鞍山', province: '安徽', elements: ['金', '土'], tier: '地级市', direction: '东', description: '诗城马鞍山，钢铁之城，金土浑厚，文武双全' },
  { name: '阜阳', province: '安徽', elements: ['土', '木'], tier: '地级市', direction: '中', description: '颍淮善郡，管子故里，土木相生，人杰地灵' },
  { name: '安庆', province: '安徽', elements: ['水', '木'], tier: '地级市', direction: '中', description: '皖江首城，黄梅之乡，水木相依，文脉悠远' },
  // 福建省
  { name: '漳州', province: '福建', elements: ['木', '火'], tier: '地级市', direction: '东南', description: '花果之城，水仙之乡，木火通明，生机盎然' },
  { name: '龙岩', province: '福建', elements: ['土', '火'], tier: '地级市', direction: '东南', description: '客家祖地，红色土楼，土火交融，坚韧厚实' },
  { name: '莆田', province: '福建', elements: ['水', '木'], tier: '地级市', direction: '东南', description: '荔城莆田，妈祖之乡，水木相生，商贾云集' },
  // 江西省
  { name: '赣州', province: '江西', elements: ['木', '土'], tier: '地级市', direction: '东南', description: '客家摇篮，稀土之都，木土相生，底蕴丰厚' },
  { name: '九江', province: '江西', elements: ['水', '木'], tier: '地级市', direction: '东南', description: '浔阳江头，庐山之城，水木秀丽，诗意盎然' },
  { name: '上饶', province: '江西', elements: ['木', '水'], tier: '地级市', direction: '东南', description: '物华天宝，人杰地灵，木水相生，灵秀天成' },
  // 山东省
  { name: '潍坊', province: '山东', elements: ['木', '土'], tier: '地级市', direction: '东', description: '风筝之都，蔬菜之乡，木土相生，勤劳朴实' },
  { name: '临沂', province: '山东', elements: ['水', '木'], tier: '地级市', direction: '东', description: '书圣故里，物流之都，水木相生，商贸繁荣' },
  { name: '淄博', province: '山东', elements: ['火', '土'], tier: '地级市', direction: '东', description: '齐国故都，陶瓷之城，火土交融，工艺精湛' },
  { name: '威海', province: '山东', elements: ['水', '金'], tier: '地级市', direction: '东', description: '海滨花园，宜居之城，水金相生，清新怡人' },
  { name: '泰安', province: '山东', elements: ['土', '金'], tier: '地级市', direction: '东', description: '泰山脚下，国泰民安，土金浑厚，雄伟壮观' },
  { name: '日照', province: '山东', elements: ['火', '水'], tier: '地级市', direction: '东', description: '阳光海岸，日出之城，火水交济，朝气蓬勃' },
  // 河南省
  { name: '开封', province: '河南', elements: ['土', '水'], tier: '地级市', direction: '中', description: '八朝古都，汴梁梦华，土水相融，文化厚重' },
  { name: '新乡', province: '河南', elements: ['土', '木'], tier: '地级市', direction: '中', description: '牧野之城，创新之邦，土木相生，稳步向前' },
  { name: '许昌', province: '河南', elements: ['土', '火'], tier: '地级市', direction: '中', description: '三国故都，花木之都，土火相生，繁花似锦' },
  { name: '南阳', province: '河南', elements: ['木', '土'], tier: '地级市', direction: '中', description: '卧龙之地，玉雕之乡，木土相宜，龙气盘旋' },
  // 湖北省
  { name: '宜昌', province: '湖北', elements: ['水', '木'], tier: '地级市', direction: '中', description: '三峡门户，水电之都，水木相依，碧波浩荡' },
  { name: '襄阳', province: '湖北', elements: ['土', '火'], tier: '地级市', direction: '中', description: '兵家要地，诸葛故里，土火交融，刚勇忠义' },
  { name: '荆州', province: '湖北', elements: ['水', '土'], tier: '地级市', direction: '中', description: '三国名城，鱼米之乡，水土相容，历史厚重' },
  // 湖南省
  { name: '株洲', province: '湖南', elements: ['火', '金'], tier: '地级市', direction: '中', description: '动力之都，轨道之城，火金相克化吉，技术领先' },
  { name: '岳阳', province: '湖南', elements: ['水', '木'], tier: '地级市', direction: '中', description: '洞庭湖畔，岳阳楼下，水木清华，人文荟萃' },
  { name: '衡阳', province: '湖南', elements: ['火', '土'], tier: '地级市', direction: '中', description: '雁城衡阳，南岳之麓，火土交融，英武之气' },
  { name: '常德', province: '湖南', elements: ['水', '木'], tier: '地级市', direction: '中', description: '桃花源里，德行之城，水木相生，田园牧歌' },
  // 广东省
  { name: '汕头', province: '广东', elements: ['水', '火'], tier: '地级市', direction: '南', description: '海滨邹鲁，侨乡汕头，水火相济，商贸通达' },
  { name: '湛江', province: '广东', elements: ['水', '木'], tier: '地级市', direction: '南', description: '南海明珠，港城湛江，水木相生，碧海蓝天' },
  { name: '江门', province: '广东', elements: ['水', '金'], tier: '地级市', direction: '南', description: '五邑之都，侨乡江门，水金相生，中西交融' },
  { name: '茂名', province: '广东', elements: ['火', '木'], tier: '地级市', direction: '南', description: '南方油城，好心茂名，火木通明，热情豪爽' },
  // 广西省
  { name: '桂林', province: '广西', elements: ['木', '水'], tier: '地级市', direction: '南', description: '山水甲天下，木水相生，灵秀天成' },
  { name: '柳州', province: '广西', elements: ['金', '木'], tier: '地级市', direction: '南', description: '工业柳州，紫荆花城，金木交融，刚柔相济' },
  { name: '北海', province: '广西', elements: ['水', '金'], tier: '地级市', direction: '南', description: '银滩北海，南珠之乡，水金相生，碧海银沙' },
  // 四川省
  { name: '绵阳', province: '四川', elements: ['火', '木'], tier: '地级市', direction: '西南', description: '科技之城，李白故里，火木通明，创新驱动' },
  { name: '德阳', province: '四川', elements: ['土', '金'], tier: '地级市', direction: '西南', description: '重装之都，三星堆城，土金相生，工业脊梁' },
  { name: '宜宾', province: '四川', elements: ['水', '木'], tier: '地级市', direction: '西南', description: '酒都宜宾，万里长江第一城，水木相依' },
  { name: '乐山', province: '四川', elements: ['水', '土'], tier: '地级市', direction: '西南', description: '乐山大佛，海棠之城，水土融合，禅意悠然' },
  { name: '泸州', province: '四川', elements: ['水', '火'], tier: '地级市', direction: '西南', description: '酒城泸州，长沱交汇，水火相济，浓香四溢' },
  // 贵州省
  { name: '遵义', province: '贵州', elements: ['土', '火'], tier: '地级市', direction: '西南', description: '转折之城，红色遵义，土火交融，革命精神' },
  { name: '六盘水', province: '贵州', elements: ['水', '金'], tier: '地级市', direction: '西南', description: '凉都六盘水，避暑天堂，水金相生，清凉怡人' },
  // 云南省
  { name: '大理', province: '云南', elements: ['木', '水'], tier: '地级市', direction: '西南', description: '风花雪月，苍洱之间，木水相生，诗意田园' },
  { name: '曲靖', province: '云南', elements: ['土', '木'], tier: '地级市', direction: '西南', description: '珠江源头，麒麟之城，土木相生，质朴秀美' },
  { name: '玉溪', province: '云南', elements: ['水', '木'], tier: '地级市', direction: '西南', description: '聂耳故乡，云烟之城，水木清华，灵秀之地' },
  // 陕西省
  { name: '咸阳', province: '陕西', elements: ['土', '金'], tier: '地级市', direction: '西北', description: '秦都咸阳，帝陵之城，土金相生，皇气凝聚' },
  { name: '宝鸡', province: '陕西', elements: ['金', '火'], tier: '地级市', direction: '西北', description: '炎帝故里，青铜之城，金火淬炼，文明之源' },
  { name: '汉中', province: '陕西', elements: ['木', '水'], tier: '地级市', direction: '西北', description: '天汉之地，汉文化发源地，木水相生，钟灵毓秀' },
  { name: '延安', province: '陕西', elements: ['火', '土'], tier: '地级市', direction: '西北', description: '革命圣地，黄土高原，火土交融，精神圣城' },
  // 甘肃省
  { name: '天水', province: '甘肃', elements: ['水', '土'], tier: '地级市', direction: '西北', description: '陇上江南，伏羲故里，水土相融，温润如玉' },
  { name: '酒泉', province: '甘肃', elements: ['金', '水'], tier: '地级市', direction: '西北', description: '航天之城，丝路重镇，金水相生，大漠雄风' },
  // 新疆
  { name: '乌鲁木齐', province: '新疆', elements: ['金', '土'], tier: '地级市', direction: '西北', description: '天山之城，西域明珠，金土浑厚，辽阔壮美' },
  // 西藏
  { name: '拉萨', province: '西藏', elements: ['金', '火'], tier: '地级市', direction: '西南', description: '日光之城，雪域圣地，金火辉煌，圣洁庄严' },
  // 青海
  { name: '西宁', province: '青海', elements: ['水', '土'], tier: '地级市', direction: '西北', description: '夏都西宁，高原明珠，水土交融，清凉宜人' },
];

// 根据五行缺失推荐城市
export function recommendCities(
  missingElements: WuXingElement[],
  strongElements: WuXingElement[],
  dayMaster: WuXingElement,
  currentCity?: string
): {
  bestMatch: CityInfo[];
  goodMatch: CityInfo[];
  currentCityInfo: CityInfo | null;
  currentCityAnalysis: string;
} {
  // 需要补充的五行 = 缺失的五行 + 生日主的五行
  const neededElements = new Set<WuXingElement>(missingElements);

  // 对日主的生扶五行也是有利的
  const SHENG_MAP: Record<WuXingElement, WuXingElement> = {
    '木': '水', '火': '木', '土': '火', '金': '土', '水': '金',
  };
  neededElements.add(SHENG_MAP[dayMaster]);

  const currentCityInfo = currentCity
    ? CITY_DATABASE.find((c) => c.name === currentCity) || null
    : null;

  let currentCityAnalysis = '';
  if (currentCityInfo) {
    const dirElement = DIRECTION_ELEMENT[currentCityInfo.direction];
    const cityElements = [...currentCityInfo.elements, dirElement];
    const matchCount = cityElements.filter((e) => neededElements.has(e)).length;
    const conflictCount = cityElements.filter((e) => strongElements.includes(e)).length;

    if (matchCount >= 2 && conflictCount === 0) {
      currentCityAnalysis = `${currentCityInfo.name}的五行属性与您非常匹配！此城${currentCityInfo.elements.join('、')}气旺盛，方位属${currentCityInfo.direction}（${dirElement}），能有效补充您所需的五行能量，非常适合在此发展。`;
    } else if (matchCount >= 1) {
      currentCityAnalysis = `${currentCityInfo.name}对您来说尚可。此城有${currentCityInfo.elements.join('、')}属性，部分符合您的五行需求，可以在此发展，但可能不是最优选择。`;
    } else {
      currentCityAnalysis = `${currentCityInfo.name}的五行属性与您的需求匹配度较低。建议您考虑五行属性更符合您命理需求的城市，以获得更好的发展运势。`;
    }
  }

  // 评分并排序所有城市
  const scored = CITY_DATABASE
    .filter((c) => c.name !== currentCity)
    .map((city) => {
      const dirElement = DIRECTION_ELEMENT[city.direction];
      const cityElements = [...city.elements, dirElement];
      let score = 0;

      // 包含缺失五行 +3
      for (const e of cityElements) {
        if (missingElements.includes(e)) score += 3;
      }

      // 包含需要的五行 +2
      for (const e of cityElements) {
        if (neededElements.has(e)) score += 2;
      }

      // 包含过旺五行 -2
      for (const e of cityElements) {
        if (strongElements.includes(e)) score -= 2;
      }

      // 城市等级加分
      const tierBonus: Record<string, number> = {
        '超一线': 2, '一线': 1.5, '新一线': 1, '二线': 0.5, '潜力城市': 0.8, '地级市': 0.3,
      };
      score += tierBonus[city.tier] || 0;

      return { city, score };
    })
    .sort((a, b) => b.score - a.score);

  const bestMatch = scored.slice(0, 8).map((s) => s.city);
  const goodMatch = scored.slice(8, 20).map((s) => s.city);

  return { bestMatch, goodMatch, currentCityInfo, currentCityAnalysis };
}

// 获取城市列表（仅名称，用于搜索）
export function getCityNames(): string[] {
  return CITY_DATABASE.map((c) => c.name);
}
