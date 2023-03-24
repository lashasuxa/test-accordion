const accordion = document.getElementsByClassName("container");
console.log(accordion.length);

for (let index = 0; index < accordion.length; index++) {
  accordion[index].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
