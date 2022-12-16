var icon = document.getElementById("switch");
let root = document.documentElement;
function changePage() {
  document.documentElement.classList.toggle("js-modify-page");
  if(icon.className!="light")
    {
        root.style.setProperty('--background-color', "rgb(252, 251, 231)")
        root.style.setProperty('--text-color', "rgb(23, 22, 22)")
        root.style.setProperty('--nav-color', "rgb(85, 85, 85)")
        root.style.setProperty('--nav-text-color', "rgb(255, 255, 255)")
        icon.src='../img/light.png';
        icon.className="light";
    }
    else if(icon.className=="light")
    {
        root.style.setProperty('--background-color', "rgb(252, 251, 231)")
        root.style.setProperty('--text-color', "rgb(23, 22, 22)")
        root.style.setProperty('--nav-color', "rgb(85, 85, 85)")
        root.style.setProperty('--nav-text-color', "rgb(255, 255, 255)")
        icon.src='../img/dark.png';
        icon.className="dark";
    }
}

icon.addEventListener("click", changePage);

