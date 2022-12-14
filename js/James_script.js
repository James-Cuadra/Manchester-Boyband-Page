var icon = document.getElementById("switch");
function changePage() {
  document.documentElement.classList.toggle("js-modify-page");
  if(icon.className!="light")
    {
        icon.src='../img/light.png';
        icon.className="light";
    }
    else if(icon.className=="light")
    {
        icon.src='../img/dark.png';
        icon.className="dark";
    }
}

icon.addEventListener("click", changePage);

