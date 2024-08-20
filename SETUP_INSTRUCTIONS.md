# Setup Instructions for LLM Product Categorizer

Follow these steps to set up the LLM Product Categorizer application on your local machine. These instructions are designed for beginners.

## Prerequisites

1. Install Node.js (version 14 or later) from https://nodejs.org/
2. Install PostgreSQL from https://www.postgresql.org/download/

## Step-by-Step Setup

1. Clone the repository:
   Open a terminal/command prompt and run:
   ```
   git clone https://github.com/your-username/llm-product-categorizer.git
   cd llm-product-categorizer
   ```

2. Install dependencies:
   In the project directory, run:
   ```
   npm install
   ```

3. Set up the database:
   - Open pgAdmin (comes with PostgreSQL installation)
   - Create a new database named "llm_product_categorizer"

4. Configure environment variables:
   - Rename the `.env` file to `.env.local`
   - Open `.env.local` and update the following:
     ```
     DATABASE_URL=postgres://your_username:your_password@localhost:5432/llm_product_categorizer
     JWT_SECRET=choose_a_long_random_string
     ```
   Replace `your_username` and `your_password` with your PostgreSQL credentials.

5. Run the setup script:
   In the terminal, run:
   ```
   node setup.js
   ```
   This will create the database tables and an admin user.

6. Start the application:
   Run:
   ```
   npm run dev
   ```

7. The server should now be running at http://localhost:5000

## Admin Login

You can now log in to the admin panel with these credentials:
- Username: admin
- Password: admin123

Important: Change the admin password after your first login for security reasons.

## Next Steps

1. Explore the API endpoints using a tool like Postman.
2. Start building the frontend application to interact with the API.
3. Customize the application according to your specific needs.

If you encounter any issues during setup, please refer to the project's documentation or seek help from the project maintainers.