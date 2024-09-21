
let pets = []; // Empty array

// Constructor for Pet
function Pet(name, age, gender, breed, service) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

// Get the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputService = document.getElementById("txtService");
let inputBreed = document.getElementById("txtBreed");

function isValid(pet) {
    return pet.name.trim() !== ""; // Check if name is not empty
}

function register() {
    let inputGender = document.querySelector('input[name="gender"]:checked');

    // Check if a gender is selected
    if (!inputGender) {
        alert("Please select a gender.");
        return;
    }

    // Create a new pet object
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);

    if (isValid(newPet)) {
        pets.push(newPet); // Add new pet to the array
        console.log(newPet); // Log the new pet
        displayRows(); // Display updated rows
    } else {
        alert("Fill in the information");
    }
}

function deletePet(petID) {
    console.log("Deleting the pet");
    pets.splice(petID, 1); // Remove the pet from the array
    displayRows(); // Refresh the display
}

function search() {
    let ss = document.getElementById("txtSearch").value; // Corrected the ID to match the search input
    let foundPet = null;

    for (let i = 0; i < pets.length; i++) {
        if (pets[i].name.toLowerCase() === ss.toLowerCase()) {
            foundPet = pets[i];
            document.getElementById(i).classList.add("highlight"); // Highlight found pet
            break;
        }
    }

    if (!foundPet) {
        displayRows(); // Refresh the display if no match is found
    }
}

function getServices() {
    // Fetch the list of services from local storage or another source
    let services = read(); // Assuming read() is defined elsewhere
    let options = "";

    // Create option elements for each service
    for (let service of services) {
        options += `<option value='${service.description}'>${service.description}</option>`;
    }

    document.getElementById("txtService").innerHTML += options; // Append the options to the select
}

function init() {
    console.log("Init function");
    let apache = new Pet("Apache", 8, "Male", "Pitbull", "grooming");
    let deaja = new Pet("Deaja", 12, "Male", "Pitbull", "vaccines");
    let smokey = new Pet("Smokey", 11, "Male", "Bull Mastiff", "grooming" )
    pets.push(apache, deaja, smokey); // Push sample pets into the array
    displayRows(); // Display the initial rows
    getServices(); // Load services into the select
}

window.onload = init; // Initialize on page load
