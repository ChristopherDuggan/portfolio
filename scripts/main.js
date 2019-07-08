const viewChecker = () => {

  let logo = document.getElementsByClassName('logo')[0]

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

  if (about < windowHeight/2) {
    logo.classList = 'logo red';
  }

  if (experience < windowHeight/2) {
    logo.classList = 'logo orange';
  }

  if (projects < windowHeight/2) {
    logo.classList = 'logo yellow';
  }

  if (skills < windowHeight/2) {
    logo.classList = 'logo green';
  }

  if (education < windowHeight/2) {
    logo.classList = 'logo blue';
  }

  if (contact < windowHeight/2) {
    logo.classList = 'logo purple';
  }
};

window.addEventListener('resize', viewChecker)
window.addEventListener('scroll', viewChecker)


