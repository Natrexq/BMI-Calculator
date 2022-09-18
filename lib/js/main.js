function Menu() {
  let button = document.querySelector("#mnbut");
  const menuroll = document.getElementById("mnroll");
  const menu = document.getElementById("menu");
  const content = document.getElementById("conn");
  const hidehe = document.querySelector("#hidehe");

  const Hide = (x) => {
    if (x == 1) {
      if (menuroll.style.width == "22rem") {
        menuroll.style.transition = "width 400ms, opacity 400ms";
        setTimeout(() => {
          menuroll.style.width = "3.5rem";
          menuroll.style.opacity = "0";
          setTimeout(() => {
            menuroll.style.display = "none";
          }, 150);
        }, 410);
      } else {
        menuroll.style.display = "flex";
        menuroll.style.transition = "width 410ms";
        setTimeout(() => {
          menuroll.style.opacity = "1";
          menuroll.style.width = "22rem";
        }, 400);
      }
    } else {
    }
  };
  button.addEventListener("click", function () {
    Hide(1);
  });
  hidehe.addEventListener("click", function () {
    Hide(2);
  });
}
window.onload(Menu());
