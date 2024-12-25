const list = [
  "What’s the most interesting thing you’ve read or seen lately?",
  "If you could have any superpower, what would it be and why?",
  "What’s a skill you’ve always wanted to learn but haven’t yet?",
  "If you could travel anywhere right now, where would you go?",
  "What’s your favorite way to relax after a long day?",
  "What’s the best advice you’ve ever gotten?",
  "If you could meet any historical figure, who would it be and why?",
  "What’s one thing on your bucket list that you really want to do?",
  "If you could only eat one meal for the rest of your life, what would it be?",
  "What’s a hobby or interest you love that others might not know about?"
];

function random() {
    return Math.floor(Math.random() * 9);
}

document.getElementById("btn")!.addEventListener("click", () => {
  const qns = list;
  const item = random();
  console.log("clicked", item)
  document.getElementById("qn")!.innerText = qns[item];
})