
# My Portfolio 

### About the project
This is a personal portfolio website for showing up work experience and projects for hire.
It is based on a web framework called [Astro](https://astro.build/) and blog theme [Astro Nano](https://github.com/markhorn-dev/astro-nano), built with TypeScript.

### Directory Structure 
```
├── .eslintignore                      # List of files/folders ignored for ESLint                     |
├── .eslintrc.json                     # Config file for ESLint                                       |
├── .github                            # The github workflow used  
├── .gitignore                         # List of intentionally untracked files to be ignored by Git   |
├── .nvmrc                             # The nvm config for the node version used                     |
├── Dockerfile                         # Docker file                                                  |
├── .dockerignore                      # The files or folders be ignored in the Docker commands       |
├── firebaserc                         # Configuration details for Google Firebase                    |
├── firebase.json                      # Project-specific settings for Firebase.                      |
├── README.md                          # README file                                                  |
├── public                             # Static content that will be served                           |
├── src                                # Directory that contains all the frontend code                |
    ├── ...
├── node_modules                       # Installed node dependencies                                  |
├── package-lock.json                  # Node dependencies lock file                                  |
├── package.json                       # Node dependencies and npm commands                           |
├── tsconfig.json                      # Config file for TypeScript                                   |
```

### Prerequisites
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) - node.js version management
- [firebase-tools](https://firebase.google.com/docs/cli) - firebase cli tool
- [docker](https://docs.docker.com/) - docker 

## Install , Build and Deployment

### Git review/repository
https://github.com/nananacoder/my-portfolio

### Setup

First install the project prerequisites(see above).

Then
```shell script
git checkout develop

# install specified node version
# (you may have to reload your terminal if you have just installed nvm)
nvm install

# install node dependencies
npm ci

# install the firebase cli
npm install firebase-tools

# Authenticate the Firebase CLI with your Google account. 
npx firebase login

```

## Local development
```shell script
# build
npm run build

# start local dev server
npm run dev
```

## Build locally using Docker
```shell script
# For you first build,
# Use Docker Compose to build and start the containers 
# defined in your docker-compose.yml file
docker-compose up --build

# For your subsequent runs, just start the containers without rebuilding the images
docker-compose up

# stop the containers
docker-compose down
```


## Deploy to firebase hosting
```
npm run deploy
```



## 💻 Commands for Astro

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts local dev server on local network         |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Preview build on local network                   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |
