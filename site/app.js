(() => {
  document.documentElement.classList.add('js');
  const entries = Array.from(document.querySelectorAll('.entry'));
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const source = document.querySelector('#source');
  const pages = document.querySelector('#pages-only');
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  const clear = document.querySelector('#clear-filters');
  function acceptOption(select, value) {
    if (Array.from(select.options).some(option => option.value === value)) select.value = value;
  }
  function readLocation() {
    const state = new URLSearchParams(location.search);
    search.value = state.get('q') || '';
    category.value = source.value = 'all';
    acceptOption(category, state.get('category'));
    acceptOption(source, state.get('source'));
    pages.checked = state.get('pages') === '1';
  }
  function applyFilters(updateUrl = true) {
    const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const entry of entries) {
      const match = terms.every(term => entry.dataset.search.toLocaleLowerCase().includes(term))
        && (category.value === 'all' || entry.dataset.category === category.value)
        && (source.value === 'all' || entry.dataset.source === source.value)
        && (!pages.checked || entry.dataset.pages === 'true');
      entry.hidden = !match;
      if (match) visible++;
    }
    count.textContent = `显示 ${visible} / ${entries.length} 个案例`;
    empty.hidden = visible !== 0;
    if (updateUrl) {
      const next = new URLSearchParams();
      if (search.value.trim()) next.set('q', search.value.trim());
      if (category.value !== 'all') next.set('category', category.value);
      if (source.value !== 'all') next.set('source', source.value);
      if (pages.checked) next.set('pages', '1');
      const query = next.toString();
      try { history.replaceState(null, '', location.pathname + (query ? '?' + query : '') + location.hash); } catch {}
    }
  }
  search.addEventListener('input', () => applyFilters());
  for (const control of [category, source, pages]) control.addEventListener('change', () => applyFilters());
  clear.addEventListener('click', () => {
    search.value = ''; category.value = source.value = 'all'; pages.checked = false;
    applyFilters(); search.focus();
  });
  window.addEventListener('popstate', () => { readLocation(); applyFilters(false); });
  const preview = document.querySelector('#image-preview');
  const previewImage = document.querySelector('#preview-image');
  const previewTitle = document.querySelector('#preview-title');
  const closePreview = document.querySelector('#close-preview');
  let previewOpener = null;
  if (preview && previewImage && previewTitle && closePreview && typeof preview.showModal === 'function') {
    document.querySelectorAll('.entry-preview').forEach(button => { button.disabled = false; });
    document.querySelector('#entries').addEventListener('click', event => {
      const button = event.target.closest('.entry-preview');
      if (!button) return;
      const imagePath = button.dataset.previewSrc;
      if (!/^\.\/previews\/[a-z0-9-]+\.jpg$/.test(imagePath || '')) return;
      previewOpener = button;
      previewTitle.textContent = button.dataset.previewTitle || '页面截图';
      previewImage.alt = `${previewTitle.textContent} 的公开页面截图`;
      previewImage.src = imagePath;
      preview.showModal();
      document.documentElement.classList.add('preview-open');
      closePreview.focus();
    });
    closePreview.addEventListener('click', () => preview.close());
    preview.addEventListener('click', event => {
      if (event.target !== preview) return;
      const rect = preview.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) preview.close();
    });
    preview.addEventListener('close', () => {
      document.documentElement.classList.remove('preview-open');
      previewImage.removeAttribute('src');
      if (previewOpener?.isConnected && !previewOpener.closest('.entry')?.hidden) previewOpener.focus({ preventScroll: true });
      previewOpener = null;
    });
  }
  readLocation(); applyFilters(false);
})();
