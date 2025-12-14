/* ===================================================================
    REQUIREMENT 1: ARRAYS
    This is an array that stores information about activities
    Each item in the array is an object with properties
    =================================================================== */
const activities = [
    {
        name: "Porter Park",
        description: "A nice park for picnics and outdoor activities. Great place to relax!",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        mapLink: "https://maps.google.com/?q=Porter+Park+Rexburg+Idaho"
    },
    {
        name: "Rexburg Rapids",
        description: "Indoor water park and rec center. Perfect for winter fun!",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&h=300&fit=crop",
        mapLink: "https://maps.google.com/?q=Rexburg+Rapids+Idaho"
    },
    {
        name: "Teton Dam Site",
        description: "Historic site with beautiful views and hiking trails.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        mapLink: "https://maps.google.com/?q=Teton+Dam+Site+Idaho"
    }
];

/* ===================================================================
    REQUIREMENT 2: FUNCTIONS
    This function displays the activities on the page
    It loops through the array and creates HTML for each activity
    =================================================================== */
function showActivities() {
    const container = document.getElementById('activities-container');
    
    // Loop through each activity in the array
    for (let i = 0; i < activities.length; i++) {
        // Create a card for each activity
        const card = document.createElement('div');
        card.className = 'activity-card';
        
        // Create the HTML content
        card.innerHTML = `
            <img src="${activities[i].image}" alt="${activities[i].name}">
            <h3>${activities[i].name}</h3>
            <p>${activities[i].description}</p>
            <button class="map-button">View on Map</button>
        `;
        
        // Add the card to the page
        container.appendChild(card);
        
        /* REQUIREMENT 3: EVENTS
            Add click event to the image */
        const img = card.querySelector('img');
        img.addEventListener('click', function() {
            openImage(activities[i].image, activities[i].name);
        });
        
        /* REQUIREMENT 3: EVENTS
            Add click event to the button */
        const button = card.querySelector('button');
        button.addEventListener('click', function() {
            openMap(activities[i].mapLink);
        });
    }
}

/* ===================================================================
    REQUIREMENT 2: FUNCTIONS
    This function opens an enlarged image in a modal
    =================================================================== */
function openImage(imageSrc, altText) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    
    modalImg.src = imageSrc;
    modalImg.alt = altText;
    modal.className = 'modal show';
}

/* ===================================================================
    REQUIREMENT 2: FUNCTIONS
    This function closes the modal
    =================================================================== */
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.className = 'modal';
}

/* ===================================================================
    REQUIREMENT 2: FUNCTIONS
    This function opens a map link in a new tab
    =================================================================== */
function openMap(mapLink) {
    window.open(mapLink, '_blank');
}

/* ===================================================================
    REQUIREMENT 2: FUNCTIONS (Responsive Menu)
    This function toggles the navigation menu on mobile
    =================================================================== */
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    
    if (nav.className === '') {
        nav.className = 'open';
    } else {
        nav.className = '';
    }
}

/* ===================================================================
    REQUIREMENT 3: EVENTS
    Event listener for the menu toggle button
    =================================================================== */
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', toggleMenu);

/* ===================================================================
    REQUIREMENT 3: EVENTS
    Event listener for the close button in modal
    =================================================================== */
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', closeModal);

/* ===================================================================
    REQUIREMENT 3: EVENTS
    This event listener handles the form submission
    =================================================================== */
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally
    
    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show a message to the user
    alert('Thank you, ' + name + '! We will contact you at ' + email);
    
    // Clear the form
    form.reset();
});

/* ===================================================================
    REQUIREMENT 3: EVENTS
    This event closes the modal when clicking outside the image
    =================================================================== */
const modal = document.getElementById('image-modal');
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

/* ===================================================================
    Call the function to display activities when page loads
    =================================================================== */
showActivities();
