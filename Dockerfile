# Use Node.js 18 Alpine as base image for smaller size
FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN pnpm install --prod

# Copy application code
COPY . .

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S lighthouse -u 1001

# Change ownership of the app directory
RUN chown -R lighthouse:nodejs /app
USER lighthouse

# Expose port (default for LHCI server)
EXPOSE 9001

# Set environment variables
ENV NODE_ENV=production
ENV PORT=9001

# Start the application
CMD ["pnpm", "start"] 