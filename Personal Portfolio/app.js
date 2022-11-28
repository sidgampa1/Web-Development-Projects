console.log("js script beginning");
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');
console.log("loaded js script");
function pageTransitions() {
  console.log("adding event listeners");
  for(let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function() {
      console.log('handling active-btn');
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].classList.remove('active-btn');
      this.classList.add('active-btn');
    })
  }
}

pageTransitions();
