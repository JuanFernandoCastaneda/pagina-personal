---
author: JuanFernandoCastaneda
pubDatetime: 2022-09-25T15:20:35Z
modDatetime: 2025-04-29T03:15:57.792Z
title: SGI Sales
slug: en/sgiventas
featured: false
draft: false
status: lookingFor
tags:
  - React
  - Typescript
  - FastAPI
  - SQLModel
  - Python
  - HTML
  - CSS
description: Sales Order Creation Platform (ODV)
previewImagePath: /projects/sgiventas/preview.webp
urls:
  - https://github.com/JuanFernandoCastaneda/sgi-ventas
---

<img src="/projects/sgiventas/crearOrden.webp">

# Sales Project

**Disclaimer: This is a project made in Spanish, no text has been translated.**

This project has two main parts: a backend in Python with FastAPI and a frontend in React using Vite.

## Backend: Python + FastAPI

The backend is in the ventas-back/ folder. To run it:

1. **Install dependencies**:
   Make sure you have Python 3.9 or higher installed. Then, run the following commands from the `ventas-back/` folder:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. **Run the server**:
   Once the dependencies are installed, you can start the server with:

   ```bash
   fastapi run app/main.py
   ```

   The backend will be available at `http://localhost:8000`.

## Frontend: Vite + React

The frontend is in ventas-front/. To run it:

1. **Install dependencies**:
   You need to have Node.js and PNPM. Then, from ventas-front/:

   ```bash
   pnpm install
   ```

2. **Run the development server**:
   Once the dependencies are installed, you can start the development server with:

   ```bash
   pnpm dev
   ```

   The frontend will be available at `http://localhost:5173`.

## Notes

- The backend and frontend are configured to run on `localhost`. Both servers (frontend and backend) must be running for the app to work.
- Migrations are done automatically by the backend file found at `app/model/migrations.py`. This file imports the models found at `app/model/schemas/*_model.py` and allows SQLModel to generate them. Table constraints are within these `*_model.py` files.

## Design Decisions

### Backend

- **Modular structure**: The backend is organized into modules to keep the code clean and scalable. Each module has its own logic, models, and routes.
- **SQLite database**: SQLite is used as the database to simplify local development. This can be changed to a more robust database in production. <br>
  The database is normalized up to 3NF and therefore does not have dependent fields, but the backend automatically calculates dependent fields with Pydantic and its `computed_field` functionality.
- **CORS enabled**: CORS was configured to allow requests from the frontend at `http://localhost:5173`. It is also possible to make requests directly from the interactive FastAPI interface available at `http://localhost:8000/docs`.
- **Report generation**: Reports are generated in PDF format using the `reportlab` library and stored in the `reports/` folder.
- **Security**: A basic security feature is escaping character strings in requests. Due to time constraints, this was not implemented, but it would be appropriate to do so in production.

### Frontend

- **Cart state in Create Order**: Currently, if the user leaves the "Create Order" page, the shopping cart is lost. This can be solved by implementing a global state with Redux or a similar library. This behavior may change in production.
- **State in View Order and Order List**: Currently, the state of Order List is not reused to create the View Order state. Instead, View Order makes an independent request. This could be changed in production if performance becomes an issue.
- **Componentization**: The frontend is divided into reusable components to facilitate maintenance and scalability. The folder structure also differentiates between pages and components.
- **Interaction with OpenAPI in production**: In a production environment, a solution like [HeyAPI](https://heyapi.dev/) could be considered. This allows the use of the OpenAPI specification generated by FastAPI to create types and ensure correct request usage.
- **Requests**: Ideally, requests should be abstracted in the modules directory to decouple their behavior. Due to time constraints, this was not implemented, but it is something to consider for production.
