function currentDate() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth() + 1;
  var dd = today.getDate();
  
  if (mm < 10) { mm = "0" + mm; }
  if (dd < 10) { dd = "0" + dd; }
  
  return yyyy + "-" + mm + "-" + dd;
}

function now() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth() + 1;
  var dd = today.getDate();
  var hh = today.getHours();
  var ii = today.getMinutes();
  var ss = today.getSeconds();
  
  if (mm < 10) { mm = "0" + mm; }
  if (dd < 10) { dd = "0" + dd; }
  if (hh < 10) { hh = "0" + hh; }
  if (ii < 10) { ii = "0" + ii; }
  if (ss < 10) { ss = "0" + ss; }
  
  var now = yyyy + "-" + mm + "-" + dd + " " + hh + ":" + ii + ":" + ss;
  
  return now;
}

function testNow() {
  actual = now();
  Logger.log(actual);
}