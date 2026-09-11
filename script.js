document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('helloButton').addEventListener('click', () => {
  document.getElementById('message').textContent = 'JavaScript is working perfectly! 🚀';
});
