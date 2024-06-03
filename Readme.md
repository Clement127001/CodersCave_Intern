# coders cave virtual internship

## Task 1 - portfolio project

Create a personal portfolio website that serves as an online resume and showcases
the intern's skills, projects, and experiences. The goal is to have a clean, visually
appealing, and responsive website that provides an overview of the intern's capabilities and achievements.

### Tech Stack

- React
- React Router DOM
- Tailwind CSS
- Framer Motion

### Pages

- Landing page
- About page
- Contact page

### Landing Page components

- Navbar (with sidebar)
- Hero
- MyWork
- CTA
- Footer

### About Page

- Navbar
- WorkDetails
- Tools
- CTA
- Footer

### Contact Page

- ContactDetails
- QNA
- ContactForm
- Footer

## Task 2 - Blog application (going to ge a full [MERN] stack application )

Create a personal blog website to share your thoughts, experiences, and
insights on various topics. This website will serve as a platform to
showcase your writing skills, and it will be an opportunity to experiment
with web development technologies.

## Features

- Authentication and Authorisation
- Responsive
- Ease and sleek UI

### phase 1 -> developing the api for managing all the blogs and users

#### user action:

base url : /api/users

- POST /login -> login user (unprotected)
- POST /register -> register new user (unprotected)
- GET /:id -> get user details (unprotected)
- GET / -> get all authors (unprotected)
- POST /change-avatar -> change avatar of the use profile(protected)
- PATCH /edit -> edit user details (protected)

#### blog action:

base url:/api/blogs

- GET / -> get all blogs(unprotected)
- GET /:id -> get single blog (unprotected)
- GET /user/:id -> get blogs of given author (unprotected)
- GET /category/:categoryId -> get blogs of given category (unprotected)
- POST / -> create new blog (protected)
- PATCH /:id -> edit blog (protected)
- DELETE /:id -> delete given blog (protected)

### phase 2 -> developing frontend of the application using react and integrate with the api
