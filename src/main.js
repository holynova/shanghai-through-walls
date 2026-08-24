import './style.css';

const base = import.meta.env.BASE_URL;

const buildings = [
  { no: '01', title: '上海中心大厦', type: '证据通过 · 超高层', detail: '仅呈现九个垂直社区、双层幕墙公共区与空中花园的已证实层级。核心筒及其他内部保持不透明。', image: `${base}images/01-shanghai-tower-evidence.png`, sources: [['上海中心官网', 'https://www.shanghaitower.com/community.html'], ['上海市国资委', 'https://www.gzw.sh.gov.cn/shgzw_zxzx_gqdt/20240627/92d965292cb24ce0ab1cc0223700796d.html']] },
  { no: '02', title: '东方明珠', type: '证据通过 · 观光塔', detail: '只标示有公开资料的球体、观光层、旋转餐厅与双轿厢电梯关系，其他内部不作推断。', image: `${base}images/02-oriental-pearl-evidence.png`, sources: [['东方明珠运营方', 'https://www.opg.cn/cn/newsCenter/newsInfo/1542348219159158784.html'], ['Otis 项目资料', 'https://www.otis.com/zh/cn/our-company/global-projects/project-showcase/oriental-pearl-tower']] },
  { no: '03', title: '中华艺术宫', type: '证据通过 · 美术馆', detail: '依照已公开的 0m、33m、41m、49m、60m 功能转换与四巨柱、悬挑结构关系绘制；未知展厅布局保持空白。', image: `${base}images/03-china-art-museum-evidence.png`, sources: [['上海市政府', 'https://www.shanghai.gov.cn/nw9822/20200906/0001-9822_653206.html'], ['同济大学', 'https://ddms.tongji.edu.cn/18/62/c13236a137314/page.htm']] }
];

const prompt = `Use case: scientific-educational\nAsset type: evidence-backed architectural cutaway plate\nPrimary request: Create an original through-the-walls architectural cutaway of [建筑名称] in [城市].\nEvidence packet: [来源链接或本地证据文件]. Do not depict a labelled feature unless it is verified in the claim ledger.\nVerified identity: [地点、年代、外观特征及来源].\nSection strategy: [轴测/纵剖/横剖] through [由证据支持的空间轴线].\nVerified key reveals: [结构+来源], [动线+来源], [主要空间+来源], [城市关系+来源].\nComposition: portrait 3:4, warm ivory paper background.\nStyle/medium: original precise pen-and-ink architectural linework with restrained watercolor wash.\nText: Title “[建筑名称]” and only verified Chinese callouts.\nConstraints: unknown interiors remain opaque or are labelled “公开资料未证实”; no fabricated rooms, floors, staircases, mechanisms, or structures; no logo, watermark, or photorealism.`;

document.querySelector('#prompt-text').textContent = prompt;
const gallery = document.querySelector('#gallery');
gallery.innerHTML = buildings.map((building, index) => `<article class="building building-${index + 1}"><button data-index="${index}" aria-label="放大查看${building.title}剖透图"><img src="${building.image}" width="1024" height="1536" loading="lazy" alt="${building.title}证据型建筑剖透图" /><span class="number">${building.no}</span></button><div><p>${building.type}</p><h3>${building.title}</h3><p>${building.detail}</p><p class="sources">来源：${building.sources.map(([name, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${name}</a>`).join('、')}</p></div></article>`).join('');

const dialog = document.querySelector('#lightbox');
const img = document.querySelector('#lightbox-image');
const title = document.querySelector('#lightbox-title');
const number = document.querySelector('#lightbox-number');
const detail = document.querySelector('#lightbox-detail');
gallery.addEventListener('click', (event) => { const button = event.target.closest('button[data-index]'); if (!button) return; const building = buildings[button.dataset.index]; img.src = building.image; img.alt = `${building.title}证据型建筑剖透图`; title.textContent = building.title; number.textContent = `${building.no} / ${building.type}`; detail.textContent = building.detail; dialog.showModal(); });
document.querySelector('.close-button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('.copy-button').addEventListener('click', async (event) => { await navigator.clipboard.writeText(prompt); event.target.textContent = '已复制'; setTimeout(() => { event.target.textContent = '复制 Prompt'; }, 1500); });
