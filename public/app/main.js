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
}
