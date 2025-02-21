# 📌 Restoran Uygulaması

Bu proje, **React Native** kullanılarak geliştirilmiş bir restoran arama uygulamasıdır. Uygulama, **Yelp API**'yi kullanarak İstanbul’daki restoranları listeler ve fiyat kategorilerine göre filtreleyerek kullanıcıya sunar.

---

## 🚀 **Özellikler**
✅ **Restoran Arama**: Kullanıcılar belirli bir anahtar kelime ile restoran arayabilir.
✅ **Fiyat Aralığına Göre Filtreleme**: Restoranlar **Ucuz (`₺`), Orta (`₺₺`) ve Pahalı (`₺₺₺`)** olarak sınıflandırılır.
✅ **Detaylı Bilgi**: Her restoran için ad, puan, yorum sayısı ve resimler gösterilir.
✅ **React Native Navigation**: Farklı ekranlar arasında geçiş yapılabilir.
✅ **State Yönetimi**: `useState`, `useEffect` ve özel `useResults` hook’u kullanılmıştır.

---

## 📂 **Proje Dizini**
```bash
📦 RESTORAN
├── 📂 api
│   ├── yelp.js           # Yelp API ile iletişimi sağlayan dosya
├── 📂 components
│   ├── ResultDetail.js   # Restoran detay bileşeni
│   ├── ResultsList.js    # Fiyat aralıklarına göre restoranları listeleyen bileşen
│   ├── SearchBar.js      # Kullanıcıdan arama terimini alan bileşen
├── 📂 hooks
│   ├── useResults.js     # Yelp API çağrısını yöneten özel hook
├── 📂 screens
│   ├── SearchScreen.js   # Ana arama ekranı
│   ├── ResultsShowScreen.js  # Seçilen restoranın detay ekranı
├── .gitignore            # API anahtarlarını gizlemek için .env dosyasını yok sayan dosya
├── babel.config.js       # `react-native-dotenv` yapılandırması
├── App.js                # Uygulamanın ana bileşeni
├── package.json          # Proje bağımlılıkları
└── README.md             # Proje hakkında bilgi veren dosya
```

---

## 🔧 **Kurulum & Çalıştırma**
### **1️⃣ Depoyu Kopyalayın**
```sh
git clone <GitHub-Repo-URL>
cd RESTORAN
```

### **2️⃣ Bağımlılıkları Yükleyin**
```sh
npm install
```
veya
```sh
yarn install
```

### **3️⃣ `.env` Dosyanızı Oluşturun**
API anahtarlarını gizli tutmak için proje dizininde `.env` dosyası oluşturun ve aşağıdaki satırı ekleyin:
```sh
YELP_API_KEY=Senin_Gizli_Api_Keyin
```

### **4️⃣ Metro Bundler’ı Başlatın**
```sh
npm start
```
veya
```sh
yarn start
```

### **5️⃣ Uygulamayı Çalıştırın**
📱 **Android için:**
```sh
npx react-native run-android
```
📱 **iOS için:**
```sh
npx react-native run-ios
```

---

## 🛠 **Kullanılan Teknolojiler**
- ⚛ **React Native** - Mobil UI geliştirme
- 📡 **Axios** - API çağrıları
- 🔍 **Yelp API** - Restoran verileri
- 🎨 **React Native Stylesheet** - UI tasarımı
- 🏗 **React Navigation** - Sayfalar arası geçiş
- ⚡ **Custom Hooks (`useResults.js`)** - API çağrılarını yönetme

---

## 📜 **Lisans**
Bu proje **MIT Lisansı** altında lisanslanmıştır. Dilediğiniz gibi kullanabilir ve geliştirebilirsiniz! 🚀

Herhangi bir sorunuz olursa, **pull request** veya **issue** açabilirsiniz. 😊

