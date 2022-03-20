document.querySelectorAll(".story-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("change");
    button.nextElementSibling.classList.toggle("change");
  });
});
