// ============================================================
// MUHAMMAD ASHAR — PORTFOLIO
// Terminal boot-sequence typing effect + small UI interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  initNavToggle();
  initTerminal();
  initRevealOnScroll();
});

/* ---------- footer year ---------- */
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- mobile nav toggle ---------- */
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.classList.toggle('is-active', isOpen);
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- terminal typing effect ---------- */
const TERMINAL_SCRIPT = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Muhammad Ashar — Cyber Security Student' },
  { type: 'cmd', text: 'cat role.txt' },
  { type: 'out', text: 'BS Cyber Security @ SSUET, Karachi (2025–2028)' },
  { type: 'cmd', text: 'cat focus.txt' },
  { type: 'out', text: 'Network Security · Ethical Hacking · Risk Management' },
  { type: 'cmd', text: './status --check' },
  { type: 'out', text: 'Available for internships & collaboration ✔' },
];

function initTerminal() {
  const body = document.getElementById('terminalBody');
  if (!body) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Render instantly, no animation
    body.innerHTML = TERMINAL_SCRIPT.map(lineToHTML).join('');
    return;
  }

  let lineIndex = 0;

  function typeNextLine() {
    if (lineIndex >= TERMINAL_SCRIPT.length) {
      appendCursorLine();
      return;
    }
    const entry = TERMINAL_SCRIPT[lineIndex];
    const lineEl = document.createElement('div');
    lineEl.className = 'line';
    body.appendChild(lineEl);

    if (entry.type === 'cmd') {
      typeText(lineEl, `ashar@ssuet:~$ `, entry.text, () => {
        lineIndex++;
        setTimeout(typeNextLine, 150);
      }, true);
    } else {
      lineEl.innerHTML = `<span class="out">${escapeHTML(entry.text)}</span>`;
      lineIndex++;
      setTimeout(typeNextLine, 350);
    }
  }

  function typeText(el, prefix, text, done, isCmd) {
    let i = 0;
    const prefixSpan = `<span class="prompt">${prefix}</span>`;
    function step() {
      const shown = text.slice(0, i);
      el.innerHTML = prefixSpan + `<span class="key">${escapeHTML(shown)}</span>`;
      if (i < text.length) {
        i++;
        setTimeout(step, 32);
      } else {
        done();
      }
    }
    step();
  }

  function appendCursorLine() {
    const lineEl = document.createElement('div');
    lineEl.className = 'line';
    lineEl.innerHTML = `<span class="prompt">ashar@ssuet:~$</span> <span class="cursor"></span>`;
    body.appendChild(lineEl);
  }

  typeNextLine();
}

function lineToHTML(entry) {
  if (entry.type === 'cmd') {
    return `<div class="line"><span class="prompt">ashar@ssuet:~$ </span><span class="key">${escapeHTML(entry.text)}</span></div>`;
  }
  return `<div class="line"><span class="out">${escapeHTML(entry.text)}</span></div>`;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- reveal sections on scroll ---------- */
function initRevealOnScroll() {
  const targets = document.querySelectorAll('.skill-card, .project-card, .cert-card, .timeline__item, .contact-card');
  if (!('IntersectionObserver' in window) || targets.length === 0) return;

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}
