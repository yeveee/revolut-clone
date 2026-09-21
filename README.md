# Revolut Clone

A banking app built as a portfolio project.

## Stack

- **Backend:** Java 21, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, Maven
- **Frontend:** Angular (standalone components), TypeScript
- **Infra:** Docker Compose (Postgres for local dev)

## Project structure

```
backend/    Spring Boot API
frontend/   Angular app
docker-compose.yml   Local Postgres
```

## Running locally

1. Start Postgres:
   ```bash
   docker compose up -d
   ```
2. Run the backend (from `backend/`):
   ```bash
   ./mvnw spring-boot:run
   ```
   API runs on `http://localhost:8080`.
3. Run the frontend (from `frontend/`):
   ```bash
   npm start
   ```
   App runs on `http://localhost:4200`.

## Status

Early development — project setup complete, features being built incrementally.
