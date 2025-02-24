FROM node:18

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy the server code
COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
