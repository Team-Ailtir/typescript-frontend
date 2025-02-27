#lightweight Node.js image
FROM node:20-alpine

# sets the working directory  the trailing '/' indicates to create directory if it does not exist
WORKDIR /app/

# copy json package
COPY package.json ./

# copy tsconfig.json
COPY tsconfig.json ./

# install dependencies
RUN npm install

# copy all the files
COPY . .

# Expose localhost on port 3000
EXPOSE 3000

CMD ["npm", "run","start"]