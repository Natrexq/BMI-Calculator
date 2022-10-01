var func = (function () {
  let button = document.querySelector("#mnbut");
  const menuroll = document.getElementById("mnroll");
  const menu = document.getElementById("menu");
  const content = document.getElementById("conn");
  const hidehe = document.querySelector("#hidehe");

  const Roll = (size) => {
    if (size == 600) {
      if (menuroll.style.width == "19rem") {
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
          menuroll.style.width = "19rem";
        }, 400);
      }
    } else if (size == "def") {
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
    } else if (size == 1000) {
      alert("1k");
    }
  };
  const Check = () => {
    var wind = window.screen.width;
    if (wind < 610) {
      Roll(600);
    } else if (wind > 1100) {
      Roll("def");
    } else if (wind > 1000) {
    }
  };

  button.addEventListener("click", Check);
})();
