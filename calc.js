calculate.addEventListener("click", () => {
  // let calculate = document.querySelector("#calculate");
  let billamt = document.querySelector(".billamt").value;
  let billprot = document.querySelector("#billprot").value;
  let billspl = document.querySelector(".billspl").value;
  let tip = document.querySelector("tip").value;

  //validate
  if (billamt === "" || billprot == 0) {
    alert("Please enter values");
    return;
  }
  //calculate
  let total = (billamt * billprot) / billspl;
  total = total.toFixed(2);
  //if there is more than 1 to split then show otherwise dont
  if (billspl === "" || billspl <= 1) {
    billspl = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

  console.log(total);
  //TODO:Hide the tip amount on load
});
