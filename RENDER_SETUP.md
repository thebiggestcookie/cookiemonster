# Render Setup Instructions for LLM Product Categorizer

Follow these steps to set up the LLM Product Categorizer application on Render.

1. Sign up for a Render account at https://render.com if you haven't already.

2. Fork the project repository to your GitHub account.

3. In the Render dashboard, click on "New +" and select "Web Service".

4. Connect your GitHub account and select the forked repository.

5. Configure the Web Service:
   - Name: llm-product-categorizer (or your preferred name)
   - Environment: Node
   - Branch: main (or your default branch)
   - Build Command: npm install && npm run build
   - Start Command: node server.js
   - Plan: Choose an appropriate plan (Free tier works for testing)

6. Add the following environment variables:
   - NODE_ENV: production
   - PORT: 10000
   - JWT_SECRET: (Click "Generate" to create a secure random string)

7. Create a PostgreSQL database:
   - In the Render dashboard, go to "New +" and select "PostgreSQL".
   - Name: llm-product-categorizer-db (or your preferred name)
   - User: llm_product_categorizer_user
   - Database: llm_product_categorizer
   - Plan: Choose an appropriate plan

8. Link the database to your web service:
   - In your web service settings, go to the "Environment" tab.
   - Add a new environment variable:
     Key: DATABASE_URL
     Value: Select "Connect a database" and choose your newly created PostgreSQL database.

9. Deploy the web service by clicking "Create Web Service".

10. Once deployed, run the setup script to initialize the database:
    - Go to your web service's "Shell" tab.
    - Run the command: node setup.js

Your LLM Product Categorizer should now be set up and running on Render. You can access it via the provided URL in your Render dashboard.

Remember to update the admin password after the first login for security reasons.