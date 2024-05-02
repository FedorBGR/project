document.addEventListener('DOMContentLoaded', function() {
    const heartButtons = document.querySelectorAll('.favorite');

    heartButtons.forEach(function(heartButton) {
        const heartIcon = heartButton.querySelector('.heart');

        heartButton.addEventListener('click', function() {
            heartIcon.classList.toggle('blue');
        });
    });

    const applyButtons = document.querySelectorAll('.apply');

    applyButtons.forEach(function(applyButton) {
        applyButton.addEventListener('click', function() {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        });
    });
});
