const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const open = document.getElementById("open");
const close = document.getElementById("close");

btn.addEventListener("click", () => {
  btn.classList.toggle("hidden");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
  close.classList.toggle("hidden");
  //   open.classList.toggle("hidden");
  console.log(50);
});

overlay.addEventListener("click", () => {
  nav.classList.remove("open");
});

close.addEventListener("click", () => {
  btn.classList.toggle("hidden");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
  close.classList.toggle("hidden");
});
// btn.addEventListener("click", () => {});
