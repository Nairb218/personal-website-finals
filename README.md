# Personal Website Finals

A modern full-stack personal portfolio website with a bento-grid layout, dark/light theme system, and a working guestbook.

## Tech Stack

- **Frontend:** Vue.js 3 + Vite + Tailwind CSS
- **Backend:** NestJS (REST API)
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## Features

- Responsive bento-grid layout (Desktop / Tablet / Mobile)
- Dark mode (black + green + gold) / Light mode (sky blue + gold + black)
- Theme toggle with smooth transitions & saved preference
- Guestbook with public/private visibility
- REST API: `GET /guestbook` (public entries), `POST /guestbook` (create entry)
- Input validation, loading states, error handling
- Clean NestJS controller/service architecture

## Sections

1. Profile Photo
2. About Me
3. Music (Now Playing)
4. Gallery
5. Education
6. Interests
7. Tech Stack
8. Projects
9. Contact & Resources
10. Guestbook

## Setup

### 1. Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Run the SQL in `supabase-schema.sql` in the SQL Editor
3. Copy your project URL and anon key

### 2. Backend (NestJS)

```bash
cd api
cp .env.example .env
# Fill in SUPABASE_URL and SUPABASE_ANON_KEY
npm install
npm run start:dev
```

### 3. Frontend (Vue.js)

```bash
cd frontend
npm install
npm run dev
```

### 4. Vercel Deployment

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. Deploy

## API Endpoints

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| GET    | `/guestbook` | Get all public entries   |
| POST   | `/guestbook` | Create a guestbook entry |

### POST /guestbook Body

```json
{
  "name": "John Doe",
  "message": "Great portfolio!",
  "visibility": "public"
}
```

- `visibility`: `"public"` or `"private"`
- Private entries are stored but never returned by GET
