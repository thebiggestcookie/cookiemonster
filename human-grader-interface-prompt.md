# Human Grader Interface

## Purpose
To provide a user-friendly interface for human reviewers to efficiently verify, correct, or fill in AI-generated product categorizations and attributes, optimized for high-volume review (thousands per day).

## User Stories
- As a human grader, I want to quickly review and confirm correct AI mappings.
- As a human grader, I want to easily correct incorrect attribute mappings.
- As a human grader, I want to fill in missing data for product attributes.
- As a human grader, I want to see my performance metrics and achievements.
- As an admin, I want to monitor grader performance and accuracy.

## Component Structure
- HumanGraderInterface
  - ProductQueue
  - ProductReviewCard
    - AttributeEditor
      - StructuredDropdown
      - TextInput
    - ConfirmButton
    - RejectButton
  - PerformanceMetrics
    - AccuracyChart
    - SpeedChart
  - Achievements
  - Pagination

## Data Requirements
- Use existing tables: products, product_attributes, users, grader_performance
- Add new table for tracking individual attribute corrections:

```sql
CREATE TABLE attribute_corrections (
  id SERIAL PRIMARY KEY,
  product_attribute_id INTEGER REFERENCES product_attributes(id),
  user_id INTEGER REFERENCES users(id),
  old_value TEXT,
  new_value TEXT,
  correction_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints
- GET /api/v1/grader/queue
  - Query params: { page: number, limit: number }
  - Response: { products: Array<Product>, totalCount: number }
- PUT /api/v1/grader/review
  - Request body: { productId: number, attributes: Array<{ id: number, value: string }> }
  - Response: { success: boolean, updatedProduct: Product }
- GET /api/v1/grader/performance
  - Query params: { userId: number, startDate: string, endDate: string }
  - Response: { accuracy: number, speed: number, productsReviewed: number }
- GET /api/v1/grader/achievements
  - Response: { achievements: Array<Achievement> }

## Interactions with Other Features
- Product Generator: Receives AI-generated products for review
- Attribute Manager: Uses the defined attribute hierarchy for structured dropdowns
- Reporting and Analytics: Provides data on human grader performance and corrections
- Admin Panel: Allows admins to view and manage grader performance

## State Management
- Global State:
  - currentUser: Object containing information about the logged-in grader
  - productQueue: Array of products waiting for review
  - graderPerformance: Object containing the grader's current performance metrics
- Local State:
  - currentProduct: Object containing the product currently being reviewed
  - modifiedAttributes: Object tracking changes made to the current product
  - isSubmitting: Boolean indicating if a review is being submitted

## Error Handling
- Implement error boundaries to catch and display errors without crashing the app
- Handle network errors when fetching products or submitting reviews
- Provide clear error messages to users and options to retry failed operations
- Implement auto-save functionality to prevent data loss in case of errors

## Performance Considerations
- Implement virtual scrolling for the product queue to handle large numbers of products
- Use memoization for expensive computations, such as filtering and sorting attributes
- Implement debouncing for text inputs to reduce unnecessary API calls
- Preload the next product in the queue to minimize waiting time between reviews

## Accessibility Requirements
- Ensure all interactive elements are keyboard accessible
- Use ARIA labels and descriptions for complex UI components
- Implement proper focus management when navigating between products
- Provide keyboard shortcuts for common actions (e.g., confirm, reject, next product)
- Ensure color contrast meets WCAG 2.1 guidelines for all text and UI elements

## Testing Requirements
- Unit Tests:
  - Test individual components (ProductReviewCard, AttributeEditor, PerformanceMetrics)
  - Test utility functions for data manipulation and validation
- Integration Tests:
  - Test the flow of reviewing and submitting product changes
  - Test performance metric calculations and updates
- E2E Tests:
  - Test the complete grading process for multiple products
  - Test error scenarios and recovery
  - Test accessibility using automated tools

## Documentation
- Create a user guide for human graders, including best practices for efficient reviewing
- Document the achievement system and how graders can improve their performance
- Provide documentation on the structured attribute system and how to use the interface effectively

## Future Considerations
- Implement a training mode for new graders with pre-annotated products
- Add support for side-by-side comparison of AI-generated and human-corrected attributes
- Implement a quality control system where some products are re-reviewed by senior graders
- Develop a system for graders to flag confusing or ambiguous products for admin review

## Gamification Elements
- Implement a points system for accurate and fast reviews
- Create achievements for milestones (e.g., 100 products reviewed, 7-day streak)
- Develop a leaderboard to foster friendly competition among graders
- Implement levels or tiers based on grader performance and experience
