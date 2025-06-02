# Notification System Frontend

A modern React + Typescript + Vite frontend for real-time notifications and post management.

---

## Features

- **Authentication:** Signup and login with form validation.
- **Posts:** Create, list, and manage posts.
- **Real-time Notifications:** Bell notification(In-App) with live updates via Server-Sent Events (SSE).
- **Responsive UI:** Built with Tailwind CSS and React.
- **Protected Routes:** Auth and app layouts with React Router.
- **API Integration:** Axios with interceptor for token handling.
- **Reusable Components:** Buttons, modals, tables, and more.

---

## Getting Started

### 1. **Clone the Repository**

```sh
git clone https://github.com/your-org/insyd-notification-system-frontend.git
cd insyd-notification-system-frontend
```

### 2. **Install Dependencies**

```sh
yarn install
# or
npm install
```

### 3. **Environment Variables**

Create a `.env` file in the project root:

```
VITE_BACKEND_BASE_URL=http://localhost:8000
```

Adjust the URL to match your backend.

### 4. **Run the Development Server**

```sh
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Build for Production

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

---

## Notifications

- Uses **Server-Sent Events (SSE)** for real-time notifications.
- Requires backend endpoint (e.g. `/sse/v1/events/notification`) that supports SSE and accepts a Bearer token.
- Notifications are displayed in a dropdown bell icon with badge.

---
