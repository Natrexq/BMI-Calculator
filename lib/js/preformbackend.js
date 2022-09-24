function FormSecure() {
  const form = document.getElementById("conform");
  const email = document.getElementById("email");
  const text = document.getElementById("txarea");
  const emlbl = document.getElementById("emlbl");
  const txlbl = document.getElementById("txlbl");
  const msg = document.getElementById("msg");
  var txval = text.value;

  form.addEventListener("submit", (event) => {
    var antixss = ["<", ">"];

    if (
      text.value.includes("<") |
      text.value.includes(">") |
      text.value.includes("onclick") |
      text.value.includes("src") |
      text.value.includes("prompt")
    ) {
      msg.style.opacity = "100%";
      emlbl.style.display = "";
      emlbl.textContent = "AntiXss: You can't do that";
      setTimeout(() => {
        msg.style.opacity = "0%";
        setTimeout(() => {
          emlbl.style.display = "none";
          txlbl.style.display = "none";
        }, 500);
      }, 2000);
      event.preventDefault();
    } else {
      if (email.value == "") {
        msg.style.opacity = "100%";
        emlbl.style.display = "";
        emlbl.textContent = "E-mail box can't be empty!";
        setTimeout(() => {
          msg.style.opacity = "0%";
          setTimeout(() => {
            emlbl.style.display = "none";
            txlbl.style.display = "none";
          }, 500);
        }, 2000);
        event.preventDefault();
      } else if (text.value == "") {
        msg.style.opacity = "100%";
        txlbl.style.display = "";
        txlbl.textContent = "First type your message!";
        setTimeout(() => {
          msg.style.opacity = "0%";
          setTimeout(() => {
            txlbl.style.display = "none";
            emlbl.style.display = "none";
          }, 500);
        }, 2000);
        event.preventDefault();
      } else {
      }
    }
  });
}
window.onload(FormSecure());
