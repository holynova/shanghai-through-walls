import './style.css';

const base = import.meta.env.BASE_URL;

const buildings = [
  ['01', '静安寺', '传统寺庙', '山门至大雄宝殿的中轴院落、木构梁架与斗拱。', `${base}images/01-jing-an-temple.png`],
  ['02', '上海海关大楼', '历史建筑', '钟楼、报时装置、中央大厅与层层办公空间。', `${base}images/02-shanghai-customs-house.png`],
  ['03', '和平饭店北楼', 'Art Deco 酒店', '铜顶塔楼、爵士酒吧、宴会厅与酒店后勤。', `${base}images/03-peace-hotel.png`],
  ['04', '武康大楼', '海派公寓', '船形转角、外廊、天井与典型住宅单元。', `${base}images/04-wukang-building.png`],
  ['05', '上海展览中心', '公共展馆', '中轴塔楼、屋架、展厅序列与庭园轴线。', `${base}images/05-shanghai-exhibition-centre.png`],
  ['06', '上海博物馆', '文化建筑', '天圆地方屋顶、环形展厅、庭院与文物库房。', `${base}images/06-shanghai-museum.png`],
  ['07', '东方明珠', '观光塔', '球体、钢结构、电梯井与黄浦江观景路径。', `${base}images/07-oriental-pearl.png`],
  ['08', '金茂大厦', '超高层', '宝塔式退台、酒店中庭、核心筒与观光层。', `${base}images/08-jinmao-tower.png`],
  ['09', '上海中心大厦', '超高层', '螺旋幕墙、垂直社区、空中花园与核心筒。', `${base}images/09-shanghai-tower.png`],
  ['10', '中华艺术宫', '公共文化', '斗冠造型、悬挑结构、展线与世博轴线。', `${base}images/10-china-art-museum.png`]
];

const prompt = `Use case: scientific-educational\nAsset type: Shanghai architecture cutaway plate\nPrimary request: Create an original “through-the-walls” architectural cutaway of [建筑名称].\nSubject: Retain its recognizable exterior identity.\nSection strategy: Use a three-quarter axonometric section; remove one façade and selectively lift roofs; expose the most characteristic structural system, circulation route, principal spaces, and city relationship.\nKey reveals: [结构与空间重点].\nComposition: portrait 3:4, complete building fills page, warm ivory paper background.\nStyle/medium: original precise pen-and-ink architectural linework with restrained watercolor wash; educational sectional drawing, not an imitation of any named artist or existing artwork.\nText: Title “[建筑名称]” plus eight exact Chinese labels: [标签1]...[标签8].\nConstraints: original artwork; historically and structurally plausible; legible Chinese; conceptual architectural reading, not a survey drawing; no logo, watermark, close-up people, or photorealism.`;

document.querySelector('#prompt-text').textContent = prompt;
const gallery = document.querySelector('#gallery');
gallery.innerHTML = buildings.map(([no, title, type, detail, image], index) => `<article class="building building-${index + 1}"><button data-index="${index}" aria-label="放大查看${title}剖透图"><img src="${image}" width="1024" height="1536" loading="lazy" alt="${title}建筑剖透图" /><span class="number">${no}</span></button><div><p>${type}</p><h3>${title}</h3><p>${detail}</p></div></article>`).join('');

const dialog = document.querySelector('#lightbox');
const img = document.querySelector('#lightbox-image');
const title = document.querySelector('#lightbox-title');
const number = document.querySelector('#lightbox-number');
const detail = document.querySelector('#lightbox-detail');
gallery.addEventListener('click', (event) => { const button = event.target.closest('button[data-index]'); if (!button) return; const [no, name, type, text, src] = buildings[button.dataset.index]; img.src = src; img.alt = `${name}建筑剖透图`; title.textContent = name; number.textContent = `${no} / ${type}`; detail.textContent = text; dialog.showModal(); });
document.querySelector('.close-button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('.copy-button').addEventListener('click', async (event) => { await navigator.clipboard.writeText(prompt); event.target.textContent = '已复制'; setTimeout(() => { event.target.textContent = '复制 Prompt'; }, 1500); });
