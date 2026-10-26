# 漂亮的宣传页 · Awesome Landing Pages

从好看的页面，到可核对的设计与源码。收集产品宣传页、开发者首页、研究项目与页面模板，记录各自特点、适用场景、源码及许可。

[浏览合集网页](https://harzva.github.io/awesome-landing-pages/) · [只看带源码](https://harzva.github.io/awesome-landing-pages/?source=public) · [只看 GitHub Pages](https://harzva.github.io/awesome-landing-pages/?pages=1) · [贡献指南](CONTRIBUTING.md)

本次核查：2026-10-26。16 个案例，11 个带公开网站源码，6 个有 GitHub Pages 地址。另附 4 个发现入口。截图和设计评注不代表商业转化测试。

## 先弄清楚：github.io ≠ 开源

- `github.io` 是 GitHub Pages 的默认托管域名；自定义域名也可能使用 Pages。部分账号计划允许从私有仓库发布公开网站。
- 浏览器能读取 HTML、CSS、JavaScript，不代表能拿到原始工程、组件、构建配置或后台代码。
- **带源码**：已找到公开的网站源码。**私有源码**：只有仓库授权成员可见。**源码未核实**：本次没有核实到官方完整页面源码。
- 带源码不等于许可明确。没有许可证通常不授予复制、分发或制作衍生作品的通用权利；代码、图片、字体、视频和商标还可能分别适用不同规则。

依据：[GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[GitHub 许可证说明](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)。

## 案例一览

| 页面 | 类型 | 源码 | GitHub Pages | 许可 / 当前状态 |
| --- | --- | --- | --- | --- |
| [OpenBot](https://harzva.github.io/openbot/) | 自有产品 | [私有源码](https://github.com/Harzva/openbot) | 有 | 私有仓库 |
| [TeamBot](https://harzva.github.io/team-bot/) | 自有产品 | [私有源码](https://github.com/Harzva/team-bot) | 有 | 私有仓库 |
| [nanoMuse](https://nanomuse.cn/) | 用户指定参考 | [带源码](https://github.com/nano-muse/nano-muse.github.io) | 有 | 未见独立网站许可证 |
| [Astro](https://astro.build/) | 开发者产品 | [带源码](https://github.com/withastro/astro.build) | 未标注 | 未见明确网站许可证 |
| [Vite](https://vite.dev/) | 开发者产品 | [带源码](https://github.com/vitejs/vite/tree/main/docs) | 未标注 | MIT（仓库代码） |
| [Docusaurus](https://docusaurus.io/) | 开发者产品 | [带源码](https://github.com/facebook/docusaurus/tree/main/website) | 未标注 | 代码 MIT；文档 CC BY 4.0 |
| [Linear](https://linear.app/) | 品牌宣传页 | 源码未核实 | 未标注 | 未核实公开网站许可 |
| [Raycast](https://www.raycast.com/) | 品牌宣传页 | 源码未核实 | 未标注 | 未核实公开网站许可 |
| [Resend](https://resend.com/) | 品牌宣传页 | 源码未核实 | 未标注 | 未核实公开网站许可 |
| [Nerfies](https://nerfies.github.io/) | 研究项目 | [带源码](https://github.com/nerfies/nerfies.github.io) | 有 | CC BY-SA 4.0（网站） |
| [DreamFusion](https://dreamfusion3d.github.io/) | 研究项目 | [带源码](https://github.com/dreamfusion3d/dreamfusion3d.github.io) | 有 | 未见明确网站许可证 |
| [AstroWind](https://astrowind.vercel.app/) | 可研究模板 | [带源码](https://github.com/arthelokyo/astrowind) | 未标注 | MIT（仓库代码）；演示暂停 |
| [Cruip Open](https://open.cruip.com/) | 宣传页模板 | [带源码](https://github.com/cruip/open-react-template) | 未标注 | GPL 声明附加条款，需核对 |
| [Cruip Simple Light](https://simple.cruip.com/) | 宣传页模板 | [带源码](https://github.com/cruip/tailwind-landing-page-template) | 未标注 | GPL 声明附加条款，需核对 |
| [Page UI](https://pageui.shipixen.com/) | 组件与模板 | [带源码](https://github.com/PageAI-Pro/page-ui) | 未标注 | MIT（仓库代码） |
| [Academic Project Page](https://eliahuhorwitz.github.io/Academic-project-page-template/) | 研究页模板 | [带源码](https://github.com/eliahuhorwitz/Academic-project-page-template) | 有 | CC BY-SA 4.0（网站） |

## 逐页观察

### OpenBot

围绕 Bot 团队展示任务与对话，突出开始使用和在线体验。

- 白底导航下方是醒目的中文大标题、简短说明和并列的「开始使用」「在线体验」按钮。
- 首屏用大块圆角产品界面图展示机器人列表、对话气泡与聊天/空间/矩阵入口。

**值得借鉴：** 用实际产品界面占据首屏主体，让对话式工作流一眼可见。 并列提供开始使用与在线体验两个清楚的入口。

**适用场景：** 对话式 AI、协作或自动化工具的产品介绍页。

**源码与许可：** 私有源码；私有仓库。页面可访问，完整网站源码仅仓库授权成员可见；不作为公开模板。

[原站](https://harzva.github.io/openbot/) · [私有源码](https://github.com/Harzva/openbot)

观察限制：截图是静态画面；「开启自动演示」和「点击体验」的实际交互无法从图中确认。

### TeamBot

用毛绒伙伴建立亲和形象，再说明团队工作方式和能力状态。

- 暖白背景上，左侧两行大标题和说明文字对着右侧方形三只毛绒角色插图。
- 主按钮与次级链接并列；细分隔线下接续工作区说明和三段流程标题。

**值得借鉴：** 用单张角色群像作为品牌视觉锚点，同时把标题和主操作留在同一首屏。 在首屏下缘提前露出流程步骤，让读者看到后续内容的结构。

**适用场景：** 面向团队的 AI 助手或协作产品，尤其需要同时表现亲和形象和组织工作流的页面。

**源码与许可：** 私有源码；私有仓库。公开 GitHub Pages 不改变源码仓库的私有状态；样板展示不等于生产验收。

[原站](https://harzva.github.io/team-bot/) · [私有源码](https://github.com/Harzva/team-bot)

观察限制：下方流程内容在截图底部被截断；静态图不能证明插画或页面元素带有动效。

### nanoMuse

以可体验的模拟手机为入口，结合下载、文档、影片和跨设备说明。

- 导航和跨设备说明下方居中展示完整手机画面，并提示在更宽屏幕体验演示。
- 手机静态画面显示 nanoMuse 对话界面及一张权限确认卡，卡片底部排列一次允许、对话内允许、工作区总是允许和拒绝等选项。

**值得借鉴：** 用设备外框中的静态画面直接说明移动端界面，并在画面外补充演示设备要求。

**适用场景：** 需要展示移动端操作界面、同时提醒桌面体验要求的工具页。

**源码与许可：** 带源码；未见独立网站许可证。宣传页已迁至独立网站仓库；本次未找到明确站点许可，不能套用 nanoMuse 应用仓库的 GPL。

[原站](https://nanomuse.cn/) · [GitHub Pages 镜像](https://nano-muse.github.io/) · [带源码](https://github.com/nano-muse/nano-muse.github.io) · [许可依据](https://github.com/nano-muse/nano-muse.github.io/blob/main/README.md)

观察限制：这是未激活的静态手机图，只能确认权限确认卡及选项出现在画面中，不能据此判断实际执行行为。

### Astro

将产品价值、安装命令和生态入口放在同一条阅读路径上。

- 整屏采用深蓝到紫色渐变，中央堆叠更新标签、两行大标题、说明和主按钮。
- 按钮下有可复制的命令条，再往下是两排品牌标识。

**值得借鉴：** 把可复制的安装命令紧接在主要开始按钮下方。 在首屏内以整齐的徽标网格呈现项目采用者。

**适用场景：** 面向开发者的框架、工具或内容型网站平台。

**源码与许可：** 带源码；未见明确网站许可证。官网仓库公开，但本次未找到网站 LICENSE；框架本身的 MIT 不自动覆盖官网。

[原站](https://astro.build/) · [带源码](https://github.com/withastro/astro.build) · [许可依据](https://github.com/withastro/astro.build)

观察限制：截图只显示静态首屏和下一段开头；不能据此确认渐变或控件有动态效果，版本标签与徽标为截图时的页面状态。

### Vite

用工具概念图和包管理器命令，把理解产品与开始使用连起来。

- 暗色页面以竖线分成左右两栏：左侧标题、说明和两个按钮，底部嵌有带包管理器标签的命令框。
- 右侧是紫色边缘的立体 Vite 方块图；overview 中可见连接到 CSS、JS、HTML 等小块的示意图。

**值得借鉴：** 在安装命令框中按包管理器分标签，并将创建命令直接展示出来。 用与产品概念相关的示意图填充分栏的视觉侧。

**适用场景：** 前端开发工具、构建工具或其他需要快速展示安装入口的开发者产品。

**源码与许可：** 带源码；MIT（仓库代码）。网站位于 docs；复用时保留许可，品牌标识和个别素材还需分别核对。

[原站](https://vite.dev/) · [带源码](https://github.com/vitejs/vite/tree/main/docs) · [许可依据](https://github.com/vitejs/vite/blob/main/LICENSE)

观察限制：hero 与 overview 中右侧示意图细节不同；截图是静态帧，无法确认其变化是否来自动画或交互。

### Docusaurus

角色插画配合清晰的功能说明，快速引导到文档和示例。

- 顶部有条纹版本公告和导航，下面另有白色版本标题条；主视觉为深灰底、青绿色强调词和绿色卡通角色。
- 主标题下并列开始、演示与 GitHub Star 入口；再下方是三列插图、标题和说明。

**值得借鉴：** 用少量强调色标出主标题中的关键 benefit，并把开始与演示动作并排。 在主视觉下以三列图文块快速展开主要特点。

**适用场景：** 开源文档平台、开发者工具或以内容组织为核心的项目。

**源码与许可：** 带源码；代码 MIT；文档 CC BY 4.0。代码与文档有不同许可；不要把文章、品牌图或全部站点素材都视为 MIT。

[原站](https://docusaurus.io/) · [带源码](https://github.com/facebook/docusaurus/tree/main/website) · [许可依据](https://github.com/facebook/docusaurus/blob/main/LICENSE-docs)

观察限制：截图中的版本号和 Star 数是当时页面显示值；静态图不证明公告条或角色有动效。

### Linear

先给简短的产品定位，再用产品界面展开团队开发工作流。

- 左对齐标题与说明下方展开深色任务界面。
- 产品画面包含工作区侧栏、任务详情和右下角 AI 对话面板；底部内容仍被视口裁切。

**值得借鉴：** 让首页主标题与具体任务界面同时出现，直接呈现产品工作场景。 把 AI 辅助面板叠加在原任务界面中，表达它与当前工作项的关联。

**适用场景：** 产品开发、任务管理或团队 AI 工作流页面。

**源码与许可：** 源码未核实；未核实公开网站许可。本次未核实完整官网源码与可复用许可；公开 SDK 或第三方仿站不等于官方首页源码。

[原站](https://linear.app/)

观察限制：右下 AI 面板显示 Thinking 状态，截图无法证明后续内容；底部界面未完整展示。

### Raycast

突出桌面工具的使用主张，并把平台要求放在下载入口旁。

- 黑底页面顶部是细长圆角导航框，主标题和两行说明居中排列。
- 下载按钮放在首屏较低位置，按钮下方以小号等宽字提示系统要求和安装方式。

**值得借鉴：** 在主要下载按钮紧邻处直接写明系统兼容要求和其他安装入口。 用一个居中的主张和单一主按钮保持桌面应用首屏聚焦。

**适用场景：** 有明确桌面平台和下载入口的效率工具或启动器。

**源码与许可：** 源码未核实；未核实公开网站许可。扩展仓库开放不代表官网开放；适合借鉴信息表达，不能据此复制网站素材。

[原站](https://www.raycast.com/)

观察限制：主标题与下载按钮之间留白较大；截图不能展示应用启动器本身的实际界面或交互。

### Resend

以简洁的开发者定位、开始使用和文档入口组织 API 产品介绍。

- 大号衬线标题与说明左对齐，右侧是立方体视觉，按钮集中在文字下方。
- 近黑背景中的立方体由多块不同材质的深色方块拼成，与左侧文字形成明显左右分区。

**值得借鉴：** 用单个有辨识度的立体图形平衡文字区，并延续页面的暗色调。 让产品主张、简短说明和主要操作集中在同一侧。

**适用场景：** 需要以清晰视觉符号展示开发者服务或基础设施产品的首页。

**源码与许可：** 源码未核实；未核实公开网站许可。页面链接的 SDK 示例不是完整宣传页源码；本次仅作为设计参考。

[原站](https://resend.com/)

观察限制：截图呈现立方体的单一静态状态，不能判断其是否旋转或交互。

### Nerfies

论文、代码和数据集中入口，用并排结果解释技术输出。

- 白底学术项目页中央排列论文标题、作者、机构和一组深色圆角资源按钮。
- 标题区下方用四幅并列图片和说明文字展示采集、输入、Nerfie 与深度图；再下方的视频控件显示加载转圈。

**值得借鉴：** 把论文、arXiv、视频、代码和数据等资源集中成一排易辨认的按钮。 用带标签的连续图片解释输入、处理结果和输出之间的关系。

**适用场景：** 研究论文、实验项目或需要同时发布论文与演示素材的学术页面。

**源码与许可：** 带源码；CC BY-SA 4.0（网站）。README 明确列出 Website License；需保留署名并遵守相同方式共享等条件。算法代码许可另查。

[原站](https://nerfies.github.io/) · [带源码](https://github.com/nerfies/nerfies.github.io) · [许可依据](https://github.com/nerfies/nerfies.github.io#website-license)

观察限制：下方视频在截图中停留于 0:00 加载状态；图片能说明示例结构，不能证明视频内容或动态效果。

### DreamFusion

把生成结果放在说明之前，再提供论文和独立图库入口。

- 页面上缘先出现一排彩色生成结果图，随后居中呈现项目标题、作者机构和 Paper、Project、Gallery 按钮。
- 下方以窄栏排版 Abstract，并接一组颜色鲜明的结果缩略图。

**值得借鉴：** 在项目说明前用结果缩略图快速建立视觉主题。 将论文、项目页和图库入口集中在标题附近。

**适用场景：** 生成式 AI、图形学或其他以可视化结果为重点的研究项目。

**源码与许可：** 带源码；未见明确网站许可证。找到的是项目展示网站源码，不能据此宣称训练模型或完整算法实现已开源；本次未发现明确网站许可。

[原站](https://dreamfusion3d.github.io/) · [带源码](https://github.com/dreamfusion3d/dreamfusion3d.github.io) · [许可依据](https://github.com/dreamfusion3d/dreamfusion3d.github.io)

观察限制：截图展示的是静态图片网格；不能判断图库是否可交互，也不能从图中确认生成过程。

### AstroWind

多页面网站起点；演示站当前暂停，先作为源码候选保留。

- 演示站返回暂停页面，未进行视觉评价。

**值得借鉴：** 可先阅读源码结构；演示恢复后再判断视觉效果。

**适用场景：** 希望从 Astro 网站模板起步的开发者；当前需自行预览确认。

**源码与许可：** 带源码；MIT（仓库代码）。原 onwidget/astrowind 地址现重定向到 arthelokyo/astrowind。本次演示站返回 HTTP 402 Deployment Paused，不评价未展示的页面。

[原站](https://astrowind.vercel.app/) · [带源码](https://github.com/arthelokyo/astrowind) · [许可依据](https://github.com/arthelokyo/astrowind/blob/main/LICENSE.md)

观察限制：演示不可用；本条不提供页面美观或交互质量判断。

### Cruip Open

深色背景与宽幅演示画面，适合讲产品工作方式。

- 深蓝黑底上方是圆角导航框，中央大标题和两枚操作按钮位于宽幅灰阶视频画面上方。
- 视频画面占据首屏下半部，中央叠有带时长的播放入口。

**值得借鉴：** 用一张大型产品或工作场景画面承接标题，并在画面中央放置明确的演示入口。 把注册操作留在导航右侧，减少它对主标题的争夺。

**适用场景：** 需要用产品演示视频呈现工作方式的团队 SaaS 或产品模板。

**源码与许可：** 带源码；GPL 声明附加条款，需核对。README 同时指向 GPL 3.0，并提出不要重新发布、分发或转售模板；复用前应确认这些条款，不能简单标成 MIT。线上演示可能含 PRO 内容。

[原站](https://open.cruip.com/) · [带源码](https://github.com/cruip/open-react-template) · [许可依据](https://github.com/cruip/open-react-template#terms-and-license)

观察限制：截图只显示视频静帧和 3:47 时长标签，不能证明视频已播放或其具体内容。

### Cruip Simple Light

浅色首屏配深色终端式演示，主次按钮与产品说明层次直接。

- 浅蓝灰网格背景上方放置白色圆角导航；头像小圆列在居中大标题之前。
- 首屏下半部是一块深色终端样式面板，hero 与 overview 中可见的命令文本状态不同。

**值得借鉴：** 将终端样式代码框作为视觉主体，直接展示开发者安装步骤。 用一排头像为纯文字标题提供小面积的真实人物视觉。

**适用场景：** 面向开发者的网站构建工具、组件产品或 SaaS 模板。

**源码与许可：** 带源码；GPL 声明附加条款，需核对。README 同时给出 GPL 3.0 与模板再分发限制，先核对条款与免费版本范围；演示文案、头像和评价是模板内容。

[原站](https://simple.cruip.com/) · [带源码](https://github.com/cruip/tailwind-landing-page-template) · [许可依据](https://github.com/cruip/tailwind-landing-page-template#terms-and-license)

观察限制：两张截图中的终端文本不同；不能仅据此认定其为逐字动画或真实终端执行。

### Page UI

把组件与模板的预览放在介绍旁，适合按区块研究页面构成。

- 顶部紫色公告条下接浅色导航；主体采用淡蓝紫背景的左右分栏。
- 左侧标题、说明和开始/阅读按钮，右侧嵌入带播放器控件的模板演示画面。

**值得借鉴：** 用独立公告色带承载新品入口，并让主导航紧随其下。 在组件或模板介绍旁直接放置实际页面预览。

**适用场景：** 网页组件库、落地页模板或设计开发工具。

**源码与许可：** 带源码；MIT（仓库代码）。开源组件、网站代码与链接到的其他商业产品分开看；MIT 不自动覆盖外部付费模板。

[原站](https://pageui.shipixen.com/) · [带源码](https://github.com/PageAI-Pro/page-ui) · [许可依据](https://github.com/PageAI-Pro/page-ui/blob/main/LICENSE.md)

观察限制：hero 图中的视频区域显示加载圈；overview 有视频画面和控件，但截图本身不能证明播放行为。

### Academic Project Page

适合论文与研究成果发布：标题、作者、资源链接和图注齐全。

- 白底研究项目页以居中标题、作者、机构和会议占位文字组成信息区，下面排列 Paper、Supplementary、Code、arXiv 按钮。
- overview 展示一张宽幅主图，左右有切换箭头、下方有说明文字和圆点指示器。

**值得借鉴：** 在学术项目标题下集中提供论文、补充材料、代码和 arXiv 等资源。 用单张大图和简短图注承载主要视觉结果。

**适用场景：** 论文展示页、学术项目页或研究结果合集。

**源码与许可：** 带源码；CC BY-SA 4.0（网站）。README 明确 Website License；替换作者、会议、示例图片和 favicon，保留要求的归属。

[原站](https://eliahuhorwitz.github.io/Academic-project-page-template/) · [带源码](https://github.com/eliahuhorwitz/Academic-project-page-template) · [许可依据](https://github.com/eliahuhorwitz/Academic-project-page-template#website-license)

观察限制：hero 中作者、机构和会议信息是占位文字；overview 从轮播图片区域开始，截图不能证明切换控件可用。

## 继续发现

- [PaulleDemon / awesome-landing-pages](https://github.com/PaulleDemon/awesome-landing-pages)：按 SaaS、作品集、餐饮等类型整理的模板源码集合，仓库有 MIT；每个模板的素材仍需单独核对。
- [nordicgiant2 / awesome-landing-page](https://github.com/nordicgiant2/awesome-landing-page)：宣传页与模板索引，适合扩展候选池；链接到的每个项目各有许可，索引不替它们授权。
- [Landbook](https://land-book.com/)：按行业、风格和页面类型找视觉参考，也能查区块；收录页面不代表提供源码。
- [One Page Love](https://onepagelove.com/)：集中研究单页网站、区块与模板，适合观察阅读顺序；区分灵感案例和可购买/下载的模板。

## 维护与部署

数据在 `catalog.json`，页面模板与交互在 `site/`，缩略图在 `assets/previews/`。README 和网页来自同一份数据，不依赖运行时 API。

```sh
node scripts/build.mjs --readme
node scripts/build.mjs --out /一个不存在的输出目录
```

需 Node.js 22 或更新版，无依赖安装。输出目录必须不存在，避免覆盖已有产物。GitHub Actions 自动检查并部署 Pages。

本仓库原创代码和评注采用 MIT；第三方页面截图、商标与链接项目不在该授权范围内。见 [LICENSE](LICENSE)、[截图归属](ATTRIBUTION.md)。
