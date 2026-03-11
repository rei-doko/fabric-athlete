function toggleTheme(selected) {
    const theme = selected === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);

    syncCheckboxes(theme);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('user-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    syncCheckboxes(savedTheme);
});

function syncCheckboxes(theme) {
    const lightBox = document.getElementById('light-theme');
    const darkBox = document.getElementById('dark-theme');

    if (lightBox && darkBox) {
        lightBox.checked = (theme === 'light');
        darkBox.checked = (theme === 'dark');
    }
}