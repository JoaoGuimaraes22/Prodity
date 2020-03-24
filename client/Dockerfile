FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]

# Build with -> docker build -t <your_username>/docker-nextjs .
# Run with -> docker run -d -p 3333:3000 <your_username>/docker-nextjs:latest