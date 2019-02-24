window.onscroll = () => { scrollMoveV() };

var currentTop = document.scrollTop;

//reset position of decorator
document.scrollTop = 0;
const decorators = document.getElementsByClassName('v-decorator');
const tops = [].slice.call(decorators).map(dec => dec.offsetTop);
document.scrollTop = currentTop;

const hidden = {
  visibility: 'hidden'
  , opacity: 0
  , transition: 'visibility 0s 0.3s, opacity 0.3s ease-in'
}

const show = {
  visibility: 'visible'
  , opacity: 1
  , transition: 'opacity 2s ease-out'
}

const active = { color: 'var(--accent-red)', transition: '0.2s ease-out' }

// sections
const me = document.getElementById('sect-me');
const exp = document.getElementById('sect-exp');
const work = document.getElementById('sect-work');
const contact = document.getElementById('sect-contact');

const navItems = [
  document.getElementById('me')
  , document.getElementById('exp')
  , document.getElementById('works')
  , document.getElementById('contact')
]

const hExp = document.getElementById('h-exp');
const hExpTop = hExp.offsetTop;

const exps = [].slice.call(document.getElementsByClassName('exp-container'));

setStyle(navItems[0], active);

function scrollMoveV() {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 150) {
    setStyle(document.getElementById('wisa'), hidden);
    setStyle(document.getElementById('about-me'), hidden);
  } else {
    setStyle(document.getElementById('wisa'), show);
    setStyle(document.getElementById('about-me'), show);
  }

  navItems.map(item => item.style = null);

  if (scroll < me.offsetHeight) {
    setStyle(navItems[0], active)
    if (scroll > 0) {
      decorators[0].style.top = (tops[0] - scroll / 3) + 'px';
      decorators[1].style.top = (tops[1] - scroll / 1.5) + 'px';
      decorators[2].style.top = (tops[2] - scroll / 2.75) + 'px';
    }
  } else if (scroll < exp.offsetHeight + exp.offsetTop) {
    setStyle(navItems[1], active)
    var offsetTop = exp.offsetTop - 50;
    hExp.style.top = (hExpTop + (scroll - offsetTop) / 1.2) + 'px';
  } else if (scroll < work.offsetHeight + work.offsetTop) {
    setStyle(navItems[2], active)
  } else if (scroll < contact.offsetHeight + contact.offsetTop) {
    setStyle(navItems[3], active)
  }
}

function setStyle(em, style) {
  Object.assign(em.style, style);
}