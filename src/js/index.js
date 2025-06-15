const openBtn = document.querySelector("[data-modal-open]");
const modal = document.querySelector("[data-modal]");
const closeBtn = document.querySelector("[data-modal-close]");

const handleToggleModal = () => {
  modal.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
};

openBtn.addEventListener("click", handleToggleModal);
closeBtn.addEventListener("click", handleToggleModal);
