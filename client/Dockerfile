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


# Build with -> docker build -t joaoguimaraes22/docker-nextjs .
# Build with -> docker build -t <your_name>/docker-nextjs .

# Run with -> docker run -d -p 3333:3000 joaoguimaraes22/docker-nextjs:latest
# Run with -> docker run -d -p 3333:3000 <your_name>/docker-nextjs:latest
