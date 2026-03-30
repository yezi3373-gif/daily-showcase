const cards = [
  { name: "寶藍", stats: "153 / 43 / C", badge: "精選", desc: "氣質甜美，風格自然。", time: "", img: "images/1.jpg" },
  { name: "Abby", stats: "158 / 44 / D", badge: "精選", desc: "外型亮眼，互動親切。", time: "", img: "images/2.jpg" },
  { name: "露娜", stats: "165 / 48 / C", badge: "人氣", desc: "整體條件出色，形象鮮明。", time: "", img: "images/3.jpg" },
  { name: "糖糖", stats: "158 / 45 / B", badge: "新人", desc: "風格清新，給人舒服感覺。", time: "", img: "images/4.jpg" },
  { name: "溫蒂", stats: "164 / 45 / C", badge: "清新", desc: "清秀自然，親和力高。", time: "", img: "images/5.jpg" },
  { name: "愛愛", stats: "170 / 48 / C", badge: "人氣", desc: "高挑亮眼，整體很有存在感。", time: "22,23,24,01,02", img: "images/6.jpg" },
  { name: "漢娜", stats: "165 / 49 / G", badge: "精選", desc: "外型成熟有魅力，風格突出。", time: "", img: "images/7.jpg" },
  { name: "潔心", stats: "160 / 46 / E", badge: "清新", desc: "互動自然，整體條件穩定。", time: "22,23,24,01,02", img: "images/8.jpg" },
  { name: "維恩", stats: "168 / 53 / D", badge: "人氣", desc: "高挑有型，印象深刻。", time: "", img: "images/9.jpg" },
  { name: "楊寧", stats: "163 / 47 / E", badge: "新人", desc: "氣質冷豔，風格鮮明。", time: "15,16,17,18,19,20", img: "images/10.jpg" },
  { name: "韓韓", stats: "166 / 45 / C", badge: "清新", desc: "乾淨俐落，氣質清爽。", time: "", img: "images/11.jpg" },
  { name: "霏菲", stats: "163 / 65 / H", badge: "精選", desc: "形象突出，辨識度高。", time: "", img: "images/12.jpg" },
  { name: "跳跳", stats: "157 / 43 / C", badge: "人氣", desc: "活潑自然，風格俏皮。", time: "", img: "images/13.jpg" },
  { name: "恩恩", stats: "162 / 43 / C", badge: "清新", desc: "白皙甜美，形象清純。", time: "13,14,16,17,18,19,20", img: "images/14.jpg" },
  { name: "笨笨", stats: "158 / 49 / B", badge: "新人", desc: "親切可愛，互動感自然。", time: "", img: "images/15.jpg" },
  { name: "娜娜子", stats: "163 / 45 / B", badge: "人氣", desc: "風格清秀，整體柔和。", time: "", img: "images/16.jpg" },
  { name: "茴香", stats: "165 / 49 / D", badge: "精選", desc: "有記憶點，外型出眾。", time: "", img: "images/17.jpg" },
  { name: "許妍", stats: "165 / 48 / D", badge: "人氣", desc: "高挑勻稱，整體亮眼。", time: "22,23,24,01,02,03", img: "images/18.jpg" },
  { name: "蛋白", stats: "168 / 48 / D", badge: "清新", desc: "外型俐落，氣質乾淨。", time: "", img: "images/19.jpg" },
  { name: "陽光", stats: "163 / 49 / C", badge: "新人", desc: "自然大方，給人舒服印象。", time: "", img: "images/20.jpg" },
  { name: "梵妮", stats: "160 / 47 / C", badge: "精選", desc: "五官耐看，風格穩定。", time: "", img: "images/21.jpg" },
  { name: "喬恩", stats: "158 / 46 / F", badge: "清新", desc: "可愛亮眼，整體討喜。", time: "", img: "images/22.jpg" },
  { name: "啾啾", stats: "170 / 48 / C", badge: "人氣", desc: "長腿氣質型，風格鮮明。", time: "", img: "images/23.jpg" },
  { name: "沐妍", stats: "166 / 45 / C", badge: "精選", desc: "高挑清秀，形象乾淨。", time: "20,21,22,24,01", img: "images/24.jpg" },
  { name: "衫菜", stats: "156 / 40 / C", badge: "清新", desc: "小巧可愛，風格輕盈。", time: "", img: "images/25.jpg" },
  { name: "芊芊", stats: "165 / 45 / E", badge: "人氣", desc: "五官深邃，外型有記憶點。", time: "19,20,21,22,23", img: "images/26.jpg" },
  { name: "林襄", stats: "163 / 50 / F", badge: "精選", desc: "亮眼吸睛，整體辨識度高。", time: "", img: "images/27.jpg" },
  { name: "星野", stats: "155 / 45 / C", badge: "人氣", desc: "甜美自然，親和感佳。", time: "", img: "images/28.jpg" },
  { name: "咪咪", stats: "152 / 40 / B", badge: "清新", desc: "小隻馬風格，氣質柔和。", time: "", img: "images/29.jpg" },
  { name: "娜比", stats: "165 / 49 / C", badge: "精選", desc: "高挑勻稱，風格成熟。", time: "", img: "images/30.jpg" },
  { name: "珍妮", stats: "163 / 45 / C", badge: "人氣", desc: "清秀耐看，整體自然。", time: "", img: "images/31.jpg" },

  { name: "妙妙", stats: "158 / 45 / C", badge: "新人", desc: "風格俏皮，互動自然。", time: "", img: "images/32.jpg" },
  { name: "小新", stats: "164 / 46 / C", badge: "清新", desc: "高挑亮眼，腿型修長。", time: "13,14,15,16,17,18", img: "images/33.jpg" },
  { name: "小野", stats: "163 / 45 / F", badge: "精選", desc: "臉蛋可愛，整體俏麗。", time: "13,14,15,16,17,18", img: "images/34.jpg" },
  { name: "EE", stats: "167 / 46 / D", badge: "人氣", desc: "高挑有型，風格鮮明。", time: "", img: "images/35.jpg" },
 { name: "Candy", stats: "163 / 45 / E", badge: "清新", desc: "甜美亮眼，形象討喜。", time: "", img: "images/36.jpg" },
  { name: "KK", stats: "160 / 48 / C", badge: "精選", desc: "外型勻稱，風格穩定。", time: "", img: "images/37.jpg" },
  { name: "小桃", stats: "140 / 40 / B", badge: "人氣", desc: "小巧可愛，辨識度高。", time: "", img: "images/38.jpg" },
  { name: "SM", stats: "163 / 48 / D", badge: "清新", desc: "氣質成熟，整體自然。", time: "", img: "images/39.jpg" },
  { name: "匠匠", stats: "163 / 48 / D", badge: "新人", desc: "風格鮮明，外型亮眼。", time: "13,15,16,17", img: "images/40.jpg" },
  { name: "泰拉", stats: "160 / 48 / E", badge: "精選", desc: "整體條件佳，印象深刻。", time: "", img: "images/41.jpg" },
  { name: "OK", stats: "158 / 48 / C", badge: "人氣", desc: "外型自然，互動感佳。", time: "", img: "images/42.jpg" }
];

