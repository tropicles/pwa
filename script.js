// script.js
document.getElementById('testButton').addEventListener('click', () => {
    alert('Button clicked! This works offline too!');
});

// Check for network status
window.addEventListener('online', () => {
    document.body.style.backgroundColor = '#f0f0f0';
});

window.addEventListener('offline', () => {
    document.body.style.backgroundColor = '#ffcccc';
});