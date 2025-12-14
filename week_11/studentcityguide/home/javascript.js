/* I am hiding here all the info and images for the activities and they will show up on the content using this array of objects with properties*/
const activities = [
    {
        name: "Porter Park",
        description: "A nice park for picnics and outdoor activities. Great place to relax!",
        image: "https://elibarranca.github.io/wdd131/week_11/studentcityguide/images/porter-park.png",
        mapLink: "https://maps.google.com/?q=Porter+Park+Rexburg+Idaho"
    },
    {
        name: "Rexburg Rapids",
        description: "Indoor water park and rec center. Perfect for winter fun!",
        image: "https://elibarranca.github.io/wdd131/week_11/studentcityguide/images/rexburg-rapids.png",
        mapLink: "https://maps.google.com/?q=Rexburg+Rapids+Idaho"
    },
    {
        name: "Gravity Factory",
        description: "Have fun with your friends in the foam pit!.",
        image: "https://elibarranca.github.io/wdd131/week_11/studentcityguide/images/gravity-factory.png",
        mapLink: "https://maps.app.goo.gl/vaz7EAErrV6EMJNt5"
    }
];

/* Ihave a loop here where the array gets HTML for each activity */
function showActivities() {
    const container = document.getElementById('activities-container');
    
    // Loop through each activity in the array
    for (let i = 0; i < activities.length; i++) {
        // Create a card for each activity
        const card = document.createElement('div');
        card.className = 'activity-card';
        // Get the HTML content
        card.innerHTML = `
            <img src="${activities[i].image}" alt="${activities[i].name}">
            <h3>${activities[i].name}</h3>
            <p>${activities[i].description}</p>
            <button class="map-button">View on Map</button>
        `;
        // Make the card go ont he page
        container.appendChild(card);
        
        /* I got events whree the suer clicks and gets the image */
        const img = card.querySelector('img');
        img.addEventListener('click', function() {
            openImage(activities[i].image, activities[i].name);
        });
        
        /* Add the click event listener to the buttons */
        const button = card.querySelector('button');
        button.addEventListener('click', function() {
            openMap(activities[i].mapLink);
        });
    }
}

/* Make the image bigger and open up in a modal*/
function openImage(imageSrc, altText) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = imageSrc;
    modalImg.alt = altText;
    modal.className = 'modal big';
}
/* Add an option go close the modal*/
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.className = 'modal';
}
/* Open a map link in a new tab*/
function openMap(mapLink) {
    window.open(mapLink, '_blank');
}

/*  ddded an event listener for the menu toggle button*/
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', toggleMenu);

/* Event listener for the close button in modal*/
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', closeModal);

/* This event listener does the form submission*/
const form = document.getElementById('contact');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // It wont be submitted since I dont have a database
    
    // Get elements from the form and give an alert
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert('Thank you, ' + name + '! We will contact you at ' + email);
    form.reset();
});

/* An event that will close the modal if user click outside*/
const modal = document.getElementById('image-modal');
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
/*Toggle for the menu on mobile*/
function toggleMenu() {
    const nav = document.getElementById('menu');
    
    if (nav.className === '') {
        nav.className = 'open';
    } else {
        nav.className = '';
    }
}
showActivities();
