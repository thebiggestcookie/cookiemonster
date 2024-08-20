# Product Generator

## Purpose
To implement a 3-step prompt sequence for generating product data, including categorization and attribute mapping, using various LLM providers.

## User Stories
- As a user, I want to input a product name or type and generate a list of related products.
- As a user, I want the system to automatically identify the subcategory of each generated product.
- As a user, I want the system to map product attributes based on the identified subcategory.
- As an admin, I want to customize the prompts used in each step of the generation process.
- As a developer, I want to see a debug view of all steps taken during product generation.
- As a user, I want to save the generated products to the database.

## Component Structure
- ProductGenerator
  - ProductInput
  - GenerationSteps
    - Step1ProductList
    - Step2Categorization
    - Step3AttributeMapping
  - PromptCustomizer
  - DebugView
  - SaveButton

## Data Requirements
- Use existing tables: products, product_attributes, subcategories, attributes, llm_configs, prompts
- Add new table for storing generation sessions:

```sql
CREATE TABLE generation_sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  llm_config_id INTEGER REFERENCES llm_configs(id),
  initial_input TEXT NOT NULL,
  step1_result JSONB,
  step2_result JSONB,
  step3_result JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints
- POST /api/v1/product-generator/generate
  - Request body: { initialInput: string, llmConfigId: number }
  - Response: { sessionId: number, step1Result: object, step2Result: object, step3Result: object }
- GET /api/v1/product-generator/session/:sessionId
  - Response: { sessionId: number, initialInput: string, step1Result: object, step2Result: object, step3Result: object }
- POST /api/v1/product-generator/save
  - Request body: { sessionId: number, products: array }
  - Response: { savedProductIds: number[] }
- GET /api/v1/prompts/product-generator
  - Response: { step1Prompt: string, step2Prompt: string, step3Prompt: string }
- PUT /api/v1/prompts/product-generator
  - Request body: { step1Prompt: string, step2Prompt: string, step3Prompt: string }
  - Response: { updated: boolean }

## Interactions with Other Features
- Attribute Manager: Uses the defined attribute hierarchy for categorization and attribute mapping
- Human Grader Interface: Sends generated products for human review and correction
- Prompt Management: Retrieves and updates prompts used in the generation process
- Reporting and Analytics: Provides data on generation accuracy and LLM performance

## State Management
- Global State:
  - currentGenerationSession: Object containing the current session data
  - availableLlmConfigs: Array of available LLM configurations
- Local State:
  - currentStep: Number indicating the current generation step (1, 2, or 3)
  - stepResults: Object containing results from each step
  - isGenerating: Boolean indicating if generation is in progress
  - debugInfo: Object containing debug information for each step

## Error Handling
- Handle API errors during the generation process and display user-friendly error messages
- Implement retry mechanisms for failed API calls
- Validate user input and LLM responses at each step
- Log detailed error information for debugging purposes

## Performance Considerations
- Implement caching for frequently used data (e.g., attribute hierarchies, LLM configs)
- Use server-sent events or WebSockets for real-time updates during the generation process
- Optimize database queries for product saving and retrieval

## Accessibility Requirements
- Ensure all form inputs and buttons are keyboard accessible
- Provide clear instructions and feedback for each step of the generation process
- Use ARIA attributes to describe the purpose and state of dynamic content
- Ensure color contrast meets WCAG 2.1 guidelines

## Testing Requirements
- Unit Tests:
  - Test individual components (ProductInput, GenerationSteps, PromptCustomizer)
  - Test utility functions for processing LLM responses
- Integration Tests:
  - Test the full generation process with mock LLM responses
  - Test interactions between steps and state updates
- E2E Tests:
  - Test the complete flow from input to saved products
  - Test error handling and recovery

## Documentation
- Document the 3-step generation process and its configuration options
- Provide guidelines for writing effective prompts for each step
- Document the structure of LLM responses and how they're processed
- Create user guides for both regular users and admins

## Future Considerations
- Implement parallel processing for generating multiple products simultaneously
- Add support for image generation or retrieval for products
- Implement a feedback loop to improve generation accuracy over time
- Develop a product upload feature that uses the same 3-step process for categorization and attribute mapping
