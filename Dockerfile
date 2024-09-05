# 1. Node.js image'ını kullanarak base imaj oluşturuyoruz.
FROM node:18-alpine

# 2. Çalışma dizinini belirleyin
WORKDIR /app

# 3. package.json ve package-lock.json dosyalarını kopyalayın
COPY package*.json ./

# 4. Node modüllerini yükleyin
RUN npm install

# 5. Uygulama kaynaklarını kopyalayın
COPY . .

# 6. Vite ile uygulamayı üretime yönelik olarak derleyin
RUN npm run build

# 7. Serve paketiyle build edilen uygulamayı sunmak için serve paketini global olarak yükleyin
RUN npm install -g serve

# 8. Uygulamanın çalışacağı portu tanımlayın
EXPOSE 3000

# 9. Serve komutuyla uygulamayı başlatın
CMD ["serve", "-s", "dist", "-l", "3000"]
