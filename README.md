# 🚀 My Portfolio Website

A modern full-stack developer portfolio built using **React + Django REST Framework** with secure authentication, project management, Cloudinary image hosting, and production deployment using **Vercel + Render + Supabase**.

---

## 🌐 Live Demo

### Frontend
https://myprortfolio.vercel.app

### Backend API
https://myprortfolio.onrender.com

---

# ✨ Features

## 👨‍💻 Portfolio Showcase
- Featured projects section
- Other projects section
- Technology stack showcase
- Responsive UI design
- Modern animations and clean layout

---

## 🔐 Authentication
- JWT Authentication
- Secure admin-only operations
- Login system for dashboard access

---

## 📂 Project Management
- Add projects dynamically
- Update/Delete projects
- Upload project images
- Store technologies & highlights using JSONField

---

## 📬 Contact System
- User contact form
- Store messages in backend
- Admin message management

---

## ☁️ Cloud Storage
- Cloudinary integration for media uploads
- Optimized image hosting

---

## ⚡ Deployment
### Frontend
- Hosted on Vercel

### Backend
- Hosted on Render

### Database
- PostgreSQL via Supabase

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- JavaScript

---

## Backend
- Django
- Django REST Framework
- JWT Authentication
- PostgreSQL
- Cloudinary
- WhiteNoise

---

# 📁 Project Structure

```bash
frontend/
│
├── src/
├── components/
├── pages/
└── assets/

backend/
│
├── projects/
├── contacts/
├── services/
├── backend/
└── manage.py
⚙️ Environment Variables
Backend .env
SECRET_KEY=your_secret_key

DEBUG=False

DATABASE_URL=your_database_url

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
🚀 Backend Setup
# Clone repository
git clone <your_repo_url>

# Go to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate environment
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
🚀 Frontend Setup
# Go to frontend
cd frontend

# Install packages
npm install

# Start development server
npm run dev
🔗 API Endpoints
Projects
/api/featured/
/api/other-projects/
Services
/apis/tech/
Authentication
/api/login/
Contacts
/apic/messages/
📸 Screenshots

Add screenshots of:

Home page
Admin dashboard
Projects section
Contact section
🧠 What I Learned
Full-stack architecture
REST API development
JWT authentication
Deployment workflows
Cloudinary integration
PostgreSQL database handling
CORS and production configuration
Frontend-backend integration
📌 Future Improvements
Dark mode
Blog system
AI chatbot integration
Analytics dashboard
Project search/filter
Docker deployment
👨‍💻 Author

Sk Singh

⭐ Support

If you like this project, give it a ⭐ on GitHub.
