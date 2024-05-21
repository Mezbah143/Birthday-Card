document.addEventListener('DOMContentLoaded', () => {
    // Change Font Style on Click
    const title = document.getElementById('title');
    const fontStyleToggle = document.querySelector('.font-style-toggle');
    fontStyleToggle.addEventListener('click', () => {
        title.style.fontFamily = title.style.fontFamily === 'Arial, sans-serif' ? 'Courier New, monospace' : 'Arial, sans-serif';
    });

    // Image Slider
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let currentImage = 0;
    const slide = document.getElementById('slide');
    document.getElementById('prev').addEventListener('click', () => {
        currentImage = (currentImage - 1 + images.length) % images.length;
        slide.src = images[currentImage];
    });
    document.getElementById('next').addEventListener('click', () => {
        currentImage = (currentImage + 1) % images.length;
        slide.src = images[currentImage];
    });

    // Dynamic Background Color
    const colors = ['#f8b400', '#3498db', '#e74c3c', '#2ecc71'];
    setInterval(() => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 5000);

    // CSS Animations for Elements
    title.classList.add('animated-title');
    // Add this CSS animation in styles.css
    /*
    .animated-title {
        animation: fadeIn 2s infinite;
    }

    @keyframes fadeIn {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
    */

    // Interactive Quote Generator
    const quotes = [
        "Three things cannot be long hidden: the sun, the moon, and the truth.",
        "The mind is everything. What you think you become.",
        "Peace comes from within. Do not seek it without."
    ];
    const quoteButton = document.getElementById('new-quote');
    const quoteDisplay = document.getElementById('quote');
    quoteButton.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.textContent = randomQuote;
    });

    // Audio Controls
    const audio = document.getElementById('audio');

    // Countdown Timer to an Event
    const countdown = document.getElementById('countdown');
    const targetDate = new Date('2024-05-26T00:00:00');
    setInterval(() => {
        const now = new Date();
        const timeDiff = targetDate - now;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    // Use Local Storage to Save User Preferences
    const savePreferencesButton = document.getElementById('save-preferences');
    const loadPreferencesButton = document.getElementById('load-preferences');
    savePreferencesButton.addEventListener('click', () => {
        localStorage.setItem('fontFamily', title.style.fontFamily);
        localStorage.setItem('backgroundColor', document.body.style.backgroundColor);
    });
    loadPreferencesButton.addEventListener('click', () => {
        title.style.fontFamily = localStorage.getItem('fontFamily') || 'Arial, sans-serif';
        document.body.style.backgroundColor = localStorage.getItem('backgroundColor') || '#ffffff';
    });

    // Fetch and Display Data from an External API
    const apiContent = document.getElementById('api-content');
    document.getElementById('fetch-data').addEventListener('click', () => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                apiContent.textContent = JSON.stringify(data);
            });
    });

    // Weather Widget using an API
    const weatherDisplay = document.getElementById('weather');
    document.getElementById('get-weather').addEventListener('click', () => {
        fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=LOCATION')
            .then(response => response.json())
            .then(data => {
                weatherDisplay.textContent = `${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
            });
    });

    // Interactive Map Showing Locations Relevant to Buddhism
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 27.9881, lng: 86.9250 },
        zoom: 5
    });
    new google.maps.Marker({
        position: { lat: 27.9881, lng: 86.9250 },
        map,
        title: 'Mount Everest'
    });

    // Modal Popup for Detailed Information
    const modal = document.querySelector('.modal');
    const openModalButton = document.getElementById('open-modal');
    const closeModalButton = document.getElementById('close-modal');
    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Drag-and-Drop Feature
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', event.target.id);
        });
    });
    const dragContainer = document.getElementById('drag-container');
    dragContainer.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    dragContainer.addEventListener('drop', (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text');
        const element = document.getElementById(data);
        dragContainer.appendChild(element);
    });

    // Form Validation for User Feedback Section
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name === '' || email === '') {
            alert('Please fill in all fields');
        } else {
            alert('Thank you for your feedback!');
        }
    });

    // Use Canvas for Drawing or Animation
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 100, 100);
        requestAnimationFrame(draw);
    }
    draw();

    // Simple Game Related to the Theme
    const startGameButton = document.getElementById('start-game');
    startGameButton.addEventListener('click', () => {
        const gameArea = document.getElementById('game-area');
        gameArea.textContent = 'Game Started!';
    });

    // Toggle Between Day and Night Modes
    const dayNightToggle = document.getElementById('day-night-toggle');
    dayNightToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
    });

    // Dynamic Font Size Adjustment Slider
    const fontSizeSlider = document.getElementById('font-size-slider');
    fontSizeSlider.addEventListener('input', (event) => {
        title.style.fontSize = `${event.target.value}px`;
    });

    // Create a Parallax Scrolling Effect
    // This will require additional CSS
    // .parallax { background-attachment: fixed; }

    // Add custom scrollbar styling
    document.documentElement.classList.add('custom-scrollbar');
});
