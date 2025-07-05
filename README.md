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

## 🚀 Getting Started

### 🔧 Backend Setup

```bash
cd backend
npm install
npm start
