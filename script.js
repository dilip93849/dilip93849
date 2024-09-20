function toggleMode() {
    const body = document.body;
    const button = document.querySelector('button');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Switch to Light Mode';
    } else {
        button.textContent = 'Switch to Dark Mode';
    }
}