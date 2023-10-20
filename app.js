// Basic form validation
let form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let message = document.getElementById("message").value;

    let mailToLink = `mailto:stephaniemploof@gmail.com?subject=Job Opportunity - ${firstName} ${lastName}&body=${message}`;
    window.location.href = mailToLink;

});

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