// Constructor for Service
function Service(description, price) {
    this.description = description;
    this.price = price;
}

function isValidService(service) {
    let validDescription = true;
    let validPrice = true;

    // Validate description
    if (service.description.trim() === "") {
        validDescription = false;
        $("#descriptionValidationMsg").css("color","red").show();
    } else {
        $("#descriptionValidationMsg").hide();
    }

    // Validate price
    if (service.price.trim() === "") {
        validPrice = false;
        $("#priceValidationMsg").css("color","red").show();
    } else {
        $("#priceValidationMsg").hide();
    }

    return validDescription && validPrice;
}

// Remember to add jQuery to the HTML
function register() {
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();

    // Create the new Service object
    let newService = new Service(inputDescription, inputPrice);

    // Validate and save
    if (isValidService(newService)) {
        save(newService); // Assuming save() function is defined in storeManager
        $("input").val(""); // Clear the input fields
    }
}

function init() {
    $("#descriptionValidationMsg").hide();
    $("#priceValidationMsg").hide();
}

window.onload = init;
