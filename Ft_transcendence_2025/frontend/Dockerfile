FROM node:18-alpine

WORKDIR /app

COPY . .
# Install dependencies
#COPY package*.json ./
RUN npm install

# Copy source files
#COPY . .

# Build TypeScript and Tailwind
RUN npm run build

# Serve the built frontend
#RUN npm install -g serve

# Expose the port for the http-server
EXPOSE 5050

# Run the app with http-server (on port 5050)
CMD ["npm", "run", "dev"]