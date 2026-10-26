const SOURCE_STATES = new Set(["public", "private", "unverified"]);
const THUMB_RATIOS = Object.freeze({
  "1440/1050": [1440, 1050],
  "900/1050": [900, 1050],
});

function asText(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function escapeHtml(value) {
  return asText(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeWebUrl(value) {
  const candidate = asText(value);
  if (!candidate) return "";
  try {
    const parsed = new URL(candidate);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? candidate : "";
  } catch {
    return "";
  }
}

function safeScreenshot(value) {
  const candidate = asText(value);
  if (!candidate.startsWith("./previews/")) return "";
  if (candidate.includes("..") || candidate.includes("\\")) return "";
  return candidate;
}

function screenshotGeometry(entry) {
  const ratio = asText(entry.thumbRatio);
  const referenceSize = THUMB_RATIOS[ratio];
  if (!referenceSize) {
    throw new TypeError(`Unsupported screenshot ratio: ${ratio || "missing"}`);
  }

  const width = Number(entry.screenshotWidth);
  const height = Number(entry.screenshotHeight);
  if (!Number.isSafeInteger(width) || width <= 0 || !Number.isSafeInteger(height) || height <= 0) {
    throw new TypeError("Screenshot dimensions must be positive integers");
  }

  const expectedRatio = referenceSize[0] / referenceSize[1];
  if (Math.abs(width / height - expectedRatio) > 0.01) {
    throw new RangeError(`Screenshot dimensions do not match thumbRatio ${ratio}`);
  }
  return { ratio, width, height };
}

function asList(value) {
  if (Array.isArray(value)) return value.map(asText).filter(Boolean);
  return value === null || value === undefined || value === "" ? [] : [asText(value)];
}

function sourceStateText(status) {
  if (status === "public") return "带源码";
  if (status === "private") return "私有源码 · 需权限";
  return "源码未核实";
}

function sourceLinkText(status) {
  if (status === "public") return "查看源码";
  if (status === "private") return "查看私有源码（需权限）";
  return "查看源码线索";
}

function link(url, label, className = "") {
  const safeUrl = safeWebUrl(url);
  if (!safeUrl) return "";
  const classAttr = className ? ` class="${escapeHtml(className)}"` : "";
  return `<a${classAttr} href="${escapeHtml(safeUrl)}" rel="noreferrer noopener">${escapeHtml(label)}<span class="entry-link-arrow" aria-hidden="true">↗</span></a>`;
}

export function renderEntry(entry) {
  if (!entry || typeof entry !== "object") {
    throw new TypeError("renderEntry expects an entry object");
  }

  const status = SOURCE_STATES.has(entry.sourceStatus) ? entry.sourceStatus : "unverified";
  const traits = asList(entry.traits);
  const sourceUrl = safeWebUrl(entry.sourceUrl);
  const originalUrl = safeWebUrl(entry.url);
  const mirrorUrl = safeWebUrl(entry.mirrorUrl);
  const licenseUrl = safeWebUrl(entry.licenseUrl);
  const screenshot = safeScreenshot(entry.screenshot);
  const geometry = screenshot ? screenshotGeometry(entry) : null;
  const availability = asText(entry.availability);
  const availabilityText = availability === "available" ? "原站可访问" : availability === "paused" ? "原站暂不可访问" : "原站状态未记录";

  const searchableValues = [
    entry.id,
    entry.name,
    entry.url,
    entry.mirrorUrl,
    entry.category,
    entry.categoryLabel,
    entry.sourceStatus,
    entry.sourceLabel,
    entry.sourceUrl,
    entry.licenseLabel,
    entry.licenseNote,
    entry.licenseUrl,
    entry.githubPages === true ? "GitHub Pages" : "",
    entry.stack,
    entry.summary,
    traits.join(" "),
    entry.takeaway,
    entry.suitableFor,
    entry.caveat,
    entry.screenshot,
    entry.thumbRatio,
    entry.screenshotWidth,
    entry.screenshotHeight,
    entry.availability,
    entry.checkedAt,
  ].map(asText).filter(Boolean).join(" ");

  const image = screenshot
    ? `<button class="entry-preview" type="button" disabled data-preview-src="${escapeHtml(screenshot)}" data-preview-title="${escapeHtml(entry.name)}" aria-label="查看 ${escapeHtml(entry.name)} 的页面截图"><img src="${escapeHtml(screenshot)}" alt="${escapeHtml(asText(entry.name))} 宣传页截图" width="${geometry.width}" height="${geometry.height}" loading="lazy" decoding="async"><span class="preview-hint" aria-hidden="true">查看大图</span></button>`
    : `<div class="entry-unavailable"><span>当前没有可展示的截图</span></div>`;

  const title = originalUrl
    ? `<a href="${escapeHtml(originalUrl)}" rel="noreferrer noopener">${escapeHtml(entry.name)}</a>`
    : escapeHtml(entry.name);

  const sourceLink = sourceUrl
    ? link(sourceUrl, sourceLinkText(status))
    : `<span class="entry-link-note">${status === "unverified" ? "暂无已核实的源码链接" : "暂未提供源码链接"}</span>`;

  const mirrorLink = mirrorUrl ? link(mirrorUrl, "备用访问") : "";
  const licenseRecord = asText(entry.licenseLabel) || "许可信息未记录";
  const licenseDetail = asText(entry.licenseNote);
  const caveat = asText(entry.caveat);
  const stack = asText(entry.stack);
  const checkedAt = asText(entry.checkedAt);
  const traitsMarkup = traits.length
    ? `<ul class="entry-traits" aria-label="页面特点">${traits.map((trait) => `<li>${escapeHtml(trait)}</li>`).join("")}</ul>`
    : "";

  return `<article class="entry" data-id="${escapeHtml(entry.id)}" data-category="${escapeHtml(entry.category)}" data-source="${escapeHtml(status)}" data-pages="${entry.githubPages === true ? "true" : "false"}" data-search="${escapeHtml(searchableValues)}">
  <div class="entry-media" data-thumb-ratio="${geometry ? geometry.ratio : "1440/1050"}">${image}</div>
  <div class="entry-content">
    <div class="entry-heading">
      <div class="entry-title-block">
        <p class="entry-type">${escapeHtml(entry.categoryLabel)}</p>
        <h2>${title}</h2>
      </div>
      <span class="source-state source-state--${status}">${escapeHtml(sourceStateText(status))}</span>
    </div>
    <p class="entry-summary">${escapeHtml(entry.summary)}</p>
    ${traitsMarkup}
    <dl class="entry-notes">
      <div class="entry-note">
        <dt>值得借鉴</dt>
        <dd>${escapeHtml(asText(entry.takeaway) || "暂无特点评注")}</dd>
      </div>
      <div class="entry-note">
        <dt>适用场景</dt>
        <dd>${escapeHtml(asText(entry.suitableFor) || "暂无适用场景评注")}</dd>
      </div>
    </dl>
    ${stack ? `<p class="entry-stack">技术栈：${escapeHtml(stack)}</p>` : ""}
    <p class="entry-checked">${escapeHtml(availabilityText)}${checkedAt ? ` <span aria-hidden="true">·</span> 核对于 ${escapeHtml(checkedAt)}` : ""}${entry.githubPages === true ? ` <span aria-hidden="true">·</span> GitHub Pages` : ""}</p>
    <div class="entry-links">
      ${originalUrl ? link(originalUrl, "打开原站") : `<span class="entry-link-note">原站地址未记录</span>`}
      ${sourceLink}
      ${mirrorLink}
    </div>
    <details class="entry-details">
      <summary>源码与许可说明</summary>
      <div class="entry-details-content">
        <p><strong>源码状态：</strong>${escapeHtml(sourceStateText(status))}</p>
        <p><strong>许可：</strong>${escapeHtml(licenseRecord)}${licenseUrl ? ` · ${link(licenseUrl, "查看许可依据")}` : ""}</p>
        ${licenseDetail ? `<p>${escapeHtml(licenseDetail)}</p>` : ""}
        ${caveat ? `<p><strong>限制：</strong>${escapeHtml(caveat)}</p>` : ""}
      </div>
    </details>
  </div>
</article>`;
}
