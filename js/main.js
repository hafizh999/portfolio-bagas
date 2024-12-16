// Toggle and Responsive Navigation
const navSlide = () => {
  const hamburgers = document.querySelector('.hamburgers');
  const navLists = document.querySelector('nav');

  hamburgers.addEventListener('click', () => {
    navLists.classList.toggle('nav-active');
    hamburgers.classList.toggle('toggle-hamburgers');
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};
