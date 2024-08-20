# Attribute Manager

## Purpose
To create and manage a hierarchical structure of product attributes, allowing admins to define structured attributes and variants for each level of the product hierarchy.

## User Stories
- As an admin, I want to create and edit departments, categories, and subcategories.
- As an admin, I want to define attributes for each subcategory.
- As an admin, I want to specify data types and constraints for each attribute.
- As an admin, I want to view the entire attribute hierarchy in a tree-like structure.

## Component Structure
- AttributeManager
  - HierarchyTree
    - DepartmentNode
    - CategoryNode
    - SubcategoryNode
  - AttributeEditor
    - AttributeForm
    - AttributeList
  - ConfirmationModal

## Data Requirements
- Use existing tables: departments, categories, subcategories, attributes
- No additions to the global schema required

## API Endpoints
- GET /api/v1/attributes/hierarchy: Get the entire attribute hierarchy
  - Response: JSON representation of the hierarchy
- POST /api/v1/departments: Create a new department
  - Request body: { name: string }
  - Response: { id: number, name: string }
- POST /api/v1/categories: Create a new category
  - Request body: { name: string, departmentId: number }
  - Response: { id: number, name: string, departmentId: number }
- POST /api/v1/subcategories: Create a new subcategory
  - Request body: { name: string, categoryId: number }
  - Response: { id: number, name: string, categoryId: number }
- POST /api/v1/attributes: Create a new attribute
  - Request body: { name: string, subcategoryId: number, dataType: string, isRequired: boolean }
  - Response: { id: number, name: string, subcategoryId: number, dataType: string, isRequired: boolean }
- PUT and DELETE endpoints for each entity type

## Interactions with Other Features
- Product Generator: Uses the defined attributes to map products to the correct subcategory
- Human Grader Interface: Uses the attribute hierarchy to display structured dropdowns for product attribute editing

## State Management
- Global State:
  - attributeHierarchy: The entire hierarchy of departments, categories, subcategories, and attributes
- Local State:
  - selectedNode: Currently selected node in the hierarchy tree
  - editingAttribute: Attribute currently being edited

## Error Handling
- Handle network errors when fetching or updating the hierarchy
- Validate input fields (e.g., prevent duplicate names, ensure required fields are filled)
- Display error messages to the user using a toast notification system

## Performance Considerations
- Implement pagination or virtual scrolling for large attribute lists
- Use memoization for expensive computations in the hierarchy tree

## Accessibility Requirements
- Ensure the hierarchy tree is navigable using keyboard controls
- Use ARIA attributes for the tree structure
- Provide clear labels and instructions for all form inputs

## Testing Requirements
- Unit Tests:
  - Test individual components (HierarchyTree, AttributeEditor, AttributeForm)
  - Test utility functions for manipulating the attribute hierarchy
- Integration Tests:
  - Test the interaction between HierarchyTree and AttributeEditor
  - Test API calls and state updates
- E2E Tests:
  - Test the full flow of creating a department, category, subcategory, and attribute
  - Test editing and deleting attributes

## Documentation
- Document the structure of the attribute hierarchy
- Provide usage instructions for admins on how to effectively manage attributes
- Document any constraints or best practices for attribute creation

## Future Considerations
- Implement drag-and-drop functionality for reordering the hierarchy
- Add support for attribute groups within subcategories
- Implement an import/export feature for bulk attribute management
