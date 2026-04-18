let setkey = localStorage.getItem("key");
let keyset = localstorage.getItem("set");
let key = "";
let e = document.getElementById("e");
let e1 = document.getElementById("e1");
if (keyset !== null && keyset !== false) {
  key = setkey;
}
if (keyset === null) {
  keyset === false;
}
function save() {
  localStorage.setItem("key", key);
  localStorage.setItem("set", true);
}
document.addEventListener("keydown", function(e) {
  if (e.key === key) {
    window.open("https://david66775.github.io/MyEditor", "_blank");
  }
});
