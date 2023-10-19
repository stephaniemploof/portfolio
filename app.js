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


// Side Menu
let hamburger = document.getElementById('menu-trigger');
let sideMenu = document.getElementById('side-menu');
let closeIcon = document.getElementById('close-icon');

hamburger.addEventListener('click', function () {
    sideMenu.classList.toggle('show-menu');
});

closeIcon.addEventListener('click', function () {
    sideMenu.classList.remove('show-menu');
});