let counter = document.getElementById("counter");
let count = 0;
let isPaused = false;

let intervalId = setInterval(() => {
  if (!isPaused) {
    count++;
    counter.textContent = count;
  }
}, 1000);
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

minus.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});
const heart = document.getElementById("heart");
const likesList = document.querySelector(".likes");

const likesMap = {};

heart.addEventListener("click", () => {
  if (likesMap[count]) {
    likesMap[count]++;
    const li = document.getElementById(`like-${count}`);
    li.textContent = `${count} has been liked ${likesMap[count]} times`;
  } else {
    likesMap[count] = 1;
    const li = document.createElement("li");
    li.id = `like-${count}`;
    li.textContent = `${count} has been liked 1 time`;
    likesList.appendChild(li);
  }
});
const pauseBtn = document.getElementById("pause");

pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;

  if (isPaused) {
    pauseBtn.textContent = "resume";
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    document.getElementById("submit").disabled = true;
  } else {
    pauseBtn.textContent = "pause";
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    document.getElementById("submit").disabled = false;
  }
});
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const p = document.createElement("p");
  p.textContent = commentInput.value;
  commentList.appendChild(p);
  commentInput.value = "";
});
