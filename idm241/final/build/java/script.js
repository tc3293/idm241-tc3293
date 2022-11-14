function createConfirm(title,content, button1, button2){
  var confirmBody = document.createElement("div");
  confirmBody.className = "confirmBody";
  confirmBody.setAttribute("id", "confirmBody");
      var confirmContainer = document.createElement("div");
      confirmContainer.className = "confirmContainer";
          var confirmInner = document.createElement("div");
          confirmInner.className = "confirmInner";
              var cfTop = document.createElement("div");
              cfTop.className = "cfTop";
                  var cfclose = document.createElement("div");
                  cfclose.className = "cfClose material-icons";
                  cfclose.innerHTML = "";
                  var cfTitle = document.createElement("div");
                  cfTitle.className = "cfTitle";
                  cfTitle.innerHTML = title;
              var cfContent = document.createElement("div");
              cfContent.className = "cfContent";
              cfContent.innerHTML = content;
              var cfBottom = document.createElement("div");
              cfBottom.className="cfBottom";
                  var cfSubmitContainer = document.createElement("div");
                  cfSubmitContainer.className = "cfSubmitContainer";
                      var cfCancel = document.createElement("div");
                      cfCancel.className = "cfSubmit_bt cfCancel";
                      cfCancel.innerHTML = button1;
                      var cfYes = document.createElement("div");
                      cfYes.className = "cfSubmit_bt cfYes";
                      cfYes.innerHTML = button2;

  confirmBody.appendChild(confirmContainer);
      confirmContainer.appendChild(confirmInner);
          confirmInner.appendChild(cfTop);
              cfTop.appendChild(cfclose);
              cfTop.appendChild(cfTitle);
          confirmInner.appendChild(cfContent);
          confirmInner.appendChild(cfBottom);
              cfBottom.appendChild(cfSubmitContainer);
                  cfSubmitContainer.appendChild(cfCancel);
                  cfSubmitContainer.appendChild(cfYes);


  document.body.appendChild(confirmBody);

  var elements = [cfclose, cfCancel, cfYes, confirmBody, confirmContainer];
  return elements;
}

function removeConfirm(e){

  e.parentNode.removeChild(e);
}


function confirmThis(title,content,button1Text, button2Text, yesCallback,noCallback){
  var elements = createConfirm(title,content, button1Text, button2Text);
  var close = elements[0];
  var cancel = elements[1];
  var yes = elements[2];
  var cfbody = elements[3];
  var cfContainer = elements[4];
  cfContainer.style.top = "-200px";
  setTimeout(function(){ cfContainer.style.top = "100px"; },100);
  
  
  close.addEventListener("click", function(e){
      cfContainer.style.top = "-200px";
      setTimeout(function(){ removeConfirm(cfbody);},200);
      noCallback();
  });

  window.onclick = function(event) {
      if (event.target == cfbody) {
          cfbody.style.backgroundColor = "rgb(192, 192, 192, 0.6)";
          setTimeout(function(){ cfbody.style.backgroundColor = "transparent"; },100);
          
      }
  }

  yes.addEventListener("click", function(){
      cfContainer.style.top = "-200px";
      setTimeout(function(){ removeConfirm(cfbody);},200);
      yesCallback();
  });

  cancel.addEventListener("click", function(){
      cfContainer.style.top = "-200px";
      setTimeout(function(){ removeConfirm(cfbody);},200);
      noCallback();
  });

}

//First function: Yes, Second: No


function runFinal(){
  var link = "https://junchenn.com/zodiac/index.html"; 
 confirmThis("You're leaving this site", "Are you sure you want to leave this site?","No", "Yes",function(){
    //Continue code here
   window.open(link, '_blank');

},function(){
    //Cancel code here
});
    }