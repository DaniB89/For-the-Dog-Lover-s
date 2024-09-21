function displayCards() {
    const CARDS = document.getElementById("petCards");
    CARDS.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        CARDS.innerHTML += `
        <div class="pet">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
        </div>
        `;
    }
}

function displayRows() {
    // Get the tbody
    const tableBody = document.getElementById("petRows");
    // Clear the tbody
    let rows = "";

    // Loop through the pets array
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        // Create the template row
        rows += `
            <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td><button class="btn btn-sm btn-danger" onclick="deletePet(${i})">Delete</button></td>
            </tr>
        `;
    }

    tableBody.innerHTML = rows;
    document.getElementById("totalPets").innerHTML = pets.length;
}

// Replace displayCards() with displayRows() in register.js
