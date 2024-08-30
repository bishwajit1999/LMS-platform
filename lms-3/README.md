# New Alipore College Assessment Management System

## Overview

The **New Alipore College Assessment Management System** is a web application designed to facilitate the creation, management, and grading of assessments. It provides separate interfaces for students and teachers, allowing them to interact with the system according to their roles.

### Features

- **Teacher Dashboard**:
  - Create, edit, and delete assessments.
  - Manage a question bank with reusable questions.
  - Grade student submissions with options for both automated and manual grading.
  - Provide feedback and export assessment data.
  - Access detailed analytics on student performance.

- **Student Dashboard**:
  - Take assessments assigned by teachers.
  - View grades and feedback from completed assessments.
  - Access a history of submitted assessments.

- **Responsive Design**:
  - The website is fully responsive, ensuring a seamless experience across various devices and screen sizes.

### Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)

- **Backend**:
  - Node.js (Express.js) - For managing user accounts and handling form submissions.
  
- **Database**:
  - MongoDB (Optional) - For storing user information, assessments, and grades.

- **Others**:
  - LocalStorage - To simulate user authentication and store session data on the client side.

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Optional, if you plan to use a database)

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/username/assessment-management-system.git
    cd assessment-management-system
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Server**:
    ```bash
    npm start
    ```
    The server will start at `http://localhost:3000`.

4. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`.
   - You can log in as a teacher or student using the credentials provided below.

### Default Credentials

- **Teacher**:
  - Email: `teacher@example.com`
  - Password: `password123`
  
- **Student**:
  - Email: `student@example.com`
  - Password: `password123`

## Usage

### Teacher Login
1. Navigate to the **Teacher Login** page.
2. Enter the provided credentials or create a new teacher account.
3. Access the teacher dashboard to manage assessments, grade submissions, and view analytics.

### Student Login
1. Navigate to the **Student Login** page.
2. Enter the provided credentials or create a new student account.
3. Access the student dashboard to take assessments and view feedback.

## File Structure


## Future Enhancements

- **Database Integration**: Currently, the project uses LocalStorage for session management. The next step is to integrate MongoDB for persistent data storage.
- **Improved Authentication**: Implement JWT-based authentication for enhanced security.
- **Role-Based Access**: Enhance the role-based access to allow finer control over who can access what features.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions, suggestions, and bug reports are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact:

- Bishwajit Rai: [biswajitrai1999@gmail.com](mailto:biswajitrai1999@gmail.com)
