# Frontend/Backend Application with Docker

This project contains a React frontend and a Node.js backend, both containerized using Docker. 
The frontend interacts with the backend API to display and add items to a list.

## Prerequisites

Ensure you have the following installed:

- Docker
- Docker Compose

## How to Run the Application

Follow these steps to build and run the application using Docker:

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Build and Start the Containers

Use Docker Compose to build and start both the frontend and backend services:

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for the frontend and backend.
- Start the containers and run the application.

### 3. Access the Application

Once the containers are running, open your browser and go to:

```bash
http://localhost
```

The frontend will be available on port `80`, and the backend API will be available on port `3000`.

### 4. Stopping the Containers

To stop the running containers, press `CTRL + C` in the terminal where you ran `docker-compose up`. To remove the containers, run:

```bash
docker-compose down
```

## Application Structure

- **Backend**: Node.js with Express to serve the API for managing items.
- **Frontend**: React application using Redux for state management.
- **Docker**: The application is containerized and orchestrated using Docker Compose.