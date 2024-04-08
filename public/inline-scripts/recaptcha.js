/* eslint-disable no-undef */
function loadRecaptcha() {
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
  document.body.appendChild(script);
}
window.setTimeout(loadRecaptcha, 1000);
