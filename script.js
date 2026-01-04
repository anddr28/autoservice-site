function submitForm(e) {
  e.preventDefault();
  document.getElementById('formMsg').innerText =
    'Заявка отправлена. Мы свяжемся с вами.';
  return false;
}
