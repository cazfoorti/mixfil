document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Basic search form handler (prevents default submission)
    // You would expand this to actually handle search
    const searchForms = document.querySelectorAll('form[role="search"]');
    searchForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const searchInput = form.querySelector('input[type="text"]');
            if (searchInput) {
                alert('Search submitted for: ' + searchInput.value);
                // Implement actual search logic here
            }
        });
    });
});
