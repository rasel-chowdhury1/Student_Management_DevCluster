# Student Management System

## Overview

This project is a React application designed to manage student records. It features a login page with email/password and Google authentication, as well as a comprehensive student management system with CRUD (Create, Read, Update, Delete) functionalities. The application includes search, filter, pagination, and print capabilities.

## Technologies Used

- **React + Vite**: For building the user interface.
- **React Router DOM**: For handling routing within the application.
- **Tailwind CSS**: For styling the components.
- **Redux Toolkit**: For state management.
- **React Icons**: For incorporating icons into the UI.
- **Firebase**: For backend services including authentication and database.
- **React Firebase Hooks**: For easier Firebase integration.
- **SweetAlert2**: For enhanced alert and confirmation dialogs.

## Features

### Authentication
- **Login and Signup**: Users can sign up and log in using email and password or through Google authentication.
- **Logout**: Users can log out from the application.

### Student Management
- **Add Student**: A form to add new students with fields for first name, middle name, last name, class, division, roll number, address (line 1 and line 2), landmark, city, pincode, and an optional profile picture upload.
- **View Student**: Display student details in a modal box.
- **Edit Student**: Edit student details within a modal box.
- **Delete Student**: Delete student records with a confirmation alert.

### Manage Students
- **Search**: Search students by name.
- **Filter**: Filter students by class and division.
- **Pagination**: Each page displays 5 students with pagination controls.
- **Print**: Print the list of students.

## Setup and Deployment

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository.
   ```sh
   git clone <repository_url>

