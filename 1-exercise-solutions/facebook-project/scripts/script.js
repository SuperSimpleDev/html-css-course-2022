const profileMenuButton = document.querySelector('.right-section-profile');
const profileMenuTooltip = document.querySelector('.profile-menu-tooltip');
const themeToggler = document.querySelector('.theme-toggler');

profileMenuButton.addEventListener('click', () => {
  profileMenuTooltip.classList.toggle('shown');
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});