import { readFile, writeFile, mkdir, copyFile, lstat, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { renderEntry } from './render-entry.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const data = JSON.parse(await readFile(path.join(root, 'catalog.json'), 'utf8'));
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const md = value => String(value || '').replaceAll('|', '\\|').replaceAll('\n',' ');
const sourceText = entry => ({ public: '带源码', private: '私有源码', unverified: '源码未核实' })[entry.sourceStatus];
const urls = value => { if (value) assert.equal(new URL(value).protocol, 'https:'); };
const ids = new Set();
assert.ok(data.entries.length > 0);
for (const e of data.entries) {
  assert.match(e.id, /^[a-z0-9-]+$/); assert.ok(!ids.has(e.id), 'Duplicate entry'); ids.add(e.id);
  for (const key of ['name','summary','category','sourceStatus','licenseLabel','licenseNote','takeaway','suitableFor','checkedAt']) assert.ok(typeof e[key] === 'string' && e[key].length, `Missing ${e.id}.${key}`);
  assert.ok(['public','private','unverified'].includes(e.sourceStatus));
  assert.ok(['owned','developer','brand','research','template'].includes(e.category));
  assert.ok(['available','paused'].includes(e.availability));
  assert.ok(Array.isArray(e.traits) && e.traits.length);
  assert.equal(typeof e.githubPages, 'boolean');
  for (const key of ['url','mirrorUrl','sourceUrl','licenseUrl']) urls(e[key]);
  assert.ok(e.sourceStatus !== 'public' || e.sourceUrl, 'Source required');
  if (e.screenshot) {
    assert.equal(e.screenshot, `./previews/${e.id}.jpg`);
    assert.ok(['1440/1050','900/1050'].includes(e.thumbRatio));
    assert.ok(Number.isInteger(e.screenshotWidth) && e.screenshotWidth > 0);
    assert.ok(Number.isInteger(e.screenshotHeight) && e.screenshotHeight > 0);
    const s = await lstat(path.join(root, 'assets', e.screenshot.slice(2)));
    assert.ok(s.isFile() && !s.isSymbolicLink() && s.size < 1024 * 1024, 'Invalid thumbnail');
  } else assert.equal(e.availability, 'paused');
}
for (const r of data.resources) { urls(r.url); assert.ok(r.name && r.description); }
const catalogString = JSON.stringify(data, null, 2) + '\n';
assert.ok(!/\/Users\/|\/Volumes\/|github_pat_|gh[pousr]_[A-Za-z0-9]{20,}|-----BEGIN .*PRIVATE KEY-----/.test(catalogString), 'Private content in catalog');
function markdown() {
  const out = [
    '# 漂亮的宣传页 · Awesome Landing Pages', '',
    '从好看的页面，到可核对的设计与源码。收集产品宣传页、开发者首页、研究项目与页面模板，记录各自特点、适用场景、源码及许可。', '',
    '[浏览合集网页](https://harzva.github.io/awesome-landing-pages/) · [只看带源码](https://harzva.github.io/awesome-landing-pages/?source=public) · [只看 GitHub Pages](https://harzva.github.io/awesome-landing-pages/?pages=1) · [贡献指南](CONTRIBUTING.md)', '',
    `本次核查：${data.updatedAt}。${data.entries.length} 个案例，${data.entries.filter(e=>e.sourceStatus==='public').length} 个带公开网站源码，${data.entries.filter(e=>e.githubPages).length} 个有 GitHub Pages 地址。另附 ${data.resources.length} 个发现入口。截图和设计评注不代表商业转化测试。`, '',
    '## 先弄清楚：github.io ≠ 开源', '',
    '- `github.io` 是 GitHub Pages 的默认托管域名；自定义域名也可能使用 Pages。部分账号计划允许从私有仓库发布公开网站。',
    '- 浏览器能读取 HTML、CSS、JavaScript，不代表能拿到原始工程、组件、构建配置或后台代码。',
    '- **带源码**：已找到公开的网站源码。**私有源码**：只有仓库授权成员可见。**源码未核实**：本次没有核实到官方完整页面源码。',
    '- 带源码不等于许可明确。没有许可证通常不授予复制、分发或制作衍生作品的通用权利；代码、图片、字体、视频和商标还可能分别适用不同规则。', '',
    '依据：[GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[GitHub 许可证说明](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)。', '',
    '## 案例一览', '',
    '| 页面 | 类型 | 源码 | GitHub Pages | 许可 / 当前状态 |',
    '| --- | --- | --- | --- | --- |'
  ];
  for (const e of data.entries) out.push(`| [${md(e.name)}](${e.url}) | ${md(e.categoryLabel)} | ${e.sourceUrl ? `[${sourceText(e)}](${e.sourceUrl})` : sourceText(e)} | ${e.githubPages ? '有' : '未标注'} | ${md(e.licenseLabel)}${e.availability==='paused'?'；演示暂停':''} |`);
  out.push('', '## 逐页观察', '');
  for (const e of data.entries) {
    out.push(`### ${e.name}`, '', `${e.summary}`, '', ...e.traits.map(t=>`- ${t}`), '', `**值得借鉴：** ${e.takeaway}`, '', `**适用场景：** ${e.suitableFor}`, '', `**源码与许可：** ${sourceText(e)}；${e.licenseLabel}。${e.licenseNote}`, '');
    const links=[`[原站](${e.url})`];if(e.mirrorUrl)links.push(`[GitHub Pages 镜像](${e.mirrorUrl})`);if(e.sourceUrl)links.push(`[${sourceText(e)}](${e.sourceUrl})`);if(e.licenseUrl)links.push(`[许可依据](${e.licenseUrl})`);
    out.push(links.join(' · '), '', `观察限制：${e.caveat}`, '');
  }
  out.push('## 继续发现', '');for(const r of data.resources)out.push(`- [${r.name}](${r.url})：${r.description}`);
  out.push('', '## 维护与部署', '',
    '数据在 `catalog.json`，页面模板与交互在 `site/`，缩略图在 `assets/previews/`。README 和网页来自同一份数据，不依赖运行时 API。', '',
    '```sh', 'node scripts/build.mjs --readme', 'node scripts/build.mjs --out /一个不存在的输出目录', '```', '',
    '需 Node.js 22 或更新版，无依赖安装。输出目录必须不存在，避免覆盖已有产物。GitHub Actions 自动检查并部署 Pages。', '',
    '本仓库原创代码和评注采用 MIT；第三方页面截图、商标与链接项目不在该授权范围内。见 [LICENSE](LICENSE)、[截图归属](ATTRIBUTION.md)。', '');
  return out.join('\n');
}
if (args.length === 1 && args[0] === '--readme') {
  await writeFile(path.join(root,'README.md'),markdown());
  const notice=['# 截图与来源归属','','缩略图是公开页面在 2026-10-26 的观察记录，用于对应条目的研究评述。保留原页面内容，仅等比缩小并转换 JPEG；不镜像完整网站，也不据此授权第三方素材。图像、商标和页面设计权利归各自作者。','','| 缩略图 | 原站与权利主体 | 日期 |','| --- | --- | --- |'];
  for(const e of data.entries.filter(e=>e.screenshot)) notice.push(`| assets/previews/${e.id}.jpg | [${e.name}](${e.url}) | ${e.checkedAt} |`);
  notice.push('','nanoMuse 使用窄屏静态展示，未激活其在线执行服务。所有截图均不包含私人登录态。网站迭代后可能与当前在线页面不同。','');
  await writeFile(path.join(root,'ATTRIBUTION.md'),notice.join('\n'));
  console.log('README and attribution generated.');
} else {
  assert.equal(args.length,2,'Use --readme or --out <new-directory>');assert.equal(args[0],'--out');
  const out=path.resolve(args[1]);assert.ok(out!==root&&!root.startsWith(out+path.sep),'Invalid output directory');
  await mkdir(out);await mkdir(path.join(out,'previews'));
  let html=await readFile(path.join(root,'site/template.html'),'utf8');
  const resources=data.resources.map(r=>`<article class="resource-item"><h3><a href="${escape(r.url)}" rel="noopener noreferrer">${escape(r.name)} ↗</a></h3><p>${escape(r.description)}</p></article>`).join('\n');
  for(const [k,v] of Object.entries({CARDS:data.entries.map(renderEntry).join('\n'),COUNT:data.entries.length,DATE:data.updatedAt,RESOURCES:resources}))html=html.replaceAll(`{{${k}}}`,String(v));
  assert.ok(!/\{\{[A-Z_]+\}\}/.test(html),'Unresolved template placeholders');
  await writeFile(path.join(out,'index.html'),html);await writeFile(path.join(out,'catalog.json'),catalogString);
  for(const f of ['styles.css','app.js'])await copyFile(path.join(root,'site',f),path.join(out,f));
  for(const e of data.entries.filter(e=>e.screenshot))await copyFile(path.join(root,'assets',e.screenshot.slice(2)),path.join(out,e.screenshot));
  for(const f of ['LICENSE','ATTRIBUTION.md'])await copyFile(path.join(root,f),path.join(out,f));
  await writeFile(path.join(out,'.nojekyll'),'');await writeFile(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\n');
  const files=[];async function walk(dir,prefix=''){for(const name of (await readdir(dir)).sort()){const rel=prefix+name;const s=await lstat(path.join(dir,name));assert.ok(!s.isSymbolicLink());if(s.isDirectory())await walk(path.join(dir,name),rel+'/');else{const b=await readFile(path.join(dir,name));files.push({path:rel,bytes:b.length,sha256:createHash('sha256').update(b).digest('hex')});}}}await walk(out);
  console.log(JSON.stringify({entries:data.entries.length,output:out,files},null,2));
}
