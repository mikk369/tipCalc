//Calculate Tip
function calculateTip() {
  let billAmt = document.getElementsByClassName("billamt").value;
  let billProt = document.getElementsByClassName("billprot").value;
  let billSpl = document.getElementsByClassName("billspl").value;

  //validate input
  if (billAmt === "" || billProt === "") {
    alert("Please enter values");
    return;
  }

  //Check to see if this input is empty or less than or equal to 1
  if (billSpl === "" || billSpl <= 1) {
    billSpl = 1;
    document.getElementsByClassName("each").style.display = "none";
  } else {
    document.getElementsByClassName("each").style.display = "block";
  }

  //Calculate tip
  var total = (billAmt * billProt) / billSpl;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

  //click to call function
  document.getElementById("calculate").onclick = function () {
    calculateTip();
  };
}
