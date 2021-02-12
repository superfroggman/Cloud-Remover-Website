
function choose(button, disp, rec) {
  button.parentElement.style.display = "none";
  document.getElementById(disp).style.display = "inherit";

  if (rec){
    console.log("ha")
    document.getElementById("rStandardStart").style.display = "inherit";
    document.getElementById("rStandardAgain").style.display = "inherit";
  }
}