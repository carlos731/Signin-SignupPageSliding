const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');

    overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame(() => {
        overlayBtn.classList.add('btnScaled');
    });
});

document.querySelectorAll('.togglePassword').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const passwordField = this.previousElementSibling;
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Alternar o ícone
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});

// document.getElementById('togglePassword').addEventListener('click', function () {
//     const passwordField = document.getElementsByClassName('.password');
//     const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
//     passwordField.setAttribute('type', type);

//     // Alternar o ícone
//     this.classList.toggle('fa-eye');
//     this.classList.toggle('fa-eye-slash');
// });