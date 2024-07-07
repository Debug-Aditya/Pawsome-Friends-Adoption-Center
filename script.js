// script.js
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === 'Example' && password === '123') {
    // credentials are correct, redirect to index.html
    window.location.href = 'indexmain.html';
  } else {
    // credentials are incorrect, display an error message
    alert('Invalid username or password');
  }
});
