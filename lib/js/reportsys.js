var Func = (function () {
  const reportbutton = document.querySelector("#spreport");
  const infobutton = document.querySelector("#spinfo");

  const Msg = (x) => {
    function newmessage(msgv, ok) {
      this.message = msgv;
      this.yesno = ok;
    }

    function makeMsg() {
      var msgdiv = document.createElement("div");
      var msgh2 = document.createElement("h2");
      var msgexit = document.createElement("button");
      var divfortex = document.createElement("div");
      var divforbuttons = document.createElement("div");
      divforbuttons.className = "msbut";

      divfortex.className = "mstext";
      msgexit.className = "exit";
      msgexit.textContent = "X";
      msgh2.className = "txmessage";
      msgh2.textContent = varmsg.message;
      msgdiv.className = "message";
      msgdiv.appendChild(msgexit);
      divfortex.appendChild(msgh2);
      msgdiv.appendChild(divforbuttons);
      msgdiv.appendChild(divfortex);
      document.body.appendChild(msgdiv);

      if (varmsg.yesno) {
        var okbut = document.createElement("button");
        okbut.className = "butt";
        okbut.textContent = "Ok";
        divforbuttons.appendChild(okbut);

        okbut.addEventListener("click", function () {
          document.body.removeChild(msgdiv);
        });
      } else {
      }

      msgexit.addEventListener("click", function () {
        document.body.removeChild(msgdiv);
      });
    }
    if (x == "report") {
      var varmsg = new newmessage("This is report", false);
      makeMsg();
    } else if (x == "info") {
      var varmsg = new newmessage(
        "Information: Welcome in BMI Calculator pring data about you Last Update: 19/09/22 - Created by Natrexq",
        true
      );
      makeMsg();
    }

    var msgdiv = document.createElement("div");
    var msgh2 = document.createElement("h2");
    var msgexit = document.createElement("button");
    msgexit.className = "exit";
    msgexit.textContent = "X";
    msgh2.className = "txmessage";
    msgh2.textContent = infomsg.message;
    msgdiv.className = "message";
    msgdiv.appendChild(msgexit);
    msgdiv.appendChild(msgh2);
    document.body.appendChild(msgdiv);
  };
  reportbutton.addEventListener("click", function () {
    Msg("report");
  });
  infobutton.addEventListener("click", function () {
    Msg("info");
  });
})();
