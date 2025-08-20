# Overview

Ginna Ghee is a premium ghee company website showcasing artisanal browned ghee products. The application is a full-stack web platform featuring a modern React frontend with a Node.js/Express backend, designed to educate customers about ghee benefits, display products, and provide customer interaction through contact forms and an AI-powered chatbot.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS with custom ghee-themed color variables and responsive design
- **State Management**: TanStack Query for server state and React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **API Design**: RESTful endpoints for contact forms and chatbot interactions
- **Session Management**: Express sessions with PostgreSQL store
- **Data Validation**: Zod schemas shared between frontend and backend

## Database Schema
- **contacts**: Customer contact form submissions with fields for name, email, subject, and message
- **chat_sessions**: AI chatbot conversation history tracking with session IDs and Q&A pairs
- **Schema Location**: Centralized in `/shared/schema.ts` for type safety across frontend and backend

## Storage Architecture
- **Development**: In-memory storage implementation for rapid development
- **Production**: PostgreSQL database with Neon serverless hosting
- **Abstraction**: Storage interface pattern allowing easy switching between implementations
- **Migrations**: Drizzle migrations managed through `drizzle-kit`

## AI Chatbot System
- **Knowledge Base**: Comprehensive ghee information covering health benefits, cooking uses, and safety guidelines
- **Response Logic**: Pattern matching against user questions to provide relevant information
- **Session Tracking**: Persistent conversation history per user session
- **Integration**: Real-time chat interface with message history and typing indicators

## Deployment Configuration
- **Build Process**: Vite for frontend bundling and esbuild for backend compilation
- **Development**: Hot reload with Vite dev server and tsx for backend development
- **Static Assets**: Optimized image delivery with responsive loading
- **Environment**: Environment-specific configuration for database connections

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Connection Pool**: `@neondatabase/serverless` for optimized database connections

## UI Framework
- **Radix UI**: Comprehensive set of accessible React primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Modern build tool with hot module replacement
- **TypeScript**: Type safety across the entire application stack
- **Drizzle Kit**: Database schema management and migrations

## Form and Validation
- **React Hook Form**: Performant form handling with minimal re-renders
- **Zod**: Runtime type validation for form data and API requests
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **Native Fetch**: HTTP client for API requests with credential handling

## Fonts and Assets
- **Google Fonts**: Custom typography including Playfair Display and Inter
- **Pixabay/Unsplash**: High-quality images for product showcase and content sections