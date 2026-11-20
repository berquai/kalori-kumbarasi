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
   https://berquai.github.io/kalori-kumbarasi/?d=[Tarih]&aktif=[Aktif]&adim=[Adim]&m=[Metre]
   ```
   Mesafe metre olarak ve ondalıksız gönderilir (`m=14285`). Kestirmeler ondalık virgülü ("14,29") adres ayırıcı sanıp URL'yi böldüğü için `km=` yerine `m=` kullanılır; `km=` hâlâ kabul edilir.
7. **URL'leri Aç** (*Open URLs*).

**Otomasyon:** Kestirmeler → Otomasyon → + → **Günün Saati: 22:00, Her Gün** → **Hemen Çalıştır** → *Kumbaraya Gönder*.

Notlar:
- Uygulama Türkçe sayı biçimlerini ("1.023,5", "14.230", "10,2 km") kendisi çözer.
- Aynı gün kestirme ikinci kez çalışırsa kayıt **üzerine yazılır**. 23:30'da yeniden çalıştırmak günü tamamlar.
- Bazı iOS sürümleri ekran kilitliyken bağlantı açmaz; o durumda telefon açıldığında çalışır ya da kestirmeyi tek dokunuşla elle çalıştırırsın.

---

## Hesaplama mantığı (v2: tam yemek günlüğü)
**Kumbara (gün) = Harcanan − Alınan.** Yalnızca **kapatılan** günler kumbaraya girer; ziyafet günü kendiliğinden eksi yazılır.

- **Harcanan** = bazal metabolizma (Mifflin-St Jeor) × yaşam katsayısı (1,2) + (saatin aktif enerjisi − 365 taban) + saatsiz aktiviteler.
  - Saat yalnızca dışarıda takılıyor. Taban da aynı alışkanlıkla ölçüldüğü için çıkarma işlemi tutarlı. Saat verisi gelmeyen günde saat katkısı −365 sayılır (temkinli varsayım).
  - Saatsiz aktiviteler (evde kuvvet çalışması vb.): yürüyüş/koşu için ACSM denklemleri, diğerleri için *Compendium of Physical Activities* MET değerleri; net kalori × 0,85 temkin.
  - Kilo, biriken açıkla kendiliğinden azaltılır (7.700 kcal ≈ 1 kg); tartı gerekmez.
- **Alınan** = deftere yazılan yemekler + "Ekstra" tahminler, **× 1,10 yemek temkini** (göz kararı yağ, unutulan lokmalar).
- **Kalori cetveli:** Hazır değerler yaklaşık başlangıç değerleridir ("hazır" etiketi). Cetvelde olmayan bir yiyeceği ilk yazışında tanımlarsın (kcal/100 g ya da 1 birim = kcal, birim gramı, kaynak); sonra hep hazır olur. Hazır bir değeri düzenlediğinde senin doğruladığın kayda dönüşür.
- **Günün hedefi** (Ayarlar → Program): *Kalan ortalama* = kalan kcal ÷ kalan gün (varsayılan); *7 günde telafi* = gerideysen eksik önümüzdeki 7 güne yayılır, öndeysen fazlalık kalan güne yayılır (ihtiyatlı, hedef sıfıra düşmez); *Sabit* = kişisel plan. Kişisel plan (800) grafikte ve “Tam yıl temposu” rozetinde referans olarak kalır.
- **Rozet kademeleri:** anadilimgibi’deki 7 seviyeli madalya tasarımı; her seri kolaydan zora Taş → Bronz → Gümüş → Altın → Platin → Elmas → Efsane. “Kumbara doldu” her zaman Efsane.
- **Dondurma hakkı:** seriler haftada 2 eksik günü affeder.
- **Dinamik tahmin:** kapanan günlerin üstel ağırlıklı ortalaması (14 günlük hafıza). Kapatılmayan gün 0 sayılır.
- **Güvenlik uyarıları:** günlük açık 1.200 kcal’i geçerse ya da yenen miktar bazal metabolizmanın altında kalırsa.
- **Tema:** başlıktaki ☀️/🌙 düğmesi ya da Ayarlar → Görünüm (otomatik / açık / koyu).

## Yedek
Ayarlar → **Yedek indir** bir JSON dosyası verir. Ayda bir indirmek iyi bir alışkanlık.
