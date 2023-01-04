  const message = document.getElementById("message");
  const messageContent = document.querySelectorAll(".message-content")[0];
  eventList();
  function eventList() {
    message = document.addEventListener("keypress", gonder);
  }
  function gonder(e) {
    if(e.key == 'Enter'){
      const messageValue = message.value;
      if(messageValue == null || messageValue == ""){
        alert("boş");
      }else{
        const divMain = document.createElement("div");
        divMain.className = "message me";
        const divContent = document.createElement("div");
        divContent.className = "bubble";
        divContent.textContent = messageValue;
        const divTime = document.createElement("div");
        divTime.className = "time";
        divTime.textContent = "saat" + new Date().getHours() + ":" + new Date().getMinutes();
        divMain.appendChild(divContent);
        divMain.appendChild(divTime);
        messageContent.appendChild(divMain);
        message.value = "";
      }
    }
  }
  