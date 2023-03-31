// const url = "https://pathreeapi.herokuapp.com/api/songs";
const url = "https://localhost:7243/api/cars";
let cars = [];

let renderCars = function () {
  let html = `<div class="row">`;
  cars.forEach(function (car) {
    if (car.make.toLowerCase().includes(document.getElementById("searchText").value.toLowerCase()) || car.model.toLowerCase().includes(document.getElementById("searchText").value.toLowerCase()))
      {
        //   if (song.deleted != true) {
            // var favorited = "";
            // if (song.favorited == true) {
            //   favorited = "💚";
            // } else {
            //   favorited = "♡";
            // }
            html += `
                    <div class="card m-4" style="width: 18rem;">
                            <div class="card-body">
                                <img src="${car.imageLink}" class="card-img-top" alt="not damn working">
                                <h5 class="card-title"> ${car.make} ${car.model} </h5>
                                <p id="myBtn" onclick="editModalOpen('${car.id}')"class="btn btn-outline-success">📋</p>
                            </div>
                        </div>
                    `;
          }
    //   }else{
    //     return
    //   }
    
  });
  html += "</div>";
  document.getElementById("cards").innerHTML = html;
};
document.querySelector("#searchText").addEventListener("input", function (e) {
  console.log(e.target.value);
  renderCars()
});

function editModalOpen(id) {
  document.getElementById("editModal").style.display = "block";
  document
    .getElementById("editButtonSubmit")
    .setAttribute("onclick", `editCar(${id})`);
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

document.querySelector("#new-songs").addEventListener("submit", function (e) {
  e.preventDefault(); //prevents page refresh
  addModalOpen()
});

async function deleteSong(songToFind) {
  let song = 0;

  for (var i = 0; i < songs.length; i++) {
    if (songs[i].songId == songToFind) {
      song = {
        songId: songs[i].songId,
        title: songs[i].title,
        artist: songs[i].artist,
        dateAdded: songs[i].dateAdded,
        favorited: songs[i].favorited,
        deleted: !songs[i].deleted,
      };
    }
  }

  await fetch(`${url}/${song.songId}`, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify(song),
  });

  handleOnLoad();
}

async function editSong(localCarId) {
  let car = 0;
  for (var i = 0; i < cars.length; i++) {
    if (cars[i].id == localCarId) {
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


  document.getElementById("myModal").style.display = "none";
  handleOnLoad();
}

async function favoriteSong(songToFind) {
  let song = 0;

  for (var i = 0; i < songs.length; i++) {
    if (songs[i].songId == songToFind) {
      song = {
        songId: songs[i].songId,
        title: songs[i].title,
        artist: songs[i].artist,
        dateAdded: songs[i].dateAdded,
        favorited: !songs[i].favorited,
        deleted: songs[i].deleted,
      };
    }
  }

  await fetch(`${url}/${song.songId}`, {
    method: "PUT",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
    body: JSON.stringify(song),
  });

  handleOnLoad();
}

// function blankAdd() {
//   document.getElementById("title").value = "";
//   document.getElementById("artist").value = "";
// }

// function blankEdit() {
//   document.getElementById("editTitle").value = "";
//   document.getElementById("editArtist").value = "";
// }