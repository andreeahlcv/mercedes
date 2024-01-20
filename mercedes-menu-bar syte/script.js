const sidebar = document.querySelector('.sidebar');
const toogleBtn = document.querySelector('.toogle-btn');

toogleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});