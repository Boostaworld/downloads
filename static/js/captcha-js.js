const CaptchaOverlay = document.getElementById('captcha-overlay');
let isCaptchaSolved = false;

function toggleCaptcha() {

  if (CaptchaOverlay.style.display === 'none') {
    CaptchaOverlay.style.display = 'flex';
  } else {
    CaptchaOverlay.style.display = 'none';
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const TriggerCaptcha = document.querySelector('.captcha-trigger');

  TriggerCaptcha.addEventListener('click', async function () {
    CaptchaOverlay.style.display = 'flex';
    grecaptcha.reset()
  });
});



document.addEventListener('DOMContentLoaded', function () {
  CaptchaOverlay.addEventListener('click', async function () {
      toggleCaptcha()
  });
});