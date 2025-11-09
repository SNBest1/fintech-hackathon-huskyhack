# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install
RUN npm install react react-dom
RUN npm install --save-dev typescript @types/react @types/react-dom
RUN npm install lucide-react
RUN npm install --save-dev typescript

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy the built assets from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
