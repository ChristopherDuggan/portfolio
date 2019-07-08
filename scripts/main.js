  let logo = document.getElementsByClassName('logo')[0];
  let card = document.getElementsByClassName('card-border');
  let nav = document.getElementsByClassName('nav-li');

const changeColor = () => {


  let windowHeight = window.innerHeight

  const about = document.getElementById('about')
    .getBoundingClientRect().top;
  const experience = document.getElementById('experience')
    .getBoundingClientRect().top;
  const projects = document.getElementById('projects')
    .getBoundingClientRect().top;
  const skills = document.getElementById('skills')
    .getBoundingClientRect().top;
  const education = document.getElementById('education')
    .getBoundingClientRect().top;
  const contact = document.getElementById('contact')
    .getBoundingClientRect().top;

  if (experience > windowHeight/2) {
    logo.classList = 'logo red';
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove('nav-highlight');
      if (nav[i].classList.contains('red')) {
        nav[i].classList.add('nav-highlight');
      }
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.borderColor="rgba(255, 0, 0, 0.8)";
    }
  } else if (projects > windowHeight/2) {
    logo.classList = 'logo orange';
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove('nav-highlight');
      if (nav[i].classList.contains('orange')) {
        nav[i].classList.add('nav-highlight');
      }
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.borderColor="rgba(255, 165, 0, 0.8)";
    }
  } else if (skills > windowHeight/2) {
    logo.classList = 'logo yellow';
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove('nav-highlight');
      if (nav[i].classList.contains('yellow')) {
        nav[i].classList.add('nav-highlight');
      }
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.borderColor="rgba(255, 255, 0, 0.8)";
    }
  }

  else if (education > windowHeight/2) {
    logo.classList = 'logo green';
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove('nav-highlight');
      if (nav[i].classList.contains('green')) {
        nav[i].classList.add('nav-highlight');
      }
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.borderColor="rgba(0, 128, 0, 0.8)";
    }
  }

  else if (contact > windowHeight/2) {
    logo.classList = 'logo blue';
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove('nav-highlight');
      if (nav[i].classList.contains('blue')) {
        nav[i].classList.add('nav-highlight');
      }
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.borderColor="rgba(0, 0, 255, 0.8)";
    }
  }

  else {
    logo.classList = 'logo purple';
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove('nav-highlight');
      if (nav[i].classList.contains('purple')) {
        nav[i].classList.add('nav-highlight');
      }
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.borderColor="rgba(128, 0, 128, 0.8)";
    }
  }
};

window.addEventListener('resize', changeColor)
window.addEventListener('scroll', changeColor)