const tabs = ["全部", "精選", "人氣", "新人", "清新"];
let activeTab = "全部";

const grid = document.getElementById("cardGrid");
const tabsNode = document.getElementById("tabs");
const summary = document.getElementById("summary");
const updateDate = document.getElementById("updateDate");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalStats = document.getElementById("modalStats");
const modalBadge = document.getElementById("modalBadge");

function setToday() {
  const d = new Date();
  const text = ${d.getFullYear()} / ${String(d.getMonth() + 1).padStart(2, "0")} / ${String(d.getDate()).padStart(2, "0")};
  updateDate.textContent = 更新日期：${text};
}

function filteredCards() {
  if (activeTab === "全部") return cards;
  return cards.filter(card => card.badge === activeTab);
}

function renderTabs() {
  tabsNode.innerHTML = "";
  tabs.forEach(tab => {
    const btn = document.createElement("button");
    btn.className = tab${tab === activeTab ? " active" : ""};
    btn.textContent = tab;
    btn.addEventListener("click", () => {
      activeTab = tab;
      renderTabs();
      renderCards();
    });
    tabsNode.appendChild(btn);
  });
}

function openModal(card) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modalImg.src = card.img;
  modalName.textContent = card.name;
  modalStats.textContent = card.stats;
  modalBadge.textContent = card.badge;
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function renderCards() {
  const list = filteredCards();
  summary.textContent = 共 ${list.length} 筆展示;
  grid.innerHTML = "";

  list.forEach(card => {
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = 
      <div class="photo-wrap">
        <img src="${card.img}" alt="${card.name}">
        <div class="badge">${card.badge}</div>
      </div>
      <div class="card-body">
        <div class="name">${card.name}</div>
        <div class="stats">${card.stats}</div>
        <div class="desc">${card.desc || ""}</div>
      </div>
    ;

    const img = article.querySelector("img");
    img.addE
