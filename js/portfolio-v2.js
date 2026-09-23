document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle: keep the icon, aria-expanded, and visible label in sync.
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const toggleLabel = toggle ? toggle.querySelector('.nav-toggle-label') : null;
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (toggleLabel) toggleLabel.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Portfolio filters: keep aria-pressed in sync so screen reader users know
  // which filter is currently active, not just sighted users via color.
  const filters = [...document.querySelectorAll('.filter-button')];
  const items = [...document.querySelectorAll('.portfolio-item')];
  const empty = document.getElementById('no-projects');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    const filter = btn.dataset.filter;
    let shown = 0;
    items.forEach(item => {
      const ok = filter === 'all' || item.dataset.category.split(' ').includes(filter);
      item.hidden = !ok;
      if (ok) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  }));
});
