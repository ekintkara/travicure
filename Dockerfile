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

# 7. Nginx konfigürasyonunu kopyalayın (isteğe bağlı)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 8. 80 portunu açın
EXPOSE 80

# 9. Nginx başlatın
CMD ["nginx", "-g", "daemon off;"]
