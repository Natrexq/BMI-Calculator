/*function ReportG() {
  const message = document.getElementById("msbox");
  const reportb = document.querySelector("#spreport");
  const exitb = document.querySelector("#exit");
  const spinfo = document.querySelector("#spinfo");

  const RMessage = (u) => {
    var th1;
    var th2;
    var option1;
    var option2;
    th1 = document.querySelector("#th1");
    th2 = document.querySelector("#th2");
    option1 = document.getElementById("option1");
    option2 = document.getElementById("option2");

    if (message.style.right == "") {
      message.style.right = "0rem";
      message.style.opacity = "1";
    } else if (message.style.right == "-200rem") {
      message.style.right = "0rem";
      message.style.opacity = "1";
    } else {
      message.style.right = "-200rem";
      message.style.opacity = "0";
    }
 

 

    const forbuts = (x) => {

      if (x == 0) {
      } else if (x == 1) {
        message.style.right = "-200rem";
        message.style.opacity = "0";
      } else if (x == 2) {
        message.style.right = "-200rem";
        message.style.opacity = "0";
      } else if (x == 3) {
        message.style.right = "-200rem";
        message.style.opacity = "0";
      }
    };
    var u;

    switch (u) {
      case 0:
        u == "0";

        break;
      case 1:
        u == "1";
        th1.textContent = "Do you really want to report the problem ?";
        option2.style.display = "";
        option2.textContent = "No, I quit";
        option2.addEventListener("click", function () {
          forbuts(1);
        });
        option1.addEventListener("click", function () {
          forbuts(3);
        });
        break;
      case 2:
        u == "2";
        th1.textContent = "...";
        option1.style.display = "none";
        option2.style.display = "none";
        break;
      case 3:
        u == "3";
        th1.textContent =
          "Information: Welcome in BMI Calculator project, Now, you can count your body mass index without saveing data about you Last Update: 19/09/22 - Created by Natrexq";
        option2.style.display = "none";
        option1.textContent = "Ok";
        option1.style.display = "";
        option2.addEventListener("click", function () {
          forbuts(3);
        });
        break;
    }
  };
  exitb.addEventListener("click", function () {
    RMessage(0);
  });
  reportb.addEventListener("click", function () {
    RMessage(1);
  });
  spinfo.addEventListener("click", function () {
    RMessage(3);
  });
}
window.onload(ReportG());

*/
/*
<div class="message" id="msbox">
<button type="submit" id="exit">X</button>
<div class="mstext">
    <h2 class="txmessage" id="th1">
    </h2>
    <h2 class="txmessage" id="th2"></h2>
</div>
<div class="msbut">
    <button class="butt" id="option1">Yes</button>
    <button class="butt" id="option2">No</button>
</div>
</div>
*/