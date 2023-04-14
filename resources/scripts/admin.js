// const url = "https://pathreeapi.herokuapp.com/api/cars";
const url = "https://localhost:7243/api/cars";
let cars = [];

let renderCars = function () {
  let html = `<div class="row">`;
  cars.forEach(function (car) {
    if (car.make.toLowerCase().includes(document.getElementById("searchText").value.toLowerCase()) || car.model.toLowerCase().includes(document.getElementById("searchText").value.toLowerCase()))
      {
            var deleted = "";
            if (car.deleted == true) {
              deleted = "🚫";
            } else {
              deleted = "💚";
            }
            html += `
                    <div class="card m-4" style="width: 18rem;">
                            <div class="card-body">
                                <img src="${car.imageLink}" class="card-img-top" alt="not working" style="width: 170px; height: 100px; object-fit: cover;">
                                <h5 class="card-title"> ${car.make} ${car.model} </h5>
                                <p id="myBtn" onclick="editModalOpen('${car.id}')"class="btn btn-outline-success">📋</p>
                                <p id="softDelButton" onclick="softDelete('${car.id}')"class="btn btn-outline-success">🗑️</p>
                                <p id="deletedIndicator" "class="btn btn-outline-success">Deleted : ${deleted}</p>
                            </div>
                        </div>
                    `;
          }

  });
  html += "</div>";
  document.getElementById("cards").innerHTML = html;
};
document.querySelector("#searchText").addEventListener("input", function (e) {
  renderCars()
});

function editModalOpen(id) {
  document.getElementById("editModal").style.display = "block";
  document
    .getElementById("editButtonSubmit")
    .setAttribute("onclick", `editCar(${id})`);
  for (var i = 0; i < cars.length; i++) {
    if (cars[i].id == id) {
      document.getElementById("editImageLink").value = cars[i].imageLink;
      document.getElementById("editMake").value = cars[i].make;
      document.getElementById("editModel").value = cars[i].model;
      document.getElementById("editVehicleType").value = cars[i].vehicleType;
      document.getElementById("editMotorKw").value = cars[i].motorKw;
      document.getElementById("editDrivetrain").value = cars[i].drivetrain;
      document.getElementById("editMpge").value = cars[i].mpge;
      document.getElementById("editVehicleRange").value = cars[i].vehicleRange;
      document.getElementById("editChargeRateL2Dc").value = cars[i].chargeRateL2Dc;
      document.getElementById("editChargeRateMphL1L2Dc").value = cars[i].chargeRateMphL1L2Dc;
      document.getElementById("editBatteryCapacity").value = cars[i].batteryCapacity;
      document.getElementById("editSeats").value = cars[i].seats;
      document.getElementById("editMsrp").value = cars[i].msrp;
    }
  }
}

function editModalClose() {
  document.getElementById("editModal").style.display = "none";
}
function addModalOpen() {
  document.getElementById("addModal").style.display = "block";
}

function addModalClose() {
  document.getElementById("addModal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("addModal") || event.target == document.getElementById("editModal")) {
    document.getElementById("addModal").style.display = "none";
    document.getElementById("editModal").style.display = "none";
  }
};


function handleOnLoad() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      cars = data;
      renderCars();
    });
}



async function addCar() {

  let car = 0;
  car = {
    imageLink : document.getElementById("imageLink").value,
    make: document.getElementById("make").value,
    model: document.getElementById("model").value,
    vehicleType : document.getElementById("vehicleType").value,
    motorKw : document.getElementById("motorKw").value,
    drivetrain : document.getElementById("drivetrain").value,
    mpge : document.getElementById("mpge").value,
    vehicleRange : document.getElementById("vehicleRange").value,
    chargeRateL2Dc : document.getElementById("chargeRateL2Dc").value,
    chargeRateMphL1L2Dc : document.getElementById("chargeRateMphL1L2Dc").value,
    batteryCapacity : document.getElementById("batteryCapacity").value,
    seats : document.getElementById("seats").value,
    msrp : document.getElementById("msrp").value,
    deleted : false
  };
  await fetch(url, {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify(car),
  });
  // blankAdd();
  handleOnLoad();
  addModalClose();
}

document.querySelector("#new-cars").addEventListener("submit", function (e) {
  e.preventDefault(); //prevents page refresh
  addModalOpen()
});

async function deleteSong(songToFind) {
  let car = 0;

  for (var i = 0; i < cars.length; i++) {
    if (cars[i].songId == songToFind) {
      car = {
        songId: cars[i].songId,
        title: cars[i].title,
        artist: cars[i].artist,
        dateAdded: cars[i].dateAdded,
        favorited: cars[i].favorited,
        deleted: !cars[i].deleted,
      };
    }
  }

  await fetch(`${url}/${car.songId}`, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify(car),
  });

  handleOnLoad();
}

async function editCar(localCarId) {
  let car = 0;


  for (var i = 0; i < cars.length; i++) {
    if (cars[i].id == localCarId) {
      //make it so that when the user submits the edit, there can be blank fields
      
      car = {
        imageLink : document.getElementById("editImageLink").value,
        make: document.getElementById("editMake").value,
        model: document.getElementById("editModel").value,
        vehicleType : document.getElementById("editVehicleType").value,
        motorKw : document.getElementById("editMotorKw").value,
        drivetrain : document.getElementById("editDrivetrain").value,
        mpge : document.getElementById("editMpge").value,
        vehicleRange : document.getElementById("editVehicleRange").value,
        chargeRateL2Dc : document.getElementById("editChargeRateL2Dc").value,
        chargeRateMphL1L2Dc : document.getElementById("editChargeRateMphL1L2Dc").value,
        batteryCapacity : document.getElementById("editBatteryCapacity").value,
        seats : document.getElementById("editSeats").value,
        msrp : document.getElementById("editMsrp").value
      };
    }
  }


  await fetch(`${url}/${localCarId}`, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify(car),
  });


  document.getElementById("editModal").style.display = "none";
  handleOnLoad();
}
async function softDelete(localCarId) {
  let car = 0;
  for (var i = 0; i < cars.length; i++) {
    if (cars[i].id == localCarId) {
      
      car = {
        imageLink : cars[i].imageLink,
        make: cars[i].make,
        model: cars[i].model,
        vehicleType : cars[i].vehicleType,
        motorKw : cars[i].motorKw,
        drivetrain : cars[i].drivetrain,
        mpge : cars[i].mpge,
        vehicleRange : cars[i].vehicleRange,
        chargeRateL2Dc : cars[i].chargeRateL2Dc,
        chargeRateMphL1L2Dc : cars[i].chargeRateMphL1L2Dc,
        batteryCapacity : cars[i].batteryCapacity,
        seats : cars[i].seats,
        msrp : cars[i].msrp,
        deleted : !cars[i].deleted
      };
    }
  }


  await fetch(`${url}/${localCarId}`, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify(car),
  });

  handleOnLoad();
}

