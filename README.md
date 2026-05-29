# Blogpage - Full Stack Blog Application

A full-stack blog application with a Django REST Framework backend and a Vite-React frontend.

## Project Structure

- **`blogsite/`**: Django backend application.
- **`frontend/`**: React frontend application (Vite).
- **`env/`**: Python virtual environment (ignored by git).

## Features

- User Authentication (Signup/Login)
- Create, Edit, and Delete Blogs
- Like and Comment on Blogs
- Profile Management
- Image Uploads for Blogs

## Setup Instructions

### Backend (Django)

1. Navigate to the `blogsite` directory:
   ```bash
   cd blogsite
   ```
2. Activate the virtual environment:
   ```bash
   # Windows
   ..\env\Scripts\activate
   ```
3. Install dependencies (ensure `requirements.txt` is created or install manually):
   ```bash
   pip install django djangorestframework django-cors-headers pillow
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **Backend**: Python, Django, Django REST Framework, SQLite
- **Frontend**: JavaScript, React, Vite, CSS
- **Authentication**: JWT/Token-based (assumed)
