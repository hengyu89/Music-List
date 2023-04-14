var songList = [
    "等",  "光",  "椿",  "谁",  "朵",  "蓝",  "该",  "哎",  "鱼",  "罪",  "懒",  "慢",  
    "画",  "猫",  "退",  "故",  "了",  "谜",  "喵",  "锁",  "嗖",  "借",  "马",  
    
    "离殇",  "走马",  "依恋",  "愿你",  "十二",  "余香",  "稻香",  "苦厄",  
    "成都",  "彩虹",  "后来",  "敬你",  "体面",  "小莉",  "心恋",  "催眠",  
    "旋木",  "人间",  "恶意",  "落霜",  "老郭",  "浮白",  "耳朵",  "双目",  
    "开荒",  "是红",  "长岛",  "再见",  "丫头",  "回答",  "小宇",  "不待",  
    "山下",  "旧词",  "鸭子",  "也罢",  "成全",  "火苗",  "喜欢",  "胆怯",  
    "乌兰",  "迷宫",  "戏子",  "晚婚",  "孔雀",  "辣糖",  "流氓",  "南下",  
    "借我",  "拥抱",  "想起",  "情花",  "无语",  "补妆",  "表态",  "天涯",  
    "素颜",  "傲寒",  "小小",  "下雨",  "送别",  "狂妄",  "水手",  "暖暖",  
    "倒带",  "盛夏",  "滴答",  "皆非",  "不怕",  "鼓楼",  "五味",  "闷夏",  
    "小薇",  "碌碌",  "思凡",  "白羊",  "千禧",  "蠢货",  "不安",  "喂狗",  
    "时光",  "一瞬",  "混迹",  "事事",  "安静",  "如愿",  "春天",  "树说",  
    "不够",  "夜诉",  "钻石",  "乖啊",  "上车",  "画心",  "即兴",  "妄为",  
    "过火",  "一个",  "电钻",  "妄言",  "蚍蜉",  "是否",  "出嫁",  "你走",  
    "预谋",  "呓语",  "黄昏",  "像鱼",  "遇见",  "霞光",  "白夜",  "月光",  
    "儿时",  "虚拟",  "阿妮",  "残雪",  "童年",  "故国",  "米店",  "远近",  
    "深蓝",  "故梦",  "骑士",  "消愁",  "光白",  "影黑",  "我曾",  "是你",  
    "奔跑",
    
    "略略略",  "声声慢",  "差三岁",  "好一点",  "红玫瑰",  "致青春",  
    "胡广生",  "童话镇",  "想某人",  "小丑女",  "十九岁",  "讲真的",  
    "小相思",  "山中客",  "安眠咒",  "小旅馆",  "盗将行",  "思人树",  
    "一个人",  "五个人",  "摇篮曲",  "桃花运",  "若把你",  "甜蜜蜜",  
    "罗马表",  "萌二代",  "小猪歌",  "怪我咯",  "春风吹",  "干物女",  
    "美人鱼",  "中意他",  "可能否",  "么么哒",  "大圈圈",  "心空空",  
    "喜欢你",  "哈哈哈",  "他妈的",  "分手炮",  "老中医",  "异想记",  
    "樱花草",  "七月上",  "莉莉安",  "郭源潮",  "董小姐",  "安和桥",  
    "好想你",  "绿袖子",  "逼格棒",  "偶阵雨",  "静悄悄",  "门没锁",  
    "给你们",  "九山记",  "妙龄童",  "占有欲",  "QQ爱",  "坏女孩",  
    "柠檬树",  "小宝贝",  "在深秋",  "天黑黑",  "荒唐戏",  "追光者",  
    "晚安喵",  "笨小孩",  "七里香",  "早起歌",  "落花情",  "逍遥叹",  
    "最天使",  "此时我",  "那天后",  "青花瓷",  "小幸运",  "多情种",  
    "他的猫",  "我的猫",  "要爱爱",  "思密达",  "借根烟",  "茶酒伴",  
    "红蔷薇",  "胆小鬼",  "性空山",  "须尽欢",  "王招君",  "他还在",  
    "我记得",  "风飞沙",  "怎么办",  "桃花笑",  "小恋曲",  "小神仙",  
    "阿婆说",  "红山果",  "起风了",  "新的家",  "女儿情",  "笑忘书",  
    "虫儿飞",  "小苹果",  "追梦人",  "Fly",   
    
    "宝贝宝贝",  "星语心愿",  "以梦喂马",  "雀斑少女",  "桥边姑娘",  
    "别再闹了",  "夏天的风",  "九月日记",  "忽然之间",  "告白气球",  
    "一首情歌",  "蝴蝶泉边",  "水手公园",  "恋恋风尘",  "小镇姑娘",  
    "只道寻常",  "等一分钟",  "我好想你",  "济南济南",  "历历万乡",  
    "梦里梦外",  "第三人称",  "还好有你",  "悄悄的他",  "只不过是",  
    "海盗船长",  "又失恋了",  "晴天和猫",  "得过且过",  "美梦噩梦",  
    "南来北往",  "匆匆那年",  "逆流成河",  "云烟成雨",  "青梅竹马",  
    "再见青春",  "理想三旬",  "春风十里",  "六月的雨",  "一程山路",  
    "巴赫旧约",  "迷途之中",  "致命情人",  "拾荒的人",  "四号病房",  
    "感官先生",  "早啊早啊",  "不二情书",  "深度对话",  "你是我的",  
    "梦里水乡",  "听说你说",  "我在这里",  "花枝春野",  "空虚沸腾",  
    "我爱洗澡",  "不露声色",  "你啊你啊",  "当你老了",  "屌丝之歌",  
    "野火一季",  "童年串烧",  "一荤一素",  "给你给我",  "斑马斑马",  
    "桥豆麻袋",  "碎银几两",  "提拉米苏",  "我想你了",  "爱丫爱丫",  
    "男孩别哭",  "八年的爱",  "少年锦时",  "熬夜上瘾",  "太阳妈妈",  
    "不开的唇",  "风吹麦浪",  "张三的歌",  "荷塘月色",  "有何不可",  
    "三寸日光",  "一眼万年",  "模范情书",  "独自浪漫",  "网络情缘",  
    "纸短情长",  "爱的魔法",  "入戏太深",  "少年日志",  "世界之大",  
    "焰火青年",  "写给黄淮",  "星星月亮",  "从前的人",  "你的眼神",  
    "你若成风",  "滥俗的歌",  "情非得已",  "爱如潮水",  "嘿关于爱",  
    "人生态度",  "何苦来哉",  "那么骄傲",  "不再联系",  "多喝热水",  
    "南海姑娘",  "暗河日记",  "三妻四妾",  "说散就散",  "那又如何",  
    "牛仔很忙",  "电台情歌",  "致命情人",  "清明雨上",  "神秘礼物",
    "中年少女",  "类似爱情",  "南风北巷",  
     
    "公子向北走",  "给我一个吻",  "十一种孤独",  "平凡的一天",  "奇妙能力歌",  
    "旅行的意义",  "别找我麻烦",  "知道不知道",  "桃花朵朵开",  "庸人自扰之",  
    "和你在一起",  "老鼠爱大米",  "大叔不要跑",  "聪明的寂寞",  "寂寞在唱歌",  
    "悲伤的倾诉",  "杀死那朵花",  "我总是没钱",  "去问猫耳朵",  "妖魔山游记",  
    "你好陌生人",  "东京不太热",  "很爱很爱你",  "不就是落单",  "在夜里跳舞",  
    "慢慢喜欢你",  "麦兜响当当",  "关于我爱你",  "马马嘟嘟骑",  "夕阳下的歌",  
    "周三的情书",  "安娜的橱窗",  "我会想起你",  "耶利亚女郎",  "至少还有你",  
    "让寂寞别走",  "你能听见吗",  "走在冷风中",  "想你想疯了",  "当我娶过她",  
    "下一个天亮",  "今日我离别",  "以后的以后",  "单身狗之歌",  "外面的世界",  
    "新少女祈祷",  "盛夏的果实",  "超神的节奏",  "下个路口见",  "种星星的人",  
    "红莓花儿开",  "红色高跟鞋",  "被驯服的象",  "白鸟过河滩",  "我都跟你走",  
    "寂寞沙洲冷",  "秋天火车站",  "深夜地下铁",  "署前街少年",  "一直很安静",  
    "匿名的好友",  "挪威的森林",  "胸大的姑娘",  "我的解放西",  "突然的自我",  
    "浪花一朵朵",  "但愿人长久",  "反方向的钟",  "我爱人民币",  "你要跳舞吗",  
    "我要找到你",  "青苹果乐园",  "没那么简单",  "永隔一江水",  "心愿便利贴",  
    "认真地老去",  "巴黎23号",  "Upupu",
    
    "带不走的风景",  "看月亮爬上来",  "梦带我去旅行",  "魔鬼中的天使",  "再见吧喵小姐",  
    "遥不可及的你",  "再也看不见海",  "妈妈要我出嫁",  "猫都瞧不起我",  "那年我十八岁",  
    "一个人不可能",  "你是我的风景",  "小明是个画家",  "有可能的夜晚",  "三个人的晚餐",  
    "非正常励志歌",  "思念是一种病",  "第一次爱的人",  "悲了催的姑娘",  "海飞丝的芳香",  
    "我从崖边跌落",  "你看到我了吗",  "一首简单的歌",  "或许你是对的",  "胡撸胡撸瓢儿",  
    "小镇英雄青年",  "你一定要幸福",  "电话里的秘密",  "乌兰巴托的夜",  "我可以抱你吗",  
    "爱的双重魔力",  "外婆的澎湖湾",  "交大东门宾馆",  "粉红色的回忆",  "寄生虫的想法",  
    "愿望交换商店",  "玫瑰花的葬礼",  "蜗牛与黄鹂鸟",  "零摄氏度月色",  "贝多芬的悲伤",  
    "越单纯越幸福",  "三月里的小雨",  "化身孤岛的鲸",  "星光下的梦想",  
    
    "陈逸伦的解放西",  "天龙八部之宿敌",  "给电影人的情书",  "这世界那么多人",  
    "马来西亚的查某",  "姐姐妹妹站起来",  "爱你就像爱生命",  "不是流氓不是仙",  
    "中二少女养花记",  "二十岁的某一天",  "一腔诗意喂了狗",  "我们总是在寻找",  
    "请你吃个冰激凌",  "四月变成一座桥",  "沙罗双树的誓言",  "总有那么一群人",  
    "阳光彩虹小白马",  "我一定会爱上你",  "一棵会开花的树",  "我有钱你爱我吧",  
    "感觉自己是巨星",  "他黑名单里的我",  "告诉自己忘了他",  "梦的翅膀受了伤",  
    "南半球与北海道",  "太平洋西岸的歌",  "天生反骨的鸵鸟",  "我还有点小糊涂",  
    "最美不过是朝晖",  "采蘑菇的小姑娘",  "我们都是好孩子",  "踮起脚尖够月亮",  
    "原来你也在这里",  "我们没有在一起",  "一千个失聪听众",  "关于郑州的记忆",  
    "New boy",   
    
    "静静地看着你装逼",  "远在北方孤独的鬼",  "劈你的雷正在路上",  "她来听我的演唱会",  
    "南方的我北方的你",  "你是人间的四月天",  "风中有朵雨做的云",  "你知道我在等你吗",  
    "谢谢你为我演的戏",  "一个人也能好好过",  "我说我当不了县长",  "世界上的另一个我",  
    "给我一首歌的时间",  "好像掉进爱情海里",  "杀死那个石家庄人",  "陪你到世界的终结",  
    "直到有天我会死去",  "你飞到城市另一边",  "在一个下雨的晚上",  "亲爱的那不是爱情",  
    "我用什么把你留住",  "一起去看风和日丽",  "从一道缝隙看黄昏",  "伤心的人别听慢歌",  
    "New Girl",  
    
    "神的口袋没有后悔药",  "你要如何我们就如何",  "我在人民广场吃炸鸡",  "你不爱我我就爱别人",  
    "穿过生命散发的芬芳",  "夜声带走最后一个我",  "一个婚礼和一个葬礼",  "这一生关于你的风景",  
    "一个酒馆老板的独白",  "坐在巷口的那对男女",  "你们卷吧我卷不动啦",  "如果爱能早些说出来",  
    "不是因为寂寞才想你",  "没有理想的人不伤心",   
    
    "你有多久没有看过星星",  "这一天我什么都不想干",  "欲望的篝火慢慢靠近我",  
    "被这个世界骗到想结婚",  "我愿平凡的陪在你身边",  "光年之外无名无姓的人",  
    "完美先生和差不多小姐",  
    
    "读完了依赖我很快就离开",  "我喜欢上你时的内心活动",  "如果有一天我变得很有钱",  
    "羞答答的玫瑰静悄悄的开",  "在冬天和奶奶一起晒太阳",  "你是我最愚蠢的一次浪漫",  
    "当夜空落去城市继续前行",  "我是任何野蛮生长的事物",  "在你的婚礼我多喝了两杯",  
    
    
    "再也不会有人会比我更爱你",  "总有一天你会出现在我身边",  
    "无论你多怪异我还是喜欢你",  "此刻是不会再拥有的此刻了",  
    
    "我抬头一看满街都是单身的狗",  "姑娘今夜我不想睡觉只想睡你",  
    "祝天下所有的情侣都是失散多年的兄妹",  
    "你必须在一个荒唐的夜骑着摩托穿过下雨的街",  
    "如果写不出好的和弦就该在洒满阳光的钢琴前一起吃布丁",   
    "在我二十岁的时候我回到了爸爸的小村庄那是我的乌托邦",  
    "即使全世界都嫌弃这首歌肉麻又俗气我还是要把它献给你",
    "HAVE A NICE DAY",  
    "Bibbidi bobbidi boo",  
    "Always Online"  ];

function addSong(song) {
    songList.push(song);
  }

function showAll() {
    console.log(songList);
}

// module.exports = {
//     songList: songList,
//     addSong: addSong,
//     showAll: showAll
//   };

