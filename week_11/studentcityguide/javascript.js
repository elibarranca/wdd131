/*<script>
        // Array of activities with data
        const activities = [
            {
                name: "Porter Park",
                description: "Beautiful park perfect for picnics, walking, and outdoor activities. Great place to relax between classes!",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                mapLink: "https://maps.google.com/?q=Porter+Park+Rexburg+Idaho"
            },
            {
                name: "Rexburg Rapids",
                description: "Indoor water park and recreation center. Perfect for staying active during the cold Idaho winters!",
                image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&h=300&fit=crop",
                mapLink: "https://maps.google.com/?q=Rexburg+Rapids+Idaho"
            },
            {
                name: "Teton Dam Site",
                description: "Historic site with beautiful views. Great for hiking and learning about local history.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                mapLink: "https://maps.google.com/?q=Teton+Dam+Site+Idaho"
            }
        ];

        // Function to create activity cards
        function displayActivities() {
            const container = document.getElementById('activities-container');
            
            activities.forEach(function(activity) {
                // Create card element
                const card = document.createElement('article');
                card.className = 'activity-card';
                
                // Create image
                const img = document.createElement('img');
                img.src = activity.image;
                img.alt = activity.name;
                img.addEventListener('click', function() {
                    openModal(activity.image, activity.name);
                });
                
                // Create heading
                const heading = document.createElement('h4');
                heading.textContent = activity.name;
                
                // Create description
                const description = document.createElement('p');
                description.textContent = activity.description;
                
                // Create button
                const button = document.createElement('button');
                button.textContent = 'View on Map';
                button.addEventListener('click', function() {
                    window.open(activity.mapLink, '_blank');
                });
                
                // Add all elements to card
                card.appendChild(img);
                card.appendChild(heading);
                card.appendChild(description);
                card.appendChild(button);
                
                // Add card to container
                container.appendChild(card);
            });
        }

        // Function to open modal with enlarged image
        function openModal(imageSrc, altText) {
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('modal-image');
            
            modal.classList.add('active');
            modalImg.src = imageSrc;
            modalImg.alt = altText;
            
            // Focus management for accessibility
            document.querySelector('.close-modal').focus();
        }

        // Function to close modal
        function closeModal() {
            const modal = document.getElementById('image-modal');
            modal.classList.remove('active');
        }

        // Event listener for close button
        document.querySelector('.close-modal').addEventListener('click', closeModal);

        // Close modal when clicking outside the image
        document.getElementById('image-modal').addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Mobile menu toggle function
        function toggleMenu() {
            const nav = document.querySelector('nav');
            const menuToggle = document.querySelector('.menu-toggle');
            
            nav.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = nav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        }

        // Event listener for menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

        // Form submission handler
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email) {
                alert('Thank you, ' + name + '! We will contact you at ' + email + ' soon!');
                
                // Reset form
                this.reset();
            }
        });

        // Display activities when page loads
        displayActivities();
    </script>*/