const cards = [
  { name: "匠匠", stats: "163 / 48 / D", badge: "精選", img: "daily-showcase-site/images/1.jpg" },
  { name: "泰拉", stats: "160 / 48 / E", badge: "精選", img: "daily-showcase-site/images/2.jpg" },
  { name: "喬恩", stats: "158 / 46 / F", badge: "人氣", img: "daily-showcase-site/images/3.jpg" },
  { name: "沐妍", stats: "166 / 45 / C", badge: "新人", img: "daily-showcase-site/images/4.jpg" },
  { name: "彩彩", stats: "156 / 40 / C", badge: "清新", img: "daily-showcase-site/images/5.jpg" },
  { name: "芊芊", stats: "165 / 55 / E", badge: "人氣", img: "daily-showcase-site/images/6.jpg" },
  { name: "林襄", stats: "163 / 50 / F", badge: "精選", img: "daily-showcase-site/images/7.jpg" },
  { name: "星野", stats: "155 / 45 / C", badge: "清新", img: "daily-showcase-site/images/8.jpg" },
  { name: "芝芝", stats: "155 / 48 / E", badge: "人氣", img: "daily-showcase-site/images/9.jpg" },
  { name: "咪咪", stats: "152 / 40 / B", badge: "新人", img: "daily-showcase-site/images/10.jpg" },
  { name: "娜比", stats: "165 / 49 / C", badge: "清新", img: "daily-showcase-site/images/11.jpg" },
  { name: "珍妮", stats: "163 / 45 / C", badge: "精選", img: "daily-showcase-site/images/12.jpg" },
  { name: "小野", stats: "163 / 45 / F", badge: "人氣", img: "daily-showcase-site/images/13.jpg" },
  { name: "小新", stats: "164 / 46 / C", badge: "清新", img: "daily-showcase-site/images/14.jpg" },
  { name: "妙妙", stats: "158 / 45 / C", badge: "新人", img: "daily-showcase-site/images/15.jpg" },
  { name: "KK", stats: "160 / 48 / C", badge: "人氣", img: "daily-showcase-site/images/16.jpg" },
  { name: "Candy", stats: "163 / 45 / C", badge: "精選", img: "daily-showcase-site/images/17.jpg" },
  { name: "EE", stats: "167 / 46 / D", badge: "人氣", img: "daily-showcase-site/images/18.jpg" },
  { name: "小匠", stats: "163 / 48 / D", badge: "清新", img: "daily-showcase-site/images/19.jpg" },
  { name: "小桃", stats: "140 / 40 / B", badge: "新人", img: "daily-showcase-site/images/20.jpg" },
  { name: "小優", stats: "160 / 44 / C", badge: "精選", img: "daily-showcase-site/images/21.jpg" },
  { name: "可可", stats: "158 / 43 / C", badge: "清新", img: "daily-showcase-site/images/22.jpg" },
  { name: "露露", stats: "165 / 48 / C", badge: "人氣", img: "daily-showcase-site/images/23.jpg" },
  { name: "糖糖", stats: "158 / 45 / B", badge: "精選", img: "daily-showcase-site/images/24.jpg" },
  { name: "溫蒂", stats: "164 / 45 / C", badge: "清新", img: "daily-showcase-site/images/25.jpg" },
  { name: "愛愛", stats: "170 / 48 / C", badge: "人氣", img: "daily-showcase-site/images/26.jpg" },
  { name: "潔心", stats: "160 / 46 / E", badge: "精選", img: "daily-showcase-site/images/27.jpg" },
  { name: "維恩", stats: "168 / 53 / D", badge: "人氣", img: "daily-showcase-site/images/28.jpg" },
  { name: "楊寧", stats: "163 / 47 / E", badge: "清新", img: "daily-showcase-site/images/29.jpg" },
  { name: "韓韓", stats: "166 / 45 / C", badge: "精選", img: "daily-showcase-site/images/30.jpg" },
  { name: "菲菲", stats: "163 / 49 / H", badge: "人氣", img: "daily-showcase-site/images/31.jpg" },
  { name: "恩恩", stats: "162 / 43 / C", badge: "新人", img: "daily-showcase-site/images/32.jpg" },
  { name: "笙笙", stats: "158 / 49 / B", badge: "清新", img: "daily-showcase-site/images/33.jpg" },
  { name: "娜娜", stats: "163 / 45 / D", badge: "精選", img: "daily-showcase-site/images/34.jpg" },
  { name: "陽光", stats: "163 / 49 / C", badge: "人氣", img: "daily-showcase-site/images/35.jpg" },
  { name: "小柔", stats: "160 / 41 / C", badge: "清新", img: "daily-showcase-site/images/36.jpg" },
  { name: "喬喬", stats: "158 / 46 / F", badge: "精選", img: "daily-showcase-site/images/37.jpg" },
  { name: "跳跳", stats: "170 / 48 / C", badge: "人氣", img: "daily-showcase-site/images/38.jpg" },
  { name: "沐沐", stats: "166 / 45 / C", badge: "清新", img: "daily-showcase-site/images/39.jpg" },
  { name: "彩恩", stats: "156 / 40 / C", badge: "新人", img: "daily-showcase-site/images/40.jpg" },
  { name: "芊語", stats: "165 / 55 / E", badge: "精選", img: "daily-showcase-site/images/41.jpg" },
  { name: "泰雅", stats: "160 / 48 / E", badge: "人氣", img: "daily-showcase-site/images/42.jpg" }
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
  const text = `${d.getFullYear()} / ${String(d.getMonth() + 1).padStart(2, "0")} / ${String(d.getDate()).padStart(2, "0")}`;
  updateDate.textContent = `更新日期：${text}`;
}

function filteredCards() {
  if (activeTab === "全部") return cards;
  return cards.filter(card => card.badge === activeTab);
}

function renderTabs() {
  tabsNode.innerHTML = "";
  tabs.forEach(tab => {
    const btn = document.createElement("button");
    btn.className = `tab${tab === activeTab ? " active" : ""}`;
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
  summary.textContent = `共 ${list.length} 筆展示`;
  grid.innerHTML = "";

  list.forEach(card => {
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
      <div class="photo-wrap">
        <img src="${card.img}" alt="${card.name}">
        <div class="badge">${card.badge}</div>
      </div>
      <div class="card-body">
        <div class="name">${card.name}</div>
        <div class="stats">${card.stats}</div>
      </div>
    `;

    const img = article.querySelector("img");
    img.addEventListener("error", () => {
      img.src = `https://placehold.co/600x800?text=${encodeURIComponent(card.name)}`;
    });
    article.querySelector(".photo-wrap").addEventListener("click", () => openModal(card));
    grid.appendChild(article);
  });
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalX").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

setToday();
renderTabs();
renderCards();
