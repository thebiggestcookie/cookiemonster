# LLM Product Categorizer and Attribute Mapping System

## Overview
This project aims to create a comprehensive system for categorizing products and mapping their attributes using Large Language Models (LLMs) with human verification. The system is designed to streamline the process of product data management for e-commerce platforms or large-scale product databases.

## Key Features

1. Product Generator
   - 3-step prompt sequence for generating product data
   - Automatic subcategory identification and attribute mapping
   - Customizable prompts for each step of the generation process
   - Debug view for transparency in the generation process

2. Attribute Manager
   - Hierarchical structure for departments, categories, and subcategories
   - Define and manage attributes for each subcategory
   - Specify data types and constraints for attributes

3. Human Grader Interface
   - Efficient interface for verifying and correcting AI-generated categorizations and attributes
   - Performance metrics and achievements for graders
   - Structured attribute editing with dropdowns and text inputs

4. Prompt Management
   - Create, edit, and version prompts for different stages of product generation
   - A/B testing capabilities for prompt optimization
   - Integration with multiple LLM providers

5. Admin Panel
   - Centralized interface for system management
   - User account and permission management
   - LLM configuration and API key management
   - System health monitoring and performance tracking

6. Reporting and Analytics
   - Comprehensive dashboard for system performance insights
   - Analysis of human grader productivity and LLM accuracy
   - Trend identification in product categorization and attribute mapping
   - Data export and custom report generation

## Technology Stack
- Frontend: React with hooks, Redux for state management
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: JWT
- Styling: Tailwind CSS

## Key Considerations
- Scalability to handle large volumes of products
- Performance optimization for real-time processing
- Accessibility compliance (WCAG 2.1 guidelines)
- Robust error handling and logging
- Comprehensive testing strategy (unit, integration, and E2E tests)
- Security measures for data protection and access control

This system is designed to significantly improve the efficiency and accuracy of product data management by leveraging the power of LLMs while maintaining human oversight for quality assurance.