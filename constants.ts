import { ActivityType, DailyItinerary, FlightInfo, AccommodationInfo } from './types';

export const FLIGHTS: FlightInfo[] = [
  {
    code: 'CI178',
    from: 'TPE 台北',
    to: 'TAK 高松',
    depTime: '14:30',
    arrTime: '17:55',
    date: '2025-12-20',
    terminal: '第二航廈',
  },
  {
    code: 'CI279',
    from: 'TAK 高松',
    to: 'TPE 台北',
    depTime: '11:20',
    arrTime: '13:35',
    date: '2025-12-26',
    terminal: '國際線',
  }
];

export const HOTELS: AccommodationInfo[] = [
  {
    name: 'JR 德島克萊蒙特飯店',
    dates: '12/20 - 12/22 (2 晚)',
    address: 'Tokushima, Ichibancho, 3 Chome-7',
    phone: '+81 88-656-3111'
  },
  {
    name: '高松舒適飯店',
    dates: '12/22 - 12/26 (4 晚)',
    address: 'Takamatsu, Nakajincho, 2-1', 
    phone: '+81 87-831-2511'
  }
];

export const EMERGENCY_CONTACTS = [
  { name: '日本報警', number: '110' },
  { name: '救護車 / 火警', number: '119' },
  { name: '台北駐大阪辦事處', number: '+81-6-6227-8623' }
];

