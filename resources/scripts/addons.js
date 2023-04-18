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