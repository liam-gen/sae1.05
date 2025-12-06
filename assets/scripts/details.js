const details = document.querySelector(".accordion");
const content = details.querySelector(".content");

details.addEventListener("toggle", () => {
  if (details.open) {
    content.style.height = content.scrollHeight + "px";
  } else {
    content.style.height = content.scrollHeight + "px"; 
    requestAnimationFrame(() => {
      content.style.height = "0";
    });
  }
});