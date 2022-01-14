const deleteTable = require('../externalFunc/deleteTable')

exports.seed = function (knex) {
    return deleteTable(knex, ['region_pokemon', 'user_pokemon']).then(() => {
        return deleteTable(knex, ['pokemon']).then(() => {
            return knex("pokemon").insert([
                {
                    id: 1,
                    name: "妙蛙種子",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 2,
                    name: "妙蛙草",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 3,
                    name: "妙蛙花",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 4,
                    name: "小火龍",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 5,
                    name: "火恐龍",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 6,
                    name: "噴火龍",
                    type1: "Fire",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 7,
                    name: "傑尼龜",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 8,
                    name: "卡咪龜",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 9,
                    name: "水箭龜",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 10,
                    name: "綠毛蟲",
                    type1: "Bug",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 11,
                    name: "鐵甲蛹",
                    type1: "Bug",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 12,
                    name: "巴大蝶",
                    type1: "Bug",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 13,
                    name: "獨角蟲",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 14,
                    name: "鐵殼蛹",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 15,
                    name: "大針蜂",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 16,
                    name: "波波",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 17,
                    name: "比比鳥",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 18,
                    name: "大比鳥",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 19,
                    name: "小拉達",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 20,
                    name: "拉達",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 21,
                    name: "烈雀",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 22,
                    name: "大嘴雀",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 23,
                    name: "阿柏蛇",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 24,
                    name: "阿柏怪",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 25,
                    name: "皮卡丘",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 26,
                    name: "雷丘",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 27,
                    name: "穿山鼠",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 28,
                    name: "穿山王",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 29,
                    name: "尼多蘭",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 30,
                    name: "尼多娜",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 31,
                    name: "尼多后",
                    type1: "Poison",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 32,
                    name: "尼多朗",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 33,
                    name: "尼多力諾",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 34,
                    name: "尼多王",
                    type1: "Poison",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 35,
                    name: "皮皮",
                    type1: "Fairy",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 36,
                    name: "皮可西",
                    type1: "Fairy",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 37,
                    name: "六尾",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 38,
                    name: "九尾",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 39,
                    name: "胖丁",
                    type1: "Normal",
                    type2: "Fairy",
                    legendary: 0
                },
                {
                    id: 40,
                    name: "胖可丁",
                    type1: "Normal",
                    type2: "Fairy",
                    legendary: 0
                },
                {
                    id: 41,
                    name: "超音蝠",
                    type1: "Poison",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 42,
                    name: "大嘴蝠",
                    type1: "Poison",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 43,
                    name: "走路草",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 44,
                    name: "臭臭花",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 45,
                    name: "霸王花",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 46,
                    name: "派拉斯",
                    type1: "Bug",
                    type2: "Grass",
                    legendary: 0
                },
                {
                    id: 47,
                    name: "派拉斯特",
                    type1: "Bug",
                    type2: "Grass",
                    legendary: 0
                },
                {
                    id: 48,
                    name: "毛球",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 49,
                    name: "摩魯蛾",
                    type1: "Bug",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 50,
                    name: "地鼠",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 51,
                    name: "三地鼠",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 52,
                    name: "喵喵",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 53,
                    name: "貓老大",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 54,
                    name: "可達鴨",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 55,
                    name: "哥達鴨",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 56,
                    name: "猴怪",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 57,
                    name: "火爆猴",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 58,
                    name: "卡蒂狗",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 59,
                    name: "風速狗",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 60,
                    name: "蚊香蝌蚪",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 61,
                    name: "蚊香君",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 62,
                    name: "蚊香泳士",
                    type1: "Water",
                    type2: "Fighting",
                    legendary: 0
                },
                {
                    id: 63,
                    name: "凱西",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 64,
                    name: "勇基拉",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 65,
                    name: "胡地",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 66,
                    name: "腕力",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 67,
                    name: "豪力",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 68,
                    name: "怪力",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 69,
                    name: "喇叭芽",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 70,
                    name: "口呆花",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 71,
                    name: "大食花",
                    type1: "Grass",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 72,
                    name: "瑪瑙水母",
                    type1: "Water",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 73,
                    name: "毒刺水母",
                    type1: "Water",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 74,
                    name: "小拳石",
                    type1: "Rock",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 75,
                    name: "隆隆石",
                    type1: "Rock",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 76,
                    name: "隆隆岩",
                    type1: "Rock",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 77,
                    name: "小火馬",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 78,
                    name: "烈焰馬",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 79,
                    name: "呆呆獸",
                    type1: "Water",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 80,
                    name: "呆殼獸",
                    type1: "Water",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 81,
                    name: "小磁怪",
                    type1: "Electric",
                    type2: "Steel",
                    legendary: 0
                },
                {
                    id: 82,
                    name: "三合一磁怪",
                    type1: "Electric",
                    type2: "Steel",
                    legendary: 0
                },
                {
                    id: 83,
                    name: "大蔥鴨",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 84,
                    name: "嘟嘟",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 85,
                    name: "嘟嘟利",
                    type1: "Normal",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 86,
                    name: "小海獅",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 87,
                    name: "白海獅",
                    type1: "Water",
                    type2: "Ice",
                    legendary: 0
                },
                {
                    id: 88,
                    name: "臭泥",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 89,
                    name: "臭臭泥",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 90,
                    name: "大舌貝",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 91,
                    name: "刺甲貝",
                    type1: "Water",
                    type2: "Ice",
                    legendary: 0
                },
                {
                    id: 92,
                    name: "鬼斯",
                    type1: "Ghost",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 93,
                    name: "鬼斯通",
                    type1: "Ghost",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 94,
                    name: "耿鬼",
                    type1: "Ghost",
                    type2: "Poison",
                    legendary: 0
                },
                {
                    id: 95,
                    name: "大岩蛇",
                    type1: "Rock",
                    type2: "Ground",
                    legendary: 0
                },
                {
                    id: 96,
                    name: "催眠貘",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 97,
                    name: "引夢貘人",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 98,
                    name: "大鉗蟹",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 99,
                    name: "巨鉗蟹",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 100,
                    name: "霹靂電球",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 101,
                    name: "頑皮雷彈",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 102,
                    name: "蛋蛋",
                    type1: "Grass",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 103,
                    name: "椰蛋樹",
                    type1: "Grass",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 104,
                    name: "卡拉卡拉",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 105,
                    name: "嘎啦嘎啦",
                    type1: "Ground",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 106,
                    name: "飛腿郎",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 107,
                    name: "快拳郎",
                    type1: "Fighting",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 108,
                    name: "大舌頭",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 109,
                    name: "瓦斯彈",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 110,
                    name: "雙彈瓦斯",
                    type1: "Poison",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 111,
                    name: "獨角犀牛",
                    type1: "Ground",
                    type2: "Rock",
                    legendary: 0
                },
                {
                    id: 112,
                    name: "鑽角犀獸",
                    type1: "Ground",
                    type2: "Rock",
                    legendary: 0
                },
                {
                    id: 113,
                    name: "吉利蛋",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 114,
                    name: "蔓藤怪",
                    type1: "Grass",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 115,
                    name: "袋獸",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 116,
                    name: "墨海馬",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 117,
                    name: "海刺龍",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 118,
                    name: "角金魚",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 119,
                    name: "金魚王",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 120,
                    name: "海星星",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 121,
                    name: "寶石海星",
                    type1: "Water",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 122,
                    name: "魔牆人偶",
                    type1: "Psychic",
                    type2: "Fairy",
                    legendary: 0
                },
                {
                    id: 123,
                    name: "飛天螳螂",
                    type1: "Bug",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 124,
                    name: "迷唇姐",
                    type1: "Ice",
                    type2: "Psychic",
                    legendary: 0
                },
                {
                    id: 125,
                    name: "電擊獸",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 126,
                    name: "鴨嘴火獸",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 127,
                    name: "凱羅斯",
                    type1: "Bug",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 128,
                    name: "肯泰羅",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 129,
                    name: "鯉魚王",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 130,
                    name: "暴鯉龍",
                    type1: "Water",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 131,
                    name: "拉普拉斯",
                    type1: "Water",
                    type2: "Ice",
                    legendary: 0
                },
                {
                    id: 132,
                    name: "百變怪",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 133,
                    name: "伊布",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 134,
                    name: "水伊布",
                    type1: "Water",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 135,
                    name: "雷伊布",
                    type1: "Electric",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 136,
                    name: "火伊布",
                    type1: "Fire",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 137,
                    name: "多邊獸",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 138,
                    name: "菊石獸",
                    type1: "Rock",
                    type2: "Water",
                    legendary: 0
                },
                {
                    id: 139,
                    name: "多刺菊石獸",
                    type1: "Rock",
                    type2: "Water",
                    legendary: 0
                },
                {
                    id: 140,
                    name: "化石盔",
                    type1: "Rock",
                    type2: "Water",
                    legendary: 0
                },
                {
                    id: 141,
                    name: "鐮刀盔",
                    type1: "Rock",
                    type2: "Water",
                    legendary: 0
                },
                {
                    id: 142,
                    name: "化石翼龍",
                    type1: "Rock",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 143,
                    name: "卡比獸",
                    type1: "Normal",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 144,
                    name: "急凍鳥",
                    type1: "Ice",
                    type2: "Flying",
                    legendary: 1
                },
                {
                    id: 145,
                    name: "閃電鳥",
                    type1: "Electric",
                    type2: "Flying",
                    legendary: 1
                },
                {
                    id: 146,
                    name: "火焰鳥",
                    type1: "Fire",
                    type2: "Flying",
                    legendary: 1
                },
                {
                    id: 147,
                    name: "迷你龍",
                    type1: "Dragon",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 148,
                    name: "哈克龍",
                    type1: "Dragon",
                    type2: null,
                    legendary: 0
                },
                {
                    id: 149,
                    name: "快龍",
                    type1: "Dragon",
                    type2: "Flying",
                    legendary: 0
                },
                {
                    id: 150,
                    name: "超夢",
                    type1: "Psychic",
                    type2: null,
                    legendary: 1
                },
                {
                    id: 151,
                    name: "夢幻",
                    type1: "Psychic",
                    type2: null,
                    legendary: 0
                }
            ])

        })
    })
};