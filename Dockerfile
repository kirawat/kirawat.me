# Use an official Node.js LTS image.
FROM node:slim AS base

# Set the working directory inside the container.
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

# Install project dependencies using `npm ci` which is generally faster
# and more reliable for CI/CD and reproducible environments than `npm install`.
#
# It installs dependencies *exactly* as specified in `package-lock.json` file.
# This ensures that you get a consistent and reproducible set of dependencies
# every time the image is built. If the `package-lock.json` is out of sync
# with `package.json`, `npm ci` will usually error out, which is a good thing
# as it forces you to have a consistent dependency definition.
RUN npm ci

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
