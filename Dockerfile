# Aşama 1: Build Aşaması
FROM node:18 AS build

WORKDIR /app

# Package.json ve package-lock.json dosyalarını kopyalayın
COPY package*.json ./

# Bağımlılıkları yükleyin
RUN npm install

# Uygulamayı kopyalayın
COPY . .

# Vite ile uygulamayı build edin
RUN npm run build

# Aşama 2: Serve Aşaması
FROM node:18

WORKDIR /app

# Build edilen dosyaları kopyalayın
COPY --from=build /app/dist /app

# Uygulamayı serve etmek için bir basit HTTP sunucu kurun
RUN npm install -g serve

# Uygulamayı başlatın
CMD ["serve", "-s", "build"]

EXPOSE 3000
