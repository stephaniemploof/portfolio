function submitForm() {
    // Basic form validation
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (firstName === "" || lastName === "" || email === "" || message === "") {
        alert("All fields are required");
        return;
    }
}