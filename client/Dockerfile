FROM node:18

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install client dependencies
RUN npm install

# Copy the client code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
