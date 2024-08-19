# LLM Product Categorizer and Attribute Mapping System

## Overall Architecture
- Frontend: React with hooks
- Styling: Tailwind CSS
- Backend: Node.js with Express
- Database: PostgreSQL
- State Management: Redux
- Authentication: JWT

## Global Data Schema

```sql
-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Departments
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

-- Categories
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  department_id INTEGER REFERENCES departments(id),
  name VARCHAR(100) NOT NULL,
  UNIQUE(department_id, name)
);

-- Subcategories
CREATE TABLE subcategories (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES categories(id),
  name VARCHAR(100) NOT NULL,
  UNIQUE(category_id, name)
);

-- Attributes
CREATE TABLE attributes (
  id SERIAL PRIMARY KEY,
  subcategory_id INTEGER REFERENCES subcategories(id),
  name VARCHAR(100) NOT NULL,
  data_type VARCHAR(50) NOT NULL,
  is_required BOOLEAN DEFAULT false,
  UNIQUE(subcategory_id, name)
);

-- Products
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  subcategory_id INTEGER REFERENCES subcategories(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  brand VARCHAR(100),
  price DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Product Attributes
CREATE TABLE product_attributes (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  attribute_id INTEGER REFERENCES attributes(id),
  value TEXT,
  is_ai_generated BOOLEAN DEFAULT true,
  last_updated_by INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(product_id, attribute_id)
);

-- LLM Configurations
CREATE TABLE llm_configs (
  id SERIAL PRIMARY KEY,
  provider VARCHAR(50) NOT NULL,
  model_name VARCHAR(100) NOT NULL,
  api_key VARCHAR(255) NOT NULL,
  max_tokens INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Prompts
CREATE TABLE prompts (
  id SERIAL PRIMARY KEY,
  llm_config_id INTEGER REFERENCES llm_configs(id),
  prompt_type VARCHAR(50) NOT NULL,
  prompt_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Human Grader Performance
CREATE TABLE grader_performance (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  products_reviewed INTEGER DEFAULT 0,
  attributes_corrected INTEGER DEFAULT 0,
  accuracy_score DECIMAL(5, 2),
  date DATE DEFAULT CURRENT_DATE
);

-- LLM Performance
CREATE TABLE llm_performance (
  id SERIAL PRIMARY KEY,
  llm_config_id INTEGER REFERENCES llm_configs(id),
  prompt_id INTEGER REFERENCES prompts(id),
  products_processed INTEGER DEFAULT 0,
  attributes_mapped INTEGER DEFAULT 0,
  accuracy_score DECIMAL(5, 2),
  token_usage INTEGER DEFAULT 0,
  date DATE DEFAULT CURRENT_DATE
);
```

## API Endpoint Structure
- All endpoints will be prefixed with `/api/v1`
- Use RESTful conventions for CRUD operations
- Implement proper error handling and status codes

## Authentication
- Use JWT for user authentication
- Implement role-based access control (RBAC) for different user types

## Coding Conventions
- Use camelCase for variable and function names
- Use PascalCase for component names
- Use UPPER_CASE for constants
- Use meaningful and descriptive names for all variables, functions, and components

## Component Structure
- Use functional components with hooks
- Implement container/presentational pattern where appropriate
- Keep components small and focused on a single responsibility

## State Management
- Use Redux for global state management
- Use local state (useState) for component-specific state
- Implement Redux Toolkit for simplified Redux usage

## Error Handling
- Implement a global error boundary component
- Use try/catch blocks for async operations
- Log errors to the console and potentially to a backend service

## Testing
- Use Jest for unit and integration testing
- Use React Testing Library for component testing
- Aim for at least 80% test coverage

## Performance Considerations
- Implement lazy loading for routes and heavy components
- Use memoization (useMemo, useCallback) where appropriate
- Optimize database queries with proper indexing

## Accessibility
- Follow WCAG 2.1 guidelines
- Use semantic HTML elements
- Implement proper ARIA attributes where necessary

## Internationalization
- Use react-intl for handling translations
- Store all text content in separate language files

## Version Control
- Use feature branches for all new development
- Write clear, descriptive commit messages
- Use pull requests for code reviews

## Documentation
- Use JSDoc for documenting functions and components
- Maintain a README.md file with setup instructions and project overview
- Document all API endpoints using a tool like Swagger

This initialization sets the foundation for the entire project. Each subsequent feature prompt will reference and build upon this structure.
