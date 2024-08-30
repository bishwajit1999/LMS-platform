// create-account.js

document.addEventListener('DOMContentLoaded', function () {
    const teacherForm = document.getElementById('teacher-create-account-form');
    const studentForm = document.getElementById('student-create-account-form');

    function handleFormSubmit(form, role) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = form.querySelector('[name="name"]').value;
            const email = form.querySelector('[name="email"]').value;
            const password = form.querySelector('[name="password"]').value;

            if (name && email && password) {
                localStorage.setItem(`${role}Name`, name);
                localStorage.setItem(`${role}Email`, email);
                localStorage.setItem(`${role}Password`, password);
                
                document.getElementById('create-account-message').textContent = 'Account created successfully! Redirecting...';
                setTimeout(() => {
                    window.location.href = `${role}-login.html`;
                }, 1000);
            } else {
                document.getElementById('create-account-message').textContent = 'Please fill in all fields.';
            }
        });
    }

    if (teacherForm) handleFormSubmit(teacherForm, 'teacher');
    if (studentForm) handleFormSubmit(studentForm, 'student');
});
