function injectHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            console.log('Header content:', data); // Log response data
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching header:', error));
}

function injectFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            console.log('Footer content:', data); // Log response data
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching footer:', error));
}

// Call the functions to inject the header and footer
injectHeader();
injectFooter();



document.addEventListener('DOMContentLoaded', function() {
    // Get all heart icons
    const heartIcons = document.querySelectorAll('.heart-icon');

    // Add event listener to each heart icon
    heartIcons.forEach(function(heartIcon) {
        heartIcon.addEventListener('click', function() {
            // Toggle the class to change the color of the heart icon
            heartIcon.classList.toggle('liked');
        });
    });
});


    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    });




