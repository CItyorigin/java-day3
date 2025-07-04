const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmError = document.getElementById('confirmError');

function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // 초기화
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmError.textContent = '';

  let valid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = '이름을 입력하세요.';
    valid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = '올바른 이메일 형식을 입력하세요.';
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = '비밀번호는 최소 6자 이상이어야 합니다.';
    valid = false;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmError.textContent = '비밀번호가 일치하지 않습니다.';
    valid = false;
  }

  if (valid) {
    alert("회원가입이 완료되었습니다!");
    form.reset();
  }
});
