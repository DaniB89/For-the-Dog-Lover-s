function save(service) {
    let serviceList = read(); // Reading the localStorage; returning the list or an empty array
    serviceList.push(service); // Add the new service to the list
    let val = JSON.stringify(serviceList); // Convert the list to a JSON string
    console.log(val);
    localStorage.setItem("services", val); // Save to localStorage
}

function read() {
    let data = localStorage.getItem("services"); // Get the data from localStorage
    if (!data) { // Check if data is null or empty
        return []; // Return an empty array if no data found
    } else {
        let list = JSON.parse(data); // Convert the JSON string back to an array
        return list; // Return the parsed list
    }
}
