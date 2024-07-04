document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');

            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Duration matches the CSS transition duration
        });
    });
});