export const INITIAL_ITINERARY: DailyItinerary[] = [
  {
    date: '2025-12-20',
    displayDate: '12/20 (六)',
    region: '台灣 -> 德島',
    items: [
      { 
        id: '1-0', 
        time: '10:30', 
        title: '宜蘭-桃園 (兩車出發)', 
        location: '宜蘭縣蘇澳/羅東', 
        type: ActivityType.Transport, 
        notes: '【第一車】\n10:30 蘇澳鎮福德路370號\n10:46 羅東鎮安康路73號\n10:50 東興婦產科\n11:00 五結交流道(共乘處)\n \n【第二車】\n10:40 羅東國華街&民享街' 
      },
      { 
        id: '1-1', 
        time: '12:30', 
        title: '桃園-高松機場', 
        location: 'Taoyuan International Airport', 
        type: ActivityType.Transport, 
        notes: '14:30 華航 CI178 起飛\n17:55 抵達高松機場\n18:30 預計出關時間\n到德島飯店約1.5小時',
        detailedInfo: [
          {
            title: '道地的「讚岐烏龍麵」店',
            content: '香川縣被稱為「烏龍麵縣」，機場自然不能少了這個代表性的美食。\n\n地點： 通常在二樓 (出境大廳/國內線報到區附近)。'
          },
          {
            title: '烏龍麵吉祥物「烏龍小子」(うどん脳)',
            content: '機場內外常可見到香川縣獨特的吉祥物「烏龍小子」（うどん脳, Udon-no-）。 這個吉祥物外型是一顆長著烏龍麵的腦袋，造型非常奇特且可愛，充滿幽默感。'
          },
          {
            title: '豐富的「橄欖」相關伴手禮',
            content: '香川縣的小豆島以種植橄欖聞名，因此機場的伴手禮店會特別突出這項特色產品。您可以在這裡找到各種橄欖油、橄欖零食、橄欖化妝品等商品，這是其他日本機場較少見到的品項，非常適合買來當作特別的伴手禮。'
          }
        ]
      },
      { 
        id: '1-2', 
        time: '20:00', 
        title: '德島克萊蒙特飯店', 
        location: 'JR Hotel Clement Tokushima', 
        type: ActivityType.Hotel, 
        notes: '辦理入住 (Check-in)\n早餐時間 06:30 - 10:00',
        detailedInfo: [
          {
            title: '與 JR 德島車站相通',
            content: '飯店與車站直結，樓下即是商場，車站內可以盡情逛街，地理位置絕佳。'
          },
          {
            title: '1. 伴手禮與德島特產 (1F & B1F)',
            content: '這是最適合遊客「一站式」購買德島和四國伴手禮的地方。\n\n重點商品： 您可以找到德島知名的 鳴門金時（地瓜）、酢橘（一種柑橘類）相關產品、德島拉麵伴手禮，以及各種口味的烏龍麵。'
          },
          {
            title: '2. 時裝與雜貨 (主要在 2F-5F)',
            content: '雖然規模不比大城市的百貨公司，但 Clement Plaza 內有各種基本的服飾店、生活雜貨店和藥妝店等，方便您在旅途中添購所需物品。'
          },
          {
            title: 'Amico (アミコ) 百貨',
            content: '位於車站旁，有無印良品、LOFT、百元店等。'
          }
        ]
      },
      { id: '1-3', time: '21:00', title: '九州魂 (晚餐)', location: 'Tokushima, Ichibancho, 3 Chome-7', type: ActivityType.Dining, notes: '居酒屋_有暢飲\n博多牛雜鍋、馬肉料理' },
    ]
  },
  {
    date: '2025-12-21',
    displayDate: '12/21 (日)',
    region: '德島・鳴門',
    items: [
      { id: '2-1', time: '09:00', title: '飯店大廳集合', location: 'JR Hotel Clement Tokushima', type: ActivityType.Hotel, notes: '走路到阿波舞會館約10分鐘' },
      { 
        id: '2-2', 
        time: '09:30', 
        title: '眉山纜車', 
        location: 'Awa Odori Kaikan', 
        type: ActivityType.Sightseeing, 
        notes: '從阿波舞會館5樓搭乘纜車\n纜車登頂約10分鐘\n眺望德島市區全景',
        detailedInfo: [
          {
            title: '德島市的象徵',
            content: '眉山海拔290公尺，是德島市的精神象徵。從山頂展望台可以一覽德島市街景，天氣好時甚至能遠眺淡路島和紀伊水道。'
          },
          {
            title: '戀人聖地',
            content: '山頂展望台被認定為「戀人聖地」，這裡有許多愛情鎖，晚上夜景更是浪漫迷人。'
          },
          {
            title: 'LED萬花筒',
            content: '山頂有一個巨大的LED萬花筒裝置，展現德島作為LED王國的科技與藝術結合。'
          }
        ]
      },
      { 
        id: '2-3', 
        time: '10:30', 
        title: '阿波舞會館', 
        location: 'Awa Odori Kaikan', 
        type: ActivityType.Sightseeing, 
        notes: '2樓看表演\n11:00場次, 約40分鐘',
        detailedInfo: [
           {
            title: '阿波舞：愚者之舞',
            content: '「跳舞的傻瓜，看舞的傻瓜，既然都是傻瓜，不如一起跳舞吧！」這是阿波舞著名的口號。在這裡，您不僅是觀眾，最後還會被邀請上台一起同樂。'
          },
          {
            title: '全年無休的熱情',
            content: '真正的阿波舞祭典只在每年8月舉行，但阿波舞會館讓遊客一年四季都能欣賞到這種充滿活力的傳統舞蹈。'
          },
          {
            title: '專屬連隊表演',
            content: '會館有專屬的「阿波舞連」，展現各種樂器（三味線、太鼓、笛子）與不同舞步（男舞的豪邁、女舞的優雅）。'
          }
        ]
      },
      { id: '2-4', time: '12:30', title: '道之站 Kurukuru 鳴門', location: 'Michi no Eki Kurukuru Naruto', type: ActivityType.Dining, notes: '2022新開幕\n必吃：極細地瓜甜點、豐盛海鮮丼' },
      { id: '2-5', time: '14:30', title: '渦之道', location: 'Uzunomichi', type: ActivityType.Sightseeing, notes: '漫步於大鳴門橋下\n俯瞰海面漩渦\n(建議預留 1 小時)' },
      { 
        id: '2-6', 
        time: '16:00', 
        title: '靈山寺', 
        location: 'Ryozenji Tokushima', 
        type: ActivityType.Sightseeing, 
        notes: '四國遍路第一番札所\n(納經所 17:00 關閉)',
        detailedInfo: [
          {
            title: '發願之寺：旅程的起點',
            content: '靈山寺是四國八十八箇所靈場的第一番札所。815年，弘法大師空海在此修行並創立了這個聖地。對所有遍路者（朝聖者）而言，這裡是「發願」的起點，象徵著神聖旅程的開始。'
          },
          {
            title: '購買遍路裝備',
            content: '這裡有四國最齊全的遍路用品店。若想體驗遍路文化，建議在此購買：\n1. 納經帳：收集各寺院的朱印（最值得的紀念品）。\n2. 白衣 (Hakui)：朝聖者的標準服裝，象徵清淨。\n3. 金剛杖：象徵弘法大師與您同行（同行二人）。'
          },
          {
            title: '境內景點',
            content: '一進山門即可見到美麗的放生池與鯉魚，境內還有一座歷史悠久的二層多寶塔。氛圍莊嚴寧靜，能洗滌旅途的疲憊。'
          }
        ]
      },
      { id: '2-7', time: '17:30', title: '阿波之幸 和美彩美', location: 'Tokushima, Suehiro 2-1-113', type: ActivityType.Dining, notes: '預約 17:30\n在地特色料理：阿波牛、阿波尾雞' },
      { id: '2-8', time: '20:00', title: 'JR 德島克萊蒙特飯店', location: 'JR Hotel Clement Tokushima', type: ActivityType.Hotel, notes: '休息' },
    ]
  },
  {
    date: '2025-12-22',
    displayDate: '12/22 (一)',
    region: '祖谷秘境',
    items: [
      { id: '3-1', time: '09:00', title: '飯店大廳集合', location: 'JR Hotel Clement Tokushima', type: ActivityType.Hotel, notes: '退房 (Check-out)' },
      { 
        id: '3-2', 
        time: '10:00', 
        title: '脇町南町 (卯建房屋街道)', 
        location: 'Udatsu Street, Mima', 
        type: ActivityType.Sightseeing, 
        notes: '藍染古街散步\n欣賞江戶時代富商豪宅',
        detailedInfo: [
          {
            title: '藍染致富的象徵「卯建」',
            content: '這條街道保留了江戶時代繁榮的樣貌。當時的藍染商人為了展示財富並防止火災蔓延，在屋頂兩側設置了名為「卯建」(Udatsu) 的防火牆。這種建築裝飾非常昂貴，因此「舉不起卯建」(うだつが上がらない) 後來演變成形容人沒出息的諺語。'
          },
          {
            title: '藍染體驗與傳統工藝',
            content: '這裡不僅是建築保留區，也有許多改建的古民家咖啡廳和藍染工坊。漫步其中，彷彿穿越時空回到江戶時代，您可以欣賞到細緻的鬼瓦與蟲籠窗等傳統建築細節。'
          }
        ]
      },
      { 
        id: '3-3', 
        time: '12:00', 
        title: '祖谷美人蕎麥麵', 
        location: 'Iya Bijin', 
        type: ActivityType.Dining, 
        notes: '無法訂位需要排隊\n著名的祖谷蕎麥麵\n可欣賞溪谷美景',
        detailedInfo: [
          {
            title: '絕景露台座位',
            content: '這家餐廳最大的特色就是擁有可以俯瞰祖谷溪谷的露台座位。一邊享用美食，一邊欣賞深V字型的溪谷美景，是極致的享受。'
          },
          {
            title: '祖谷蕎麥麵 (Iya Soba)',
            content: '因祖谷地區日夜溫差大，蕎麥品質極佳。這裡的蕎麥麵黏性較低，口感樸實粗獷，麵條較粗且易斷，與一般滑順的蕎麥麵不同，更能品嘗到蕎麥原本的香氣。推薦搭配當地的烤香魚或阿波尾雞。'
          }
        ]
      },
      { 
        id: '3-4', 
        time: '13:30', 
        title: '祖谷溫泉 / 祖谷蔓橋', 
        location: 'Iya Kazurabashi', 
        type: ActivityType.Sightseeing, 
        notes: '日本三大奇橋之一\n每3年重新架設',
        detailedInfo: [
          {
            title: '日本三大奇橋',
            content: '長45公尺、寬2公尺，距離水面14公尺。這座橋是由重達5噸的「軟棗獼猴桃」(Kiwi fruit vine) 藤蔓編織而成。每走一步橋身就會晃動，透過腳下的縫隙還能看到底下的溪流，驚險刺激！'
          },
          {
            title: '平家落人的傳說',
            content: '相傳這是800年前平家武士為了逃避源氏追殺而建造的。為了在敵人來襲時能迅速切斷橋樑阻斷追兵，特意使用藤蔓這種植物材料製作。'
          },
          {
            title: '琵琶瀑布',
            content: '過了蔓橋不遠處，有一座高約50公尺的琵琶瀑布，傳說是平家落人在此彈奏琵琶懷念京都的地方。'
          }
        ]
      },
      { 
        id: '3-5', 
        time: '15:00', 
        title: '大步危、小步危', 
        location: 'Oboke Gorge', 
        type: ActivityType.Sightseeing, 
        notes: '峽谷遊船體驗\n(遊船時間約30分鐘)',
        detailedInfo: [
          {
            title: '2億年的地質奇蹟',
            content: '吉野川激流歷經2億年沖刷而成的溪谷。「步危」的意思是「大步走也危險，小步走也危險」，形容斷崖絕壁的險峻地形。'
          },
          {
            title: '大步危遊覽船',
            content: '搭乘遊覽船是欣賞峽谷之美的最佳方式。船程約30分鐘，可以近距離觀賞被指定為國家天然紀念物的含礫片岩（結晶片岩），欣賞大自然的鬼斧神工。'
          }
        ]
      },
      { id: '3-6', time: '18:00', title: '高松舒適飯店', location: 'Comfort Hotel Takamatsu', type: ActivityType.Hotel, notes: '辦理入住 (Check-in)\n從大步危過來約1.5-2小時車程' },
      { id: '3-7', time: '19:00', title: '明神丸 稻草燒鰹魚 (晚餐)', location: 'Myojinmaru Takamatsu', type: ActivityType.Dining, notes: '高松店, 必吃稻草燒' },
    ]
  },
  {
    date: '2025-12-23',
    displayDate: '12/23 (二)',
    region: '香川縣',
    items: [
      { id: '4-1', time: '10:00', title: '飯店大廳集合', location: 'Comfort Hotel Takamatsu', type: ActivityType.Hotel, notes: '' },
      { 
        id: '4-2', 
        time: '10:30', 
        title: '永旺夢樂城 綾川', 
        location: 'Aeon Mall Ayagawa', 
        type: ActivityType.Shopping, 
        notes: '無印良品, Big Camera, 午餐自理',
        detailedInfo: [
          {
            title: '四國最大級別購物中心',
            content: '這是一間大型的綜合購物中心，擁有約 170 間店鋪。無論是日系服飾（UNIQLO, GU）、生活雜貨（無印良品）、還是電器藥妝（Big Camera, 藥妝店）應有盡有，非常適合採買。'
          },
          {
            title: '美食廣場與烏龍麵',
            content: '午餐建議在館內解決。這裡有多樣化的選擇，從迴轉壽司、日式定食到甜點。由於靠近讚岐烏龍麵的發源地，這裡的烏龍麵店家水準也相當不錯。'
          }
        ]
      },
      { 
        id: '4-3', 
        time: '13:30', 
        title: '金刀比羅宮', 
        location: 'Kotohira-gu', 
        type: ActivityType.Sightseeing, 
        notes: '一生必參拜，但階梯很多\n有參道商店街，咖啡廳很多',
        detailedInfo: [
          {
            title: '一生必去一次的神社',
            content: '日本人自古以來傳說「一生一定要去參拜一次」的金刀比羅宮。這裡供奉著海上守護神，是四國最著名的能量景點之一。'
          },
          {
            title: '785階的試煉',
            content: '要抵達「御本宮」需要爬 785 階樓梯，若要到更裡面的「奧社」則需爬 1368 階。沿途商店街熱鬧，有許多店家提供租借拐杖服務。若體力有限，也可付費搭乘「駕籠」（轎子）到大門。'
          },
          {
            title: '幸福的黃色御守',
            content: '只有在御本宮才買得到的「黃色御守」非常受歡迎，配套的還有一隻可愛的迷你金刀比羅狗（Konpira dog）。'
          }
        ]
      },
      { 
        id: '4-4', 
        time: '16:00', 
        title: '父母之濱', 
        location: 'Chichibugahama Beach', 
        type: ActivityType.Sightseeing, 
        notes: '日本天空之鏡\n日落時間約 17:00\n海邊風大請保暖',
        detailedInfo: [
          {
            title: '日本的烏尤尼鹽湖',
            content: '這是一個長約 1 公里的海水浴場。在退潮且無風的傍晚，沙灘上殘留的水窪會像鏡子一樣反射天空，形成絕美的「天空之鏡」景色，曾被選為「日本夕陽百選」之一。'
          },
          {
            title: '拍照技巧',
            content: '1. 低角度拍攝：相機越貼近水面越好。\n2. 模特兒站在沙洲上，攝影師隔著水窪拍攝。\n3. 黃金時刻：日落前後 30 分鐘的天色變化最為迷人（魔幻時刻）。'
          },
          {
            title: '冬季注意事項',
            content: '海邊毫無遮蔽，冬季海風非常強烈且寒冷，請務必戴上圍巾、帽子並做好防寒措施。'
          }
        ]
      },
      { id: '4-5', time: '18:30', title: '高松舒適飯店', location: 'Comfort Hotel Takamatsu', type: ActivityType.Hotel, notes: '晚上自由活動\n放好行李後可步行前往晚餐' },
      { 
        id: '4-6', 
        time: '19:00', 
        title: '花丸烏龍麵 (晚餐)', 
        location: 'Hanamaru Udon Hyogomachi', 
        type: ActivityType.Dining, 
        notes: '兵庫町商店街內\n就在飯店附近，經濟實惠',
        detailedInfo: [
           {
             title: '自助式烏龍麵的樂趣',
             content: '花丸烏龍麵（はなまるうどん）源自香川縣。採用自助式點餐：先拿托盤，夾取喜歡的天婦羅（炸蝦、炸雞、地瓜等）或飯糰，再向師傅點麵（如：かけ kake 湯麵、ぶっかけ bukkake 濃湯麵），最後結帳。'
           },
           {
             title: '推薦菜色',
             content: '除了基本的湯烏龍，這裡的咖哩烏龍麵和溫玉肉烏龍麵也很受歡迎。記得在自助佐料區加上免費的「天かす」(炸麵衣屑) 和薑泥，風味更佳！'
           }
        ]
      },
    ]
  },
  {
    date: '2025-12-24',
    displayDate: '12/24 (三)',
    region: '小豆島',
    items: [
      { id: '5-1', time: '08:00', title: '飯店大廳集合', location: 'Comfort Hotel Takamatsu', type: ActivityType.Hotel, notes: '前往碼頭' },
      { id: '5-2', time: '09:00', title: '小豆島渡輪', location: 'Takamatsu Port', type: ActivityType.Transport, notes: '搭船前往土庄港\n船程約 60 分鐘' },
      { 
        id: '5-3', 
        time: '10:30', 
        title: '寒霞溪纜車', 
        location: 'Kankakei Ropeway', 
        type: ActivityType.Sightseeing, 
        notes: '日本三大絕美溪谷\n優先前往確保時間',
        detailedInfo: [
          {
            title: '海、空、溪谷的絕景',
            content: '寒霞溪是日本三大溪谷之一。搭乘纜車可以俯瞰被風雨侵蝕的奇岩怪石，同時遠眺瀨戶內海的平靜海面。隨著高度攀升，景色也更加壯闊。'
          },
          {
            title: '瓦片投擲 (Kawara-nage)',
            content: '在山頂展望台可以體驗「投瓦片」，將小瓦片投向設在山谷中的圓圈，據說投進就能除厄招福。'
          }
        ]
      },
      { 
        id: '5-4', 
        time: '12:00', 
        title: '午餐：寒霞溪山頂', 
        location: 'Kankakei Summit', 
        type: ActivityType.Dining, 
        notes: '簡單用餐後前往醬油紀念館\n建議 12:45 出發' 
      },
      { 
        id: '5-5', 
        time: '13:15', 
        title: '丸金醬油紀念館', 
        location: 'Marukin Soy Sauce Museum', 
        type: ActivityType.Sightseeing, 
        notes: '預留 45 分鐘參觀\n必吃醬油冰淇淋',
        detailedInfo: [
          {
            title: '醬油之鄉',
            content: '小豆島的「醬油之鄉」通稱「醬之鄉」，這裡聚集了許多歷史悠久的醬油藏與佃煮屋。丸金醬油紀念館是由舊工廠改建，展示了傳統的醬油釀造工具與歷史。'
          },
          {
            title: '神奇的醬油冰淇淋',
            content: '紀念館旁賣店的「醬油霜淇淋」是絕對不能錯過的！吃起來帶有焦糖般的鹹甜風味，非常獨特且美味。'
          }
        ]
      },
      { 
        id: '5-6', 
        time: '14:15', 
        title: '小豆島橄欖公園', 
        location: 'Shodoshima Olive Park', 
        type: ActivityType.Sightseeing, 
        notes: '魔女宅急便掃把拍照\n請於 15:20 前離開前往碼頭',
        detailedInfo: [
          {
            title: '魔女宅急便真人版拍攝地',
            content: '公園內最著名的地標是白色的希臘風車。您可以免費租借「魔法掃把」，在風車前跳躍拍照，模仿琪琪飛行的樣子，是來小豆島必拍的打卡照。'
          },
          {
            title: '橄欖色郵筒',
            content: '尋找園區內獨特的橄欖色郵筒，據說從這裡寄出的信件會帶來幸福。'
          },
          {
            title: '必吃：橄欖霜淇淋',
            content: '別忘了品嘗淋上橄欖油的霜淇淋，味道意外地清爽順口。'
          }
        ]
      },
      { id: '5-7', time: '16:00', title: '搭乘渡輪返回高松', location: 'Tonosho Port', type: ActivityType.Transport, notes: '預計 17:00 抵達高松港\n請提早 20 分鐘抵達港口購票\n晚餐可以在船上吃' },
      { id: '5-8', time: '17:30', title: '高松舒適飯店', location: 'Comfort Hotel Takamatsu', type: ActivityType.Hotel, notes: ' 休息' },
    ]
  },
  {
    date: '2025-12-25',
    displayDate: '12/25 (四)',
    region: '高松市區',
    items: [
      { id: '6-1', time: '09:30', title: '飯店出發', location: 'Comfort Hotel Takamatsu', type: ActivityType.Transport, notes: '步行至「琴電片原町站」\n搭乘琴平線前往栗林公園' },
      { 
        id: '6-2', 
        time: '10:00', 
        title: '栗林公園', 
        location: 'Ritsurin Garden', 
        type: ActivityType.Sightseeing, 
        notes: '米其林三星庭園\n推薦搭乘千秋丸遊船',
        detailedInfo: [
          {
             title: '一步一景的迴遊式庭園',
             content: '栗林公園是四國最著名的庭園，背景是紫雲山。推薦搭乘「千秋丸」遊船，從湖面上欣賞庭園的松樹與奇岩，視角完全不同。'
          },
          {
             title: '掬月亭',
             content: '逛累了可以到歷代藩主最愛的茶屋「掬月亭」喝抹茶配和菓子，享受寧靜的日式氛圍。'
          }
        ]
      },
      { id: '6-3', time: '12:30', title: '搭乘琴電前往高松港', location: 'Ritsurin Koen Station', type: ActivityType.Transport, notes: '栗林公園站 -> 高松築港站\n下車後步行約 10 分鐘' },
      { 
        id: '6-4', 
        time: '13:00', 
        title: '北浜Alley (午餐/下午茶)', 
        location: 'Kitahama Alley', 
        type: ActivityType.Dining, 
        notes: '舊倉庫改建文創聚落\n享受海景悠閒時光',
        detailedInfo: [
          {
            title: '海邊的文青聚落',
            content: '這裡是由昭和時代的舊穀物倉庫改建而成的複合設施，充滿復古工業風，有很多雜貨店、咖啡廳和藝廊。'
          },
          {
            title: '推薦餐廳：umie (ウミエ)',
            content: '位於倉庫二樓的人氣咖啡廳，擁有無敵海景。推薦點他們的貝果三明治或是咖哩飯，配上瀨戶內海的景色非常愜意。'
          },
          {
            title: '推薦餐廳：Cantina (カンティーナ)',
            content: '如果想吃正餐，這家義式餐廳提供美味的披薩和義大利麵，由倉庫改建的挑高空間非常有氣氛。'
          }
        ]
      },
      { 
        id: '6-5', 
        time: '15:30', 
        title: '高松港 Sunport', 
        location: 'Takamatsu Port', 
        type: ActivityType.Sightseeing, 
        notes: '散步看海\nLiminal Air 裝置藝術\n瀨戶道標 (紅燈塔)',
        detailedInfo: [
          {
            title: '瀨戶內海的玄關',
            content: '從北浜Alley沿著海邊散步過來，可以看到著名的地標「Liminal Air -core-」（兩根色彩鮮豔的柱子）。'
          },
          {
            title: '瀨戶道標 (紅燈塔)',
            content: '這座全世界首座玻璃燈塔會在夜晚發出紅光。走過長長的防波堤去摸摸它，據說能帶來好運。'
          }
        ]
      },
      { 
        id: '6-6', 
        time: '18:00', 
        title: '寄鳥味鳥 (晚餐)', 
        location: 'Yoridori Midori', 
        type: ActivityType.Dining, 
        notes: '骨付鳥名店 (近兵庫町)\n從高松港步行或搭車',
        detailedInfo: [
           {
            title: '香川名物：骨付鳥 (Honetsukidori)',
            content: '來到香川除了烏龍麵，晚餐必吃的就是帶骨烤雞腿！這家店深受在地人喜愛。'
           },
           {
             title: '老雞 (Oya) vs 嫩雞 (Waka)',
             content: '「老雞」肉質堅韌有嚼勁，越嚼越香，適合下酒；「嫩雞」肉質軟嫩多汁，大眾接受度高。建議各點一份大家分著吃，再用高麗菜沾盤底的雞油吃，是道地的在地吃法。'
           }
        ] 
      },
      { id: '6-7', time: '20:00', title: '高松舒適飯店', location: 'Comfort Hotel Takamatsu', type: ActivityType.Hotel, notes: '整理打包行李' },
    ]
  },
  {
    date: '2025-12-26',
    displayDate: '12/26 (五)',
    region: '返程',
    items: [
      { id: '7-1', time: '08:00', title: '出發前往機場', location: 'Comfort Hotel Takamatsu', type: ActivityType.Transport, notes: '專車前往高松機場' },
      { id: '7-2', time: '11:20', title: 'CI279 起飛', location: 'Takamatsu Airport', type: ActivityType.Transport, notes: '預計 13:35 抵達桃園' },
    ]
  },
];