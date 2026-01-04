function submitForm(e) {
  e.preventDefault();
  document.getElementById('formMsg').innerText =
    'Заявка отправлена. Мы свяжемся с вами.';
  return false;
}

const btn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  btn.classList.toggle('show', window.scrollY > 300);
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
