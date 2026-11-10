# Appliance Repair Guy - System Architecture

## Overview

Appliance Repair Guy is a modern full-stack web application for an appliance repair service. It features a React-based frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration using Drizzle ORM. The application provides a professional landing page with service request functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js 20 with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in memory storage (development setup)
- **Development Server**: TSX for TypeScript execution

### Database Schema
The application uses two main entities:
- **Users**: Basic user authentication (username, password)
- **Service Requests**: Customer service requests with contact info, appliance details, and problem descriptions

## Key Components

### Frontend Components
- **Landing Page**: Complete business website with hero, services, testimonials, and contact sections
- **Service Request Form**: Comprehensive form for customers to request repairs
- **UI Library**: Full shadcn/ui component suite including forms, dialogs, cards, and navigation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Services
- **REST API**: RESTful endpoints for service request management
- **Data Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom logging for API requests

### Shared Resources
- **Schema Definitions**: Shared Drizzle schema and Zod validation schemas
- **TypeScript Types**: Shared type definitions between frontend and backend

## Data Flow

1. **Service Request Submission**:
   - Customer fills out contact form on landing page
   - Form data validated using Zod schema
   - React Hook Form handles client-side validation
   - TanStack Query manages API request to backend
   - Express API validates and stores request in PostgreSQL
   - Success toast notification shown to user

2. **Data Persistence**:
   - Drizzle ORM handles database operations
   - PostgreSQL stores all service requests with timestamps
   - Memory storage fallback for development (MemStorage class)

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **Forms**: React Hook Form, Hookform Resolvers
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Icons**: Lucide React, React Icons
- **Validation**: Zod
- **Date Handling**: date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: TSX, TypeScript
- **Build**: esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **Development**: Replit integration with runtime error overlay
- **Database Management**: Drizzle Kit for migrations
- **Code Quality**: TypeScript strict mode

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, PostgreSQL 16 modules
- **Development Server**: Runs on port 5000 with Vite dev server
- **Hot Reload**: Vite HMR for frontend, TSX for backend
- **Database**: PostgreSQL instance provisioned in Replit

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Autoscale deployment target on external port 80
- **Environment**: Production mode with optimized builds

### Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Static Assets**: Express serves built frontend from `dist/public`
- **API Routes**: Backend API available at `/api/*` endpoints

## Changelog

Changelog:
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.