const likeButton = document.querySelector(".like-button");
const ractangle = document.querySelector(".grp-ractangle");
const rightBottom = document.querySelector(".grp-right-bottom");
const rightTop = document.querySelector(".grp-right-top");
const grpTop = document.querySelector(".grp-top");
const grpLeft = document.querySelector(".grp-left");

let numberOfLikes = 0;

likeButton.addEventListener("click", () => {
  numberOfLikes++;
  if (numberOfLikes >= 12) {
    grpLeft.classList.add("cracked");
    likeButton.classList.add("exploded");
  } else if (numberOfLikes >= 9) {
    rightBottom.classList.add("cracked");
  } else if (numberOfLikes >= 6) {
    rightTop.classList.add("cracked");
  } else if (numberOfLikes >= 3) {
    grpTop.classList.add("cracked");
  }
  likeButton.classList.add("big");
});

likeButton.addEventListener("transitionend", () => {
  likeButton.classList.remove("big");
});
