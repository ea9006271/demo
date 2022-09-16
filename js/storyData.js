var story = [
    {
        "id" : "s101-01",
        "content" : [
            {
                "avatar" : "kuso",
                "words" : "這裡是那裡啊？"
            },
            {
                "avatar" : "kuso",
                "words" : "咦～牆上的畫作有些部分不見了，發生什麼事了？"
            }
        ],
        "next" : ["load", "scene2"]        
    },
    {
        "id" : "s102-01",
        "content" : [
            {
                "avatar" : "npc01",
                "words" : "是酷獸啊，你怎麼在這邊呢？"
            },
            {
                "avatar" : "kuso",
                "words" : "原來是荷精靈，我正在找碧玉如意，請問你有看到嗎？"
            },
            {
                "avatar" : "npc01",
                "words" : "嗯...我沒看到耶，抱歉沒能幫上忙。"
            },
            {
                "avatar" : "kuso",
                "words" : "沒關係～"
            },
            {
                "avatar" : "kuso",
                "words" : "咦？妳為什麼看起來心事重重的呢？"
            },
            {
                "avatar" : "npc01",
                "words" : "唉...牆上的荷花畫作都亂掉了，該怎麼辦呢？"
            },
            {
                "avatar" : "kuso",
                "words" : "我來幫幫妳吧！雖然我對荷花不是很熟。"
            },
            {
                "avatar" : "npc01",
                "words" : "太好了，謝謝酷獸，讓我來跟你分享荷花的祕密吧！"                
            }
        ],
        "next" : ["run", "s102-01"]        
    },
    {
        "id" : "s102-02",
        "content" :[
            {
                "avatar" : "npc01",
                "words" : "太好了！你已經觀察到荷花不同部位的質感知識。"
            },
            {
                "avatar" : "npc01",
                "words" : "這是質感錦囊，或許能幫你找到如意！"
            },
            {
                "avatar" : "kuso",
                "words" : "謝謝！那我就收下囉！"
            }
        ],
        "next" : ["run", ""]
    },
    {
        "id" : "s103-01",
        "content" :[
            {
                "avatar" : "npc01",
                "words" : "接下來，請把獲得的拼圖碎片，歸回畫作裡吧！"
            }
        ],
        "next" : ["url", "/3/puzzle01.html"]
    },
    {
        "id" : "s103-02",
        "content" :[
            {
                "avatar" : "kuso",
                "words" : "太好了，畫作恢復原樣了！"
            },
            {
                "avatar" : "npc01",
                "words" : "人們喜歡畫荷花，因為荷花寓意著純潔、堅貞、吉祥。"
            },
            {
                "avatar" : "npc01",
                "words" : "觀察看看，荷花和荷葉的不同比例，如何影響構圖呢？"
            },
            {
                "avatar" : "kuso",
                "words" : "嗯...有人將盛開的荷花放在視覺中心，以荷葉作為背景，"
            },
            {
                "avatar" : "kuso",
                "words" : "也有人將荷葉大面積地安排在畫面中央，以花苞作為點綴，"
            },
            {
                "avatar" : "kuso",
                "words" : "無論哪種的荷花畫作，都好美啊！"
            },
            {
                "avatar" : "npc01",
                "words" : "沒錯，不同藝術家筆下的荷花各有不同的比例之美。"
            },
            {
                "avatar" : "npc01",
                "words" : "恭喜獲得比例錦囊，或許能幫你找到碧玉如意！"
            },
            {
                "avatar" : "kuso",
                "words" : "謝謝荷精靈！"
            },
        ],
        "next" : ["run", ""]
    },
    {
        "id" : "s103-03",
        "content" :[
            {
                "avatar" : "kuso",
                "words" : "荷精靈的問題解決了！回到大廳吧。"
            },
            {
                "avatar" : "kuso",
                "words" : "全部關卡結束後，可以下載你的創作影像喔！"
            }
        ],
        "next" : ["url", "/index.html"]
    },
    {
        "id" : "eggs-s1-01",
        "content" :[
            {
                "avatar" : "",
                "words" : "《荷塘盛夏》金勤伯\r \
                這件是金勤伯的《荷塘盛夏》，以沒骨法描繪盛夏荷塘。\r\
                荷葉翻捲、荷梗交錯，輔以葦草相襯，畫面層次分明，清新雅逸。"
            }
        ],
        "next" : []
    },
    {
        "id" : "eggs-s1-02",
        "content" :[
            {
                "avatar" : "",
                "words" : "《蓮藕》鄭曼青\r\
                這件是鄭曼青的《蓮藕》，畫作不上色彩，以濃淡墨色繪製出蓮藕與兩朵荷花。\r\
                古時有「秋日采荷懷人」的說法，以荷花作為友誼的象徵，此作左方款識寫著「蓮比君子，交持以贈」，祝福雙方友誼長久。"
            }
        ],
        "next" : []
    },
];