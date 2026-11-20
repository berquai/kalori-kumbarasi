# 🐷 Kalori Kumbarası

Bir yılda 250.000 kcal biriktirmek için kişisel kumbara. Tek sayfalık bir web uygulaması (PWA): iPhone'a, Samsung'a ve bilgisayara "uygulama" olarak eklenir. Firebase ile bütün cihazlar aynı kumbarayı görür.

## Dosyalar
| Dosya | Görevi |
|---|---|
| `index.html` | Uygulamanın tamamı |
| `firebase-config.js` | Firebase bilgilerin (doldurulmadıkça uygulama **yerel modda** çalışır) |
| `firestore.rules` | Veritabanı güvenlik kuralları |
| `manifest.json`, `sw.js`, `icons/` | Ana ekrana ekleme ve çevrimdışı çalışma |

---

## 1. GitHub Pages'te yayınla
1. GitHub'da yeni bir repo aç, ör. `kalori-kumbarasi` (Public).
2. Bu klasördeki tüm dosyaları yükle (Add file → Upload files).
3. **Settings → Pages → Source: Deploy from a branch → `main` / root → Save**.
4. Birkaç dakika sonra adres hazır olur: `https://berquai.github.io/kalori-kumbarasi/`

Bu noktada uygulama yerel modda çalışır. Denemek için yeterli.

## 2. Firebase (cihazlar arası senkron)
1. <https://console.firebase.google.com> → **Proje ekle** (Analytics gerekmez).
2. **Build → Authentication → Get started → Sign-in method → Google → Etkinleştir**.
3. Authentication → **Settings → Authorized domains → Add domain → `berquai.github.io`**.
4. **Build → Firestore Database → Create database** (bölge: `europe-west`, *production mode*).
5. Firestore → **Rules** sekmesine `firestore.rules` içeriğini yapıştır → **Publish**.
6. **Proje ayarları (⚙️) → Uygulamalarınız → Web (</>)** → bir ad ver → çıkan `firebaseConfig` değerlerini `firebase-config.js` içine yapıştır ve GitHub'a yükle.

Ücretsiz Spark planı bu kullanım için fazlasıyla yeter.

## 3. Cihazlara ekle
- **iPhone (Safari):** Paylaş → **Ana Ekrana Ekle**. Uygulamayı aç → Google ile giriş yap.
  ⚠️ iOS'ta ana ekran uygulamasının oturumu Safari'den ayrıdır. Kestirme bağlantıyı **Safari'de** açacağı için **Safari'de de bir kez giriş yap**.
- **Samsung (Chrome / Samsung Internet):** Menü → **Ana ekrana ekle / Uygulamayı yükle**.
- **Bilgisayar:** Chrome/Edge adres çubuğundaki "yükle" simgesi ya da doğrudan yer imi.

## 4. iPhone Kestirmesi (her akşam otomatik veri)
**Kestirmeler → + (yeni kestirme)**, adı: *Kumbaraya Gönder*

1. **Sağlık Örneklerini Bul** (*Find Health Samples*): Tür **Aktif Enerji**, Başlangıç tarihi **bugün**.
2. **İstatistikleri Hesapla** (*Calculate Statistics*): **Toplam** (Sum). Çıktıyı değişkene koy: `Aktif`.
3. 1–2'yi **Adımlar** için tekrarla → `Adim`.
4. 1–2'yi **Yürüme + Koşma Mesafesi** için tekrarla → `Km`.
5. **Tarihi Biçimlendir** (*Format Date*): Geçerli Tarih, özel biçim `yyyy-MM-dd` → `Tarih`.
6. **URL** eylemi:
   ```
   https://berquai.github.io/kalori-kumbarasi/?d=[Tarih]&aktif=[Aktif]&adim=[Adim]&km=[Km]
   ```
7. **URL'leri Aç** (*Open URLs*).

**Otomasyon:** Kestirmeler → Otomasyon → + → **Günün Saati: 22:00, Her Gün** → **Hemen Çalıştır** → *Kumbaraya Gönder*.

Notlar:
- Uygulama Türkçe sayı biçimlerini ("1.023,5", "14.230", "10,2 km") kendisi çözer.
- Aynı gün kestirme ikinci kez çalışırsa kayıt **üzerine yazılır**. 23:30'da yeniden çalıştırmak günü tamamlar.
- Bazı iOS sürümleri ekran kilitliyken bağlantı açmaz; o durumda telefon açıldığında çalışır ya da kestirmeyi tek dokunuşla elle çalıştırırsın.

---

## Hesaplama mantığı (neden bu sayılar?)
- **Saat verisi:** `kumbara = günlük aktif enerji − taban (365 kcal)`. Apple'ın "aktif enerji"si zaten dinlenme metabolizmasını düşer. Taban da programdan önceki 6 aylık günlük ortalaman. Yani yalnızca **bu program sayesinde** fazladan harcanan enerji sayılır (ek katkı ilkesi).
- **Saat takma alışkanlığı:** Saat yalnızca dışarıdayken takılıyor. Taban (365) da aynı alışkanlıkla ölçüldüğü için çıkarma işlemi tutarlı. Alışkanlık değişirse (ör. saati evde de takmaya başlarsan) tabanı yeniden ölç. Saatin hiç takılmadığı gün kumbaraya 0 yazılır. Evde yapılan kuvvet çalışması ve saatsiz aktiviteler elle girilir; böylece çifte sayım olmaz.
- **Elle aktivite:** Yürüyüş ve koşu için ACSM metabolik denklemleri (hız + eğim), diğerleri için *Compendium of Physical Activities* MET değerleri. Net kalori `(MET − 1) × kilo × saat × 0,85 temkin katsayısı`. Kilo, biriken kaloriyle kendiliğinden azaltılır.
- **Yemedim:** `gram × yenmeyen oran × kcal/100 g`. Yiyecek değerleri yaklaşıktır. TürKomp ile doğrulayıp Ayarlar → "Kendi yiyeceğin" bölümünden güncelleyebilirsin.
- **Çekim:** fazla yenen gün kumbaradan düşülür.
- **Dinamik tahmin:** günlük yatırımların üstel ağırlıklı ortalaması (varsayılan 14 günlük hafıza). Her girişte yeniden hesaplanır.
- **1 kg yağ dokusu ≈ 7.700 kcal.** Yağ eşdeğeri yalnızca motivasyon içindir, tartı yerine geçmez.

## Yedek
Ayarlar → **Yedek indir** bir JSON dosyası verir. Ayda bir indirmek iyi bir alışkanlık.
