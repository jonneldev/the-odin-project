document.addEventListener('DOMContentLoaded', function() {
    const newBookModal = document.getElementById('newBookModal');
    const closeModalButton = newBookModal.querySelector('.closeModal');
    const newBookForm = document.getElementById('newBookForm');
    const newBookBtn = document.querySelector('.newBookBtn');
    const cardContainer = document.querySelector('.card-container');
    const libraryTitle = document.querySelector('.library-title');
    const searchContainer = document.querySelector('.search-container');

    // Function to create a new book card
    function createBookCard(title, author, pages, coverUrl) {
        // Create elements
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = coverUrl; // Set the cover image URL
        img.alt = 'Book Cover';

        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card-details');

        const titleHeading = document.createElement('h3');
        titleHeading.textContent = title;

        const authorPara = document.createElement('p');
        authorPara.textContent = `by ${author} (Author)`;

        const pagesSmall = document.createElement('small');
        pagesSmall.textContent = `Pages: ${pages}`;

        const readContainer = document.createElement('div');
        readContainer.classList.add('read-container');

        const readText = document.createElement('p');
        readText.classList.add('read-text');
        readText.textContent = 'Unread';

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove Book';

        // Add event listener to remove button
        removeButton.addEventListener('click', function() {
            card.remove(); // Remove the card from DOM
        });

        // Append elements
        card.appendChild(img);
        card.appendChild(cardDetails);
        cardDetails.appendChild(titleHeading);
        cardDetails.appendChild(authorPara);
        cardDetails.appendChild(pagesSmall);
        cardDetails.appendChild(readContainer);
        readContainer.appendChild(readText);
        readContainer.appendChild(removeButton);

        // Append card to card container
        cardContainer.appendChild(card);
        
        // Ensure library title and search container are visible
        libraryTitle.style.display = 'block';
        searchContainer.style.display = 'flex';
    }

    // Open modal when clicking "NEW BOOK" button
    newBookBtn.addEventListener('click', function() {
        newBookModal.showModal();
    });

    // Close modal when clicking "Cancel" button
    closeModalButton.addEventListener('click', function() {
        newBookModal.close();
    });

    // Handle form submission
    newBookForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values and handle image upload
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const coverFile = document.getElementById('cover').files[0]; // Get the selected file

        // Example: Validate form data
        if (title.trim() === '' || author.trim() === '' || pages.trim() === '' || !coverFile) {
            alert('Please fill in all fields and upload a cover image.');
            return;
        }

        // Example: Upload the cover image (simulated with FileReader)
        const reader = new FileReader();
        reader.onload = function(event) {
            const coverUrl = event.target.result; // Get the base64 encoded image data
            // Add the new book dynamically with the cover image URL
            createBookCard(title, author, pages, coverUrl);
        };
        reader.readAsDataURL(coverFile); // Read the file as data URL (base64)

        // Reset the form (clear inputs)
        newBookForm.reset();

        // Close the modal after adding the book
        newBookModal.close();
    });

    // Event delegation for Remove Book button
    cardContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            const card = event.target.closest('.card');
            if (card) {
                card.remove(); // Remove the card from DOM
            }
        }
    });
});
