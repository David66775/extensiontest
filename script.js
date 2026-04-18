let on = false;
document.addEventListener("keydown", function(e) {
  if (e.key === "5" && event.ctrlKey) {
    if (on) {
      window.open("https://david66775.github.io/MyEditor", "_blank");
    }
  }
});
function toggle() {
  if (!on) {
    on = true;
  }
  else {
    on = false;
  }
}
