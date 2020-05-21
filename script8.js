
  let choice = prompt("which program? [1-7]");
  if (choice <1 || choice >7){
    alert("BAD CHOICE ( must be between 1 and 7")
    console.log("BAD CHOICE ( must be between 1 and 7")
  }

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "script"+choice+".js";
  document.getElementsByTagName("head")[0].appendChild(script);
  