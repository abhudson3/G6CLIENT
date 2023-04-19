const url = "https://groupsixapi.herokuapp.com/api/cars";
// const url = "https://localhost:7243/api/cars";
let cars = []
let carPrice
let transferredCarId = localStorage.getItem("transferCarId") -1

function handleOnLoad() {
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      cars = data;
      carPrice = Number(cars[transferredCarId].msrp.replace(/[^0-9\.]+/g, "")); 
      renderCar()
      })
}

let renderCar = function () {
    let filteredRange = cars[transferredCarId].mpge.substr(0, 3);

    filteredRange = filteredRange.replace(/\D/g, ''); 
    let html = `<div class="row">`;
              html += `
                      <div class="card m-4" style="width: 500px; height: 450px">
                              <div class="card-body" style="margin: auto">
                
                                  <img src="${cars[transferredCarId].imageLink}" class="card-img-top" alt="not damn working" style="width: 340px; height: 200px; object-fit: cover; margin: auto">
                                  <br>
                                  <br>
                                  <h5 class="card-title"> ${cars[transferredCarId].make} ${cars[transferredCarId].model} </h5>
                                  <br>
                                  <h7 class="card-text">${filteredRange} Mile Range,  ${cars[transferredCarId].drivetrain},  ${cars[transferredCarId].motorKw},  ${cars[transferredCarId].seats} seats</h7>
                                  <br>
                                  <button id="myBtn" onclick="editModalOpen('${transferredCarId}')"class="btn btn-outline-success" style="height: 40px; width: 55px;float: right">👓</button>
                                  <br>
                                  <br>
                                  <h5 id="priceLabel" class="card-text" style="display: inline">Estimated Price : $</h5>
                                  <h5 id="price" class="card-text">${carPrice}</h5> 
                                  <br>
                              </div>
                          </div>
                      `
    html += "</div>";
    document.getElementById("addOnCar").innerHTML = html;
};

function editModalOpen(transferredCarId) {
  document.getElementById("editModal").style.display = "block";


      document.getElementById("editMake").value = cars[transferredCarId].make;
      document.getElementById("editModel").value = cars[transferredCarId].model;
      document.getElementById("editVehicleType").value = cars[transferredCarId].vehicleType;
      document.getElementById("editMotorKw").value = cars[transferredCarId].motorKw;
      document.getElementById("editDrivetrain").value = cars[transferredCarId].drivetrain;
      document.getElementById("editMpge").value = cars[transferredCarId].mpge;
      document.getElementById("editVehicleRange").value = cars[transferredCarId].vehicleRange;
      document.getElementById("editChargeRateL2Dc").value = cars[transferredCarId].chargeRateL2Dc;
      document.getElementById("editChargeRateMphL1L2Dc").value = cars[transferredCarId].chargeRateMphL1L2Dc;
      document.getElementById("editBatteryCapacity").value = cars[transferredCarId].batteryCapacity;
      document.getElementById("editSeats").value = cars[transferredCarId].seats;
      document.getElementById("editMsrp").value = cars[transferredCarId].msrp;

}

function editModalClose() {
  document.getElementById("editModal").style.display = "none";
}


window.onclick = function (event) {
  if (event.target == document.getElementById("addModal") || event.target == document.getElementById("editModal")) {
    document.getElementById("editModal").style.display = "none";
  }
};
function makeq(){
  alert("Make refers to the manufacturer of the vehicle. For example, Tesla, Ford, or Nissan.")
}
function modelq(){
  alert("Model refers to the specific model of the vehicle. For example, Model 3, F-150, or Leaf.")
}
function vehicletypeq(){
  alert("Vehicle Type refers to the type of vehicle. For example, Sedan, Truck, or SUV.")
}
function motorkwq(){
  alert("Motor Kw refers to the power of the motor in kilowatts. For example, 100, 200, or 300 KW.")
}
function drivetrainq(){
  alert("Drivetrain refers to the type of drive the vehicle has. For example, RWD, AWD, or FWD.")
}
function mpgeq(){
  alert("MPGe refers to the miles per gallon equivalent of the vehicle. For example, 100, 200, or 300 miles per gallon.")
}
function vehiclerangeq(){
  alert("Vehicle Range refers to the distance the vehicle can travel on a full charge. For example, 100, 200, or 300 miles.")
}
function chargeratel2dcq(){
  alert("Charge Rate L2 DC refers to the rate at which the vehicle can charge at a Level 2 or DC charger. For example, 100, 200, or 300.")
}
function chargeratemphq(){
  alert("Charge Rate Mph L1 L2 DC refers to the rate at which the vehicle can charge, in Miles/hour, at a Level 1, Level 2, and DC charger. For example, 100, 200, or 300.")
}
function batterycapacityq(){
  alert("Battery Capacity refers to the amount of energy the battery can store. This is usually in a KWh, or Kilowatt hours For example, 100, 200, or 300 KWh.")
}
function seatsq(){
  alert("Seats refers to the number of seats in the vehicle. For example, most vehicles in this list have 5 seats.")
}
function msrpq(){
  alert("MSRP refers to the manufacturer's suggested retail price of the vehicle. For example, 100, 200, or 300.")
}


document.querySelector("#leatherCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 5000)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 5000)
  }
});

document.querySelector("#soundSystemCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 4000)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 4000)
  }
});

document.querySelector("#batteryCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 3000)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 3000)
  }
});

document.querySelector("#carplayCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 2000)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 2000)
  }
});
document.querySelector("#wheelCheckbox").addEventListener("change", function (e) {
  if(e.target.checked){
    document.getElementById("price").innerHTML = (carPrice += 1500)
  }else{
    document.getElementById("price").innerHTML = (carPrice -= 1500)
  }
});