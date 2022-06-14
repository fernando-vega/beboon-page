window.onload = function () {
  init();
};

function init() {
  let faqLabel = document.querySelectorAll(".faq-label");
  faqLabel.forEach(
    (item) =>
      (item.onclick = () => {
        item.nextElementSibling.classList.toggle("active");
      })
  );

  // selector
  let menu = document.querySelector(".hamburger");
  let modal = document.querySelector(".openModal");
  let modalV1 = document.querySelector(".openModalV1");
  let modalV2 = document.querySelector(".openModalV2");
  let modalT = document.querySelectorAll(".openModalT");
  let closeModal = document.querySelectorAll(".closeModal");

  // method
  function toggleMenu(event) {
    this.classList.toggle("is-active");
    document.querySelector(".mainHeader__nav").classList.toggle("is_active");
    document.querySelector("body").classList.toggle("isActive");
    event.preventDefault();
  }

  function toggleModal(event) {
    event.preventDefault();
    document.querySelector(".modal-historia").classList.toggle("active");
    document.querySelector("body").classList.toggle("isActive");
  }

  function toggleModalV1(event) {
    event.preventDefault();
    document.querySelector(".modal-video-1").classList.toggle("active");
    document.querySelector("body").classList.toggle("isActive");
  }

  function toggleModalV2(event) {
    event.preventDefault();
    document.querySelector(".modal-video-2").classList.toggle("active");
    document.querySelector("body").classList.toggle("isActive");
  }

  function toggleModalT(event, id) {
    event.preventDefault();
    document.querySelector(".modal-video-t-" + id).classList.toggle("active");
    document.querySelector("body").classList.toggle("isActive");
  }

  // event
  menu.addEventListener("click", toggleMenu, false);
  modal.addEventListener("click", toggleModal, false);
  modalV1.addEventListener("click", toggleModalV1, false);
  modalV2.addEventListener("click", toggleModalV2, false);
  closeModal.forEach((item) => {
    item.addEventListener(
      "click",
      () => {
        item.parentElement.parentElement.classList.remove("active");
        document.querySelector("body").classList.remove("isActive");
      },
      false
    );
  });

  modalT.forEach((videoId) => {
    videoId.addEventListener("click", function () {
      let videoId = this.getAttribute("data-videoId");
      toggleModalT(event, videoId), false;
    });
  });
}

let testimonialHeight = document.querySelector(
  ".testimonials__grid"
).clientHeight;

let sliderTestimodials = document.querySelector(".slider");
sliderTestimodials.style.height = testimonialHeight + 50 + "px";

let arrowIconLeft =
  '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="40px" id="Layer_1" style="enable-background:new 0 0 40 40;" version="1.1" viewBox="0 0 512 512" width="40px" color="#f15f24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>';

let slides = document.querySelectorAll(".slide-wrap .item");
let slideSayisi = slides.length;

let prev = document.getElementById("prev");
let next = document.getElementById("next");
prev.innerHTML = arrowIconLeft;
next.innerHTML = arrowIconLeft;
next.querySelector("svg").style.transform = "rotate(180deg)";

for (let index = 0; index < slides.length; index++) {
  const element = slides[index];
  element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop = 0 + 1000 * slideSayisi;

function goNext() {
  loop++;
  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform =
      "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
  }
}

function goPrev() {
  loop--;
  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform =
      "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
  }
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    goNext();
  } else if (e.code === "ArrowLeft") {
    goPrev();
  }
});
