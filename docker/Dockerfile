### STAGE 1: Build ###
FROM node:12.7-alpine As build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY nginx-conf/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/bytebank .
ENTRYPOINT ["nginx", "-g", "daemon off;"]


#docker build -f docker/Dockerfile -t angular-nginx .
#docker run --name my-angular-container -d -p 8888:80 my-angular-image
