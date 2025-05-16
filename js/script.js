// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('main input');

    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.style.boxShadow = '0 0 10px #ff6f61';
        });

        searchInput.addEventListener('blur', () => {
            searchInput.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                alert(`Searching for: "${searchInput.value}"`);
                // Later you can route this to actual search functionality
            }
        });
    }
});
