# 穿墙透壁，上海建筑剖透图册

三座经公开资料核验的上海建筑剖透阅读图，以及一套用于制作**证据先行**剖透图的 Codex Skill。

图册只保留上海中心、东方明珠和中华艺术宫。其余七座因缺乏可逐项核验的公开内部资料而已移除。每张保留图仅呈现来源支持的层级、公共空间或结构关系，未知区域保持不透明。详见 [证据台账](research/evidence-ledger.md)。

## Skill

仓库内的 [skill/SKILL.md](skill/SKILL.md) 是可复用的 `shanghai-architectural-cutaway` Skill。它要求先按建筑名称与城市搜索官方资料、剖面/平面、内部照片和可靠报道，建立来源台账，再决定哪些内容可以画进剖透图。证据不足的内部空间必须保持不透明或明确标为未证实。

## 本地运行

```bash
npm install
npm run dev
```

## 注意

这些图像不是测绘、施工、消防或建筑事实资料。网站同时收录可复制的证据型 Prompt 和 Codex Skill。
