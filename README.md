# 🚀 FastAPI-Learning

![Python](https://img.shields.io/badge/Python-3.9%2B-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Framework-009688?logo=fastapi)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Learning%20In%20Progress-green)

A personal learning repository by **Uday Senghani**, dedicated to exploring the **FastAPI** framework — one of the fastest-growing Python frameworks for modern backend and API development.  
This repo includes hands-on examples, Python refreshers, and summarized notes to master the fundamentals and build production-grade APIs.

---

## 📘 Table of Contents

- [🎯 Objective](#-objective)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Prerequisites](#️-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [📚 Learning Outcomes](#-learning-outcomes)
- [🧑‍💻 Author](#-author)

---

## 🎯 Objective

This repository was created to:
- Learn **FastAPI** by building from scratch — APIs, routes, and models.
- Strengthen **Python backend development** skills.
- Understand **asynchronous programming**, dependency injection, and API documentation.
- Maintain organized, real-world FastAPI code for revision and interview prep.

---

## 📂 Repository Structure

FastAPI-Learning/  
│  
├── Fast-API/ # Practical FastAPI projects and mini examples  
├── py refresher/ # Python syntax, modules, and OOP fundamentals  
├── Fast-API Basics.pdf # Summary notes of FastAPI concepts  
└── README.md # Project overview and setup guide  

### Key Highlights
- ✅ Modular code samples  
- 📄 Notes combining theory + practice  
- ⚡ Simple examples for rapid testing using `uvicorn`  

---

## ⚙️ Prerequisites

Before starting, ensure you have:

- Python **3.9+** installed  
- Basic knowledge of **Python** (functions, classes, virtual environments)  
- Understanding of **RESTful APIs**  
- (Optional) Familiarity with `async` and `await` in Python  

---

## 🚀 Getting Started

Follow these steps to run the examples locally:

```bash
# 1️⃣ Clone this repository
git clone https://github.com/udaysenghani/FastAPI-Learning.git
cd FastAPI-Learning

# 2️⃣ Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate        # (Windows) venv\Scripts\activate

# 3️⃣ Install required packages
pip install fastapi uvicorn

# 4️⃣ Navigate to an example folder
cd Fast-API/example_folder

# 5️⃣ Run the FastAPI app
uvicorn main:app --reload
Now open your browser and visit:
👉 http://127.0.0.1:8000
Interactive API docs available at:
👉 http://127.0.0.1:8000/docs
```
📚 Learning Outcomes
By exploring this repository, you’ll learn how to:

Create and manage FastAPI routes

Handle query, path, and request body parameters

Implement Pydantic models for validation

Use async/await for non-blocking APIs

Apply dependency injection for cleaner code

Add authentication (JWT / OAuth2)

Integrate SQLAlchemy or other ORMs

Explore Swagger & ReDoc auto-generated docs

🔗 Resources
📘 Official FastAPI Docs

🧠 Pydantic Documentation

🎥 YouTube Tutorials — FastAPI Crash Course by FreeCodeCamp

💬 RealPython: Intro to FastAPI

🧩 Uvicorn – ASGI server used to run FastAPI

🧑‍💻 Author
Uday Senghani
👨‍💻 Software Engineer | Backend & AI Enthusiast
📍 India
"Code. Learn. Build. Repeat." 💡
