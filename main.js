const ul = document.getElementById("links");
const toggle = document.getElementsByClassName("toggle-menu")[0];
console.log(ul);

toggle.addEventListener("click", () => {
  console.log("insdie the ");
  ul.classList.toggle("toggle-class");
});
