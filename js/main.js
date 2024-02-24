/*Image Filter*/ let imageSpans = document.querySelectorAll(`.image-type span`);
let images = document.querySelectorAll(`.portfolio-container > div`);
imageSpans.forEach((span) => {
  span.addEventListener(`click`, function () {
    imageSpans.forEach((e) => {
      ////Remove active class from all elements
      e.classList.remove(`active`);
      ////Add active class to element
      this.classList.add(`active`);
      ////Hidden all images
      images.forEach((img) => {
        img.style.display = `none`;
      });
    });
    // console.log(this.dataset.image);
    ////Show images of span-image element
    document.querySelectorAll(`.${this.dataset.image}`).forEach((image) => {
      image.style.display = `block`;
    });
  });
});

/*Increace Numbers in stats section*/
let stats_section = document.querySelector(`.stats-scroll`);
let stats = document.querySelectorAll(`.stat`);
let started = true;
window.addEventListener(`scroll`, function () {
  if (window.scrollY >= stats_section.offsetTop - 400) {
    if (started) {
      stats.forEach((stat) => {
        let count = setInterval(() => {
          stat.textContent++;
          if (stat.textContent == stat.dataset.stats) {
            clearInterval(count);
          }
        }, 5000 / stat.dataset.stats);
      });
    }
    started = false;
  }
});

/*change a progress length for skill*/
let skillsSection = document.querySelector(`.skills-sroll`);
let skills = document.querySelectorAll(`.skill-box div span`);

window.addEventListener(`scroll`, function () {
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    skills.forEach((skill) => (skill.style.width = skill.dataset.width));
  }
});

/*To Top Button*/
let toTopBtn = document.querySelector(`.to-top`);
///Show the to-top button
window.addEventListener(`scroll`, function () {
  if (window.scrollY >= 800) toTopBtn.style.right = `40px`;
  else toTopBtn.style.right = `-40px`;
});

//Click on the to-top button
toTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: `smooth`,
  });
};
