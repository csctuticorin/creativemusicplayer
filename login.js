
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('floatingInput').value;
  const password = document.getElementById('floatingPassword').value;

  if (!email || !password) {
    alert('Please fill in all fields.');
  } else {
    alert(`Logging in with email: ${email}`);
  }
});