document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Drag-and-drop functionality
    const draggableElement = document.getElementById('draggable');
    const dropzone = document.getElementById('dropzone');

    draggableElement.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', 'Drag me!');
    });

    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        dropzone.innerText = data;
    });

     // Scroll to top button
    const scrollButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Toggle Dark Mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    // Show/Hide Elements
    const toggleElementsButton = document.getElementById('toggleElements');
    const elementsToToggle = document.querySelectorAll('.toggleable-element');

    toggleElementsButton.addEventListener('click', function () {
        elementsToToggle.forEach(element => {
            element.classList.toggle('hidden');
        });
    });

    // Countdown Timer
    const countdownDisplay = document.getElementById('countdownTimer');

    function updateCountdown() {
        const eventDate = new Date('2024-12-31T23:59:59');
        const currentDate = new Date();
        const timeDifference = eventDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});
