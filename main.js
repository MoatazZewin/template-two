const ul = document.getElementById("links");
const toggle = document.getElementsByClassName("toggle-menu")[0];
const children = [...ul.children];

toggle.addEventListener("click", () => {
  ul.classList.toggle("toggle-class");
  ul.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if (ul.classList.contains("show")) {
      ul.classList.remove("toggle-class");
    }
  } else {
    if (ul.classList.contains("show")) {
      ul.classList.add("toggle-class");
    }
  }
});
console.log(children);

children.forEach((ele) => {
  ele.addEventListener("click", () => {
    console.log("inside the click");
    if (ul.classList.contains("toggle-class")) {
      ul.classList.remove("show");
      ul.classList.remove("toggle-class");
    }
  });
});
