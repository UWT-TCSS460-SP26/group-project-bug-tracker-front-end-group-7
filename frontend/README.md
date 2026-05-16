# Bug Tracker Frontend

Single-page Next.js frontend for public bug report submission.

## Local development

1. Copy `.env.local.example` to `.env.local`.
2. Set `NEXT_PUBLIC_API_URL` to your backend base URL.
3. Run `npm run frontend:dev` from the repository root.
4. Open `http://localhost:3001`.

The app posts to `POST /v1/issues` without auth headers and expects the backend to allow the frontend origin through CORS.
npm 