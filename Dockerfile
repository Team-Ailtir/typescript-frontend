FROM node:23-alpine3.21

WORKDIR /app

COPY . .

RUN npm install --no-fund --no-audit --quiet

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
