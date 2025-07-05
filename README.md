# 🔗 URL Shortener Microservice + React Web App

A full-stack URL Shortener application built with **Express (Node.js)** for the backend and **React** with **Material UI** for the frontend. This app supports shortening URLs, custom shortcodes, expiry control, and basic usage analytics.

---

## 🧩 Features

### 🔧 Backend (Express Microservice)
- URL shortening with unique, optionally custom shortcodes
- Optional expiry duration for shortened URLs (defaults to 30 minutes)
- Middleware-based logging (custom logging only)
- Robust error handling with descriptive HTTP status codes
- Statistics endpoint to track usage (click count, timestamps)
- CORS-enabled for cross-origin frontend communication

### 🎨 Frontend (React + Material UI)
- Mobile-responsive, clean UI built using Material UI
- Supports shortening up to 5 URLs simultaneously
- Optional fields for shortcode and validity (per row)
- Results table with original, short, expiry, and status
- Statistics page to list shortened URLs and their analytics

---

## 📦 Tech Stack

| Layer     | Tech                                  |
|-----------|---------------------------------------|
| Frontend  | React, Material UI, Axios, React Router |
| Backend   | Node.js, Express, CORS                |
| Logging   | Custom middleware-based logging       |
| Dev Tools | Postman, Chrome DevTools              |

---

## 🚀 Rest API output : - (postman)
![alt text](<outputScreenshots/backend-api-postman-req-res/Screenshot 2025-07-05 111834.png>)
![alt text](<outputScreenshots/backend-api-postman-req-res/Screenshot 2025-07-05 112614.png>)
![alt text](<outputScreenshots/backend-api-postman-req-res/Screenshot 2025-07-05 112625.png>)
![alt text](<outputScreenshots/backend-api-postman-req-res/Screenshot 2025-07-05 112723.png>)
![alt text](<outputScreenshots/backend-api-postman-req-res/Screenshot 2025-07-05 113453.png>)
## 🚀 Frontend output  :-
![alt text](<outputScreenshots/frontend/Screenshot 2025-07-05 120627.png>)
![alt text](<outputScreenshots/frontend/Screenshot 2025-07-05 120646.png>)
![alt text](<outputScreenshots/frontend/Screenshot 2025-07-05 120903.png>)
![alt text](<outputScreenshots/frontend/Screenshot 2025-07-05 120919.png>)
### 🔧 Backend Setup
```bash
cd backend
npm install
npm start
