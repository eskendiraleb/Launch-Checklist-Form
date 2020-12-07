// Write your JavaScript code here!
// Write your JavaScript code here!
window.addEventListener("load",function(){ 
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
     response.json().then(function(json){ 
      let missionTarget = document.getElementById("missionTarget");
      function planet(json)
      {
        return json[Math.floor(Math.random()*json.length)]; 
     } 
     missionTarget.innerHTML += ` 
     <div>
     <center>
      <h2>Mission Destination</h2>
      <ol>
      <li>Name: ${planet(json).name}</li> 
      <li>Diameter: ${planet(json).diameter}</li> 
      <li>Star: ${planet(json).star}</li> 
      <li>Distance: ${planet(json).distance}</li> 
     <li>Moons: ${planet(json).moons}</li>
      </ol>
 <img class="image" src="${planet(json).image}"></img> 
 </center>
 </div> 
 `
    });
  });
function crewName(name) {
 let letters = /^[a-zA-Z a-zA-Z]+$/;
 if(name.value.match(letters)) {
   return true;
  } 
  else { 
   return false; 
  }
  }
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     event.preventDefault();
      let pilotName= document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
  
  if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
  alert("All fields are required!");   
  (faultyItems.style.visibility != "visible");             
} else if(crewName(pilotName) === false) {  
   alert("You must enter a valid name!")
   (faultyItems.style.visibility != "visible");  
} else if(crewName(copilotName) === false) {
   alert("You must enter a valid name!")   
   (faultyItems.style.visibility != "visible"); 
} else if (isNaN(fuelLevel.value)) {
   alert("Please enter a valid number for fuel!");
   (faultyItems.style.visibility != "visible");  
} else if(isNaN(cargoMass.value)) {
   alert("Please enter a valid number for cargo mass!");   
   (faultyItems.style.visibility != "visible");  
} else if(fuelLevel.value < 10000){
       faultyItems.style.visibility = "visible";
       pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
       copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
       fuelStatus.innerHTML = "Fuel too low for launch";
       launchStatus.innerHTML = "Shuttle not ready for launch.";
       launchStatus.style.color = "red";
    } 
    else if(cargoMass.value > 10000) {
       faultyItems.style.visibility = "visible";
       pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
       copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
       cargoStatus.innerHTML = "Cargo mass too high to take off!";
       launchStatus.innerHTML = "Shuttle not ready for launch!";
       launchStatus.style.color = "red";
    }
     else  {
       faultyItems.style.visibility = "visible";
       pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
       copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
       launchStatus.style.color = "green";
       launchStatus.innerHTML = "Shuttle is ready for Launch!";
    }
   });
   });