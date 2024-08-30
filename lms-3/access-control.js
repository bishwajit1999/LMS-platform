// access-control.js

document.addEventListener('DOMContentLoaded', function () {
    const userRole = localStorage.getItem('userRole');
    const restrictedContent = document.querySelectorAll('.restricted');

    if (!userRole) {
        // If no user role is set, redirect to login page
        window.location.href = 'login.html';
    }

    // Show or hide content based on role
    if (userRole === 'student') {
        // Hide teacher-only content
        restrictedContent.forEach(el => el.style.display = 'none');
    } else if (userRole === 'teacher') {
        // Show all content
        restrictedContent.forEach(el => el.style.display = 'block');
    }
});
