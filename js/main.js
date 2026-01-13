// main.js

// set year in footer
document.querySelectorAll('#year, #year2, #year3, #year4').forEach(el => el.textContent = new Date().getFullYear());

// theme toggle logic
function applyTheme(isDark){
  document.body.classList.toggle('dark-theme', isDark);
  document.body.classList.toggle('light-theme', !isDark);
  // store
  localStorage.setItem('themeDark', isDark ? '1' : '0');
}
const saved = localStorage.getItem('themeDark');
applyTheme(saved === '1');

// wire up toggles (both ids)
document.querySelectorAll('#themeToggle, #themeToggle2').forEach(btn => {
  if(!btn) return;
  btn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-theme');
    applyTheme(isDark);
  });
});

// project "see more" buttons on index redirect to portfolio and scroll to project
document.querySelectorAll('.project-see-more').forEach(b => {
  b.addEventListener('click', (e) => {
    // we redirect to portfolio.html — optionally add a hash so portfolio can highlight project
    const t = e.currentTarget.dataset.target || '';
    window.location.href = `portfolio.html#${t}`;
  });
});

// Basic smooth scroll if on portfolio for hash
if(location.hash){
  const id = location.hash.substring(1);
  // try to open the accordion corresponding to project (c1,c2,c3)
  if(id === 'qa') {
    const el = document.querySelector('#c1');
    el && new bootstrap.Collapse(el, {toggle:true});
  } else if(id === 'hotel'){
    const el = document.querySelector('#c2');
    el && new bootstrap.Collapse(el, {toggle:true});
  } else if(id === 'ecom'){
    const el = document.querySelector('#c3');
    el && new bootstrap.Collapse(el, {toggle:true});
  }
}

// small demo contact form prevention (see contact.html)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks — this demo does not submit to a server. for further i will Replace with  backend or an email service. use phone number for currently');
  });
}
