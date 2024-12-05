// Time-based Greeting Function
function updateGreeting() {
    const greetingElement = document.getElementById('timeGreeting');
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    greetingElement.textContent = greeting + '!';
}

// Read More Functionality
function toggleBioExpansion() {
    const expandedBio = document.getElementById('expandedBio');
    expandedBio.classList.toggle('hidden');
}

// Newsletter Form Validation
function validateNewsletterForm(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('formError');
    
    // Reset previous error messages
    errorMessage.textContent = '';
    
    // Basic validation
    if (!nameInput.value.trim()) {
        errorMessage.textContent = 'Please enter your name.';
        return;
    }
    
    // Email validation using simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }
    
    // If validation passes
    alert('Thank you for subscribing!');
    nameInput.value = '';
    emailInput.value = '';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Update greeting on page load
    updateGreeting();

    // Read More Button
    const readMoreBtn = document.getElementById('readMoreBtn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', toggleBioExpansion);
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', validateNewsletterForm);
    }
});
