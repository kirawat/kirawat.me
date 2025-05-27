# Use an official Node.js LTS image.
FROM node:slim AS base

# Set the working directory inside the container.
WORKDIR /app

# These are copied first to leverage Docker's layer caching.
# If there files haven't changed, Docker can often reuse cached layers
# for dependency installation.
COPY package.json ./
COPY package-lock.json ./

# Install project dependencies.
RUN npm install

# Copy the rest of the application code.
#
# NOTE: For development with docker-compose volume mounting, this step isn't
# strictly necessary as the local code will overwrite this via the volume
# mount. However, it's good practice for building standalone images or if the
# volume mount fails.
COPY . .

# Astro's default port is 4321.
EXPOSE 4321

# Default command to run when the container starts.
# This will execute `npm run dev` as defined in your `package.json`.
# The `--host` flag should be in your `package.json` script.
CMD ["npm", "run", "dev"]
