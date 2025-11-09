# Stage 1: Build the application using Node (Vite)
FROM node:18-alpine AS build

WORKDIR /app

# Copy package manifests first to leverage Docker layer caching
# If you have a package-lock.json it will be used by npm ci for reproducible installs
COPY package.json package-lock.json* ./

# Use npm ci when package-lock.json is present, otherwise fall back to npm install
RUN if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi

# Copy the rest of the source code
COPY . .

# Build the app (Vite default output directory is `dist`)
RUN npm run build

# Stage 2: Serve the built app with Nginx
FROM nginx:stable-alpine

# Remove default nginx html (optional) and copy the built assets
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
