# 1. Node.js imajı ile derleme aşaması
FROM node:18-alpine as builder

# 2. Çalışma dizini oluşturun
WORKDIR /app

# 3. Paketleri yükleyin
COPY package*.json ./
RUN npm install

# 4. Projeyi kopyalayın ve derleyin
COPY . .
RUN npm run build

# 5. Nginx imajı ile servis aşaması
FROM nginx:alpine

# 6. Yapıyı Nginx'in servis dizinine kopyalayın
COPY --from=builder /app/dist /usr/share/nginx/html

# 7. SSL sertifikalarını kopyalayın
COPY ./certificate.crt /etc/nginx/ssl/certificate.crt
COPY ./private.key /etc/nginx/ssl/private.key
COPY ./ca-bundle.crt /etc/nginx/ssl/ca-bundle.crt

# 8. Nginx konfigürasyonunu kopyalayın
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 9. 80 ve 443 portlarını açın
EXPOSE 80
EXPOSE 443

# 10. Nginx başlatın
CMD ["nginx", "-g", "daemon off;"]
