# TechShethra - Technical Symposium Website

TechShethra is a modern website for a technical symposium event featuring information about events, schedules, speakers, and registration functionality.

## Project Structure

- **Frontend**: React with TypeScript, Vite, and Shadcn UI components
- **Backend**: Node.js, Express, and MongoDB

## Features

- Responsive design with dark theme
- Event listings and details
- Schedule display by day
- Speaker profiles
- Registration system
- Contact form
- Admin capabilities (coming soon)

## Technologies Used

### Frontend
- React with TypeScript
- Vite as build tool
- Tailwind CSS for styling
- Shadcn UI components (based on Radix UI)
- React Router for navigation
- React Query for data fetching
- Zod for validation

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication
- bcrypt for password hashing
- Joi for validation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or Atlas)

### Installation and Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd goldfire-techshethra-site
   ```

2. Install frontend dependencies:
   ```
   npm install
   ```

3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the backend directory with the following:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/techshethra
     JWT_SECRET=your_jwt_secret_key_should_be_long_and_complex
     NODE_ENV=development
     ```

5. Seed the database with sample data (optional):
   ```
   npm run seed
   ```

### Running the Application

1. Start the backend server (from the backend directory):
   ```
   npm run dev
   ```

2. Start the frontend development server (from the project root):
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
goldfire-techshethra-site/
├── src/                  # Frontend source code
│   ├── components/       # React components
│   ├── pages/            # Page components
│   ├── lib/              # Utility functions
│   └── hooks/            # Custom React hooks
├── backend/              # Backend source code
│   ├── src/              # Backend source code
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Request handlers
│   │   ├── models/       # Database models
│   │   └── routes/       # API routes
│   └── .env              # Environment variables
└── public/               # Static assets
```

## API Documentation

The backend provides a RESTful API for managing events, schedules, registrations, speakers, sponsors, and contact submissions. For detailed API documentation, please refer to the [backend README](./backend/README.md).
