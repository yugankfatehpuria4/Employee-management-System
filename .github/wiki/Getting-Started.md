# Getting Started with EMS

This guide will help you set up and start using the Employee Management System.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yugankfatehpuria4/Employee-management-System.git
cd Employee-management-System
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_AUTH_SECRET=your_auth_secret
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## First-Time Setup

1. Access the application in your browser
2. Register as an admin user
3. Configure your organization settings
4. Add team members and set up roles

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| REACT_APP_API_URL | Backend API URL | Yes |
| REACT_APP_AUTH_SECRET | Authentication secret key | Yes |

### Database Setup

The application uses a MongoDB database. Ensure you have:
1. MongoDB installed and running
2. Database connection string configured
3. Required collections created

## Common Issues

If you encounter any issues during installation:
1. Check the [Troubleshooting](Troubleshooting) guide
2. Ensure all prerequisites are met
3. Verify environment variables are correctly set

## Next Steps

After installation:
1. [Set up user roles](User-Roles)
2. [Configure your dashboard](Dashboard-Guide)
3. [Start managing tasks](Task-Management) 