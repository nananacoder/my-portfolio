# Use an official node.js image as a base
FROM node:lts AS runtime

# Set the working directory inside the docker
WORKDIR /app


# Copy the application code
COPY . .

# install all dependencies
RUN npm install
# build the application
RUN npm run build

# set environment variables
ENV HOST=0.0.0.0
ENV PORT=4321

# expose the port the app runs on
EXPOSE 4321

# define the command to run the app
CMD node ./dist/server/entry.mjs