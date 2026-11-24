// KaloriBank — hazır kalori cetveli (yaklaşık değerler).
// Biçim: [ad, kcal / 100 g (içeceklerde 100 ml), porsiyon adı, 1 porsiyon kaç gram/ml, arama için ek kelimeler (isteğe bağlı)]
// Değerler TürKomp, USDA ve yaygın etiket/menü bilgilerinden derlenmiş ortalama değerlerdir; tarife ve markaya göre ±%15 oynar.
export const FOOD_CATS = [
['🍎','Meyveler',[
 ['Elma',52,'adet',180],['Yeşil elma',50,'adet',170],['Armut',57,'adet',180],['Ayva',57,'adet',250],['Muz',90,'adet',120],
 ['Portakal',47,'adet',180],['Mandalina',53,'adet',90],['Greyfurt',42,'yarım',150],['Limon',29,'adet',80],['Kivi',61,'adet',75],
 ['Nar',83,'adet (taneleri)',160],['Üzüm',69,'salkım',150],['Çilek',32,'kase',150],['Kiraz',63,'avuç',80],['Vişne',50,'avuç',80],
 ['Şeftali',39,'adet',150],['Nektarin',44,'adet',140],['Kayısı',48,'adet',40],['Erik',46,'adet',30],['Can eriği',40,'adet',15,'yeşil erik'],
 ['Karpuz',30,'dilim',300],['Kavun',34,'dilim',250],['İncir (taze)',74,'adet',50],['Dut',43,'avuç',70],['Böğürtlen',43,'avuç',70],
 ['Ahududu',52,'avuç',60,'frambuaz'],['Yaban mersini',57,'avuç',60,'blueberry'],['Ananas',50,'dilim',80],['Mango',60,'adet',200],['Papaya',43,'dilim',150],
 ['Avokado',160,'adet',150],['Hindistan cevizi (taze)',354,'parça',40],['Trabzon hurması',70,'adet',170,'cennet elması'],['Yeni dünya',47,'adet',25,'malta eriği'],
 ['Muşmula',50,'adet',20],['Kızılcık',46,'avuç',60],['Liçi',66,'adet',10],['Ejder meyvesi',60,'adet',300],['Çarkıfelek meyvesi',97,'adet',20,'passion fruit'],
 ['Frenk üzümü',63,'avuç',50],['Kumkat',71,'adet',20],['Pomelo',38,'dilim',100],['Guava',68,'adet',100],['Alıç',52,'avuç',50],
 ['Meyve salatası',60,'kase',200],['Karışık meyve tabağı',50,'tabak',300],['Mürdüm eriği',46,'adet',35],['Böğürtlen (yabani)',43,'avuç',70],['Kuşburnu (taze)',162,'avuç',30],
 ['Hünnap',79,'avuç',50],['Yabani çilek',35,'avuç',50],['Altın çilek',53,'avuç',40,'physalis'],['Kestane (haşlanmış)',131,'adet',10],['Zeytin (sofralık, karışık)',200,'adet',5]
]],
['🍇','Kuru meyveler',[
 ['Kuru üzüm',300,'avuç',30],['Kuru kayısı',241,'adet',8],['Kuru incir',249,'adet',20],['Hurma',282,'adet',8],['Medjool hurma',277,'adet',24],
 ['Kuru erik',240,'adet',9],['Kuru dut',330,'avuç',30],['Kuru vişne',330,'avuç',30],['Elma kurusu',243,'avuç',30],['Pestil',320,'dilim',30],
 ['Cevizli sucuk (köme)',400,'dilim',40,'churchkhela'],['Kuru yaban mersini (şekerli)',320,'avuç',30,'cranberry'],['Hindistan cevizi rendesi',660,'yemek kaşığı',7],['Kuru muz cipsi',520,'avuç',30],['Kuru mango',320,'avuç',30],
 ['Kuru ananas (şekerli)',350,'avuç',30],['Goji berry',350,'yemek kaşığı',10],['Kuru meyve karışımı',300,'avuç',30],['Dut pekmezi',290,'yemek kaşığı',20],['Kuru kızılcık',320,'avuç',30]
]],
['🥬','Sebzeler',[
 ['Domates',18,'adet',120],['Çeri domates',18,'adet',15],['Salatalık',15,'adet',150],['Sivri biber',20,'adet',10],['Kapya biber',31,'adet',120],
 ['Dolmalık biber',20,'adet',80],['Çarliston biber',25,'adet',30],['Patlıcan',25,'adet',250],['Kabak',17,'adet',200],['Havuç',41,'adet',80],
 ['Soğan',40,'adet',110],['Kırmızı soğan',40,'adet',100],['Taze soğan',32,'adet',15],['Sarımsak',149,'diş',4],['Haşlanmış patates',87,'adet',150],
 ['Fırında patates (sade)',93,'adet',170],['Tatlı patates',86,'adet',130],['Ispanak',23,'kase (çiğ)',30],['Marul',15,'kase (doğranmış)',50],['Kıvırcık',15,'kase (doğranmış)',40],
 ['Roka',25,'avuç',20],['Maydanoz',36,'avuç',15],['Dereotu',43,'avuç',10],['Nane (taze)',44,'avuç',5],['Tere',32,'avuç',15],
 ['Semizotu',20,'kase',50],['Brokoli',34,'kase',90],['Karnabahar',25,'kase',100],['Beyaz lahana',25,'kase',90],['Kırmızı lahana',31,'kase',90],
 ['Karalahana',35,'yaprak',40],['Brüksel lahanası',43,'adet',15],['Pırasa',61,'adet',90],['Kereviz (kök)',42,'adet',300],['Sap kereviz',16,'sap',40],
 ['Pancar',43,'adet',120],['Kırmızı turp',16,'adet',10],['Siyah turp',18,'adet',200],['Mısır (haşlanmış koçan)',96,'adet',150,'koçan mısır'],['Közlenmiş mısır',110,'adet',150],
 ['Bezelye (taze)',81,'kase',150],['Taze fasulye (çiğ)',31,'kase',100],['Bamya',33,'kase',100],['Enginar (çanak)',47,'adet',120],['Mantar',22,'kase',70],
 ['Kuşkonmaz',20,'adet',16],['Taze bakla',88,'kase',100],['Kabak çiçeği',15,'adet',10],['Asma yaprağı (salamura)',69,'yaprak',4],['Pazı',19,'yaprak',40],
 ['Ebegümeci',37,'kase',60],['Kuzukulağı',22,'avuç',20],['Isırgan otu',42,'kase',60],['Şalgam',28,'adet',120],['Yer elması',73,'adet',60,'topinambur'],
 ['Zencefil (taze)',80,'parça',10],['Közlenmiş patlıcan',35,'adet',200],['Közlenmiş biber',30,'adet',60],['Acı biber',40,'adet',10],['Turp otu',25,'avuç',20],
 ['Hardal otu',27,'avuç',20],['Radika',30,'kase',60],['Deniz börülcesi',20,'kase',60],['Kuşkonmaz (yabani)',22,'demet',50],['Mısır (konserve, süzülmüş)',80,'yemek kaşığı',15]
]],
['🌾','Baklagil, tahıl ve un',[
 ['Kırmızı mercimek (kuru)',345,'su bardağı',180],['Yeşil mercimek (kuru)',352,'su bardağı',190],['Nohut (kuru)',364,'su bardağı',170],['Nohut (haşlanmış)',164,'kase',150],['Kuru fasulye (kuru)',333,'su bardağı',180],
 ['Kuru fasulye (haşlanmış)',127,'kase',170],['Barbunya (haşlanmış)',127,'kase',170],['Börülce (haşlanmış)',116,'kase',170],['Bulgur (çiğ)',342,'su bardağı',170],['Bulgur (haşlanmış, sade)',83,'kase',180],
 ['Pirinç (çiğ)',360,'su bardağı',190],['Pirinç (haşlanmış, sade)',130,'kase',160],['Basmati pirinç (haşlanmış)',121,'kase',160],['Esmer pirinç (haşlanmış)',112,'kase',160],['Yulaf ezmesi',379,'yemek kaşığı',10],
 ['Yulaf ezmesi (kase)',379,'kase',40],['Beyaz un',364,'su bardağı',110],['Tam buğday unu',340,'su bardağı',120],['Mısır unu',370,'su bardağı',120],['İrmik',360,'yemek kaşığı',12],
 ['Kinoa (pişmiş)',120,'kase',185],['Karabuğday (pişmiş)',92,'kase',170],['Kuskus (pişmiş)',112,'kase',160],['Firik (pişmiş)',120,'kase',160],['Arpa şehriye (çiğ)',360,'su bardağı',170],
 ['Makarna (çiğ)',371,'porsiyon',100],['Makarna (haşlanmış, sade)',158,'tabak',200],['Tam buğday makarna (haşlanmış)',149,'tabak',200],['Erişte (çiğ)',370,'porsiyon',100],['Chia tohumu',486,'yemek kaşığı',12],
 ['Keten tohumu',534,'yemek kaşığı',10],['Edamame',121,'kase',150],['Soya fasulyesi (haşlanmış)',173,'kase',150],['Kuru bakla (haşlanmış)',110,'kase',170],['Mısır nişastası',381,'yemek kaşığı',10],
 ['Buğday (aşurelik, haşlanmış)',120,'kase',150],['Galeta unu',395,'yemek kaşığı',10],['Kepek (buğday)',216,'yemek kaşığı',6],['Yulaf kepeği',246,'yemek kaşığı',8],['Bulgur (köftelik, çiğ)',342,'su bardağı',160]
]],
['🍞','Ekmek ve unlu mamuller',[
 ['Beyaz ekmek',265,'dilim',30],['Tam buğday ekmeği',245,'dilim',30],['Çavdar ekmeği',259,'dilim',30],['Kepekli ekmek',250,'dilim',30],['Köy ekmeği',260,'dilim',40],
 ['Ekşi mayalı ekmek',260,'dilim',40],['Somun ekmek (çeyrek)',265,'çeyrek',55],['Somun ekmek (yarım)',265,'yarım',110],['Bazlama',270,'adet',130],['Yufka',315,'yaprak',100],
 ['Lavaş',275,'adet',60],['Dürüm ekmeği (tortilla)',310,'adet',60],['Ramazan pidesi',270,'dilim',50],['Simit',300,'adet',100],['Açma',390,'adet',90],
 ['Poğaça',380,'adet',70],['Peynirli poğaça',370,'adet',80],['Zeytinli poğaça',370,'adet',80],['Çatal',420,'adet',70],['Pişi',340,'adet',60,'hamur kızartması'],
 ['Kruvasan',406,'adet',60],['Çikolatalı kruvasan',420,'adet',70],['Hamburger ekmeği',270,'adet',60],['Tost ekmeği',265,'dilim',25],['Baget',270,'dilim',40],
 ['Grissini',410,'adet',6],['Galeta',410,'adet',8],['Peksimet',410,'adet',20],['Mısır ekmeği',250,'dilim',60],['Etimek',390,'dilim',10],
 ['Bagel',257,'adet',100],['Pita ekmeği',275,'adet',60],['Kandil simidi',430,'adet',25],['Tahinli çörek',420,'adet',100],['Haşhaşlı çörek',430,'adet',100],
 ['Boyoz',400,'adet',60],['Gevrek (İzmir)',300,'adet',100],['Kete',380,'adet',100],['Sıkma (sade)',290,'adet',120],['Kepekli galeta',390,'adet',8]
]],
['🍯','Kahvaltılık',[
 ['Siyah zeytin',250,'adet',4],['Yeşil zeytin',145,'adet',5],['Bal',305,'tatlı kaşığı',10],['Bal (yemek kaşığı)',305,'yemek kaşığı',21],['Reçel',260,'tatlı kaşığı',10],
 ['Tereyağı',720,'çay kaşığı',5],['Kaymak',430,'yemek kaşığı',15],['Bal-kaymak',380,'porsiyon',40],['Tahin',595,'yemek kaşığı',15],['Pekmez',290,'yemek kaşığı',20],
 ['Tahin-pekmez',450,'yemek kaşığı',20],['Fındık ezmesi',560,'yemek kaşığı',15],['Kakaolu fındık kreması',540,'yemek kaşığı',15,'nutella sarelle çikolatalı krema'],['Fıstık ezmesi',590,'yemek kaşığı',16,'peanut butter'],['Margarin',720,'çay kaşığı',5],
 ['Labne',230,'yemek kaşığı',20],['Krem peynir',250,'yemek kaşığı',20],['Zeytin ezmesi',300,'yemek kaşığı',15],['Acuka',220,'yemek kaşığı',15],['Granola',470,'kase',50],
 ['Müsli',370,'kase',50],['Mısır gevreği',380,'kase',40,'corn flakes'],['Çikolatalı mısır gevreği',390,'kase',40],['Yulaf lapası (sütlü)',90,'kase',250],['Yulaf lapası (sulu)',70,'kase',250],
 ['Serpme kahvaltı (kişi başı)',230,'tabak',450],['Kahvaltı tabağı (peynir, zeytin, domates, yumurta)',190,'tabak',300],['Kuymak (mıhlama)',330,'porsiyon',200,'muhlama karadeniz'],['Menemen',110,'porsiyon',200],['Kaygana',220,'porsiyon',150],
 ['Gül reçeli',270,'tatlı kaşığı',10],['Vişne reçeli',260,'tatlı kaşığı',10],['Çilek reçeli',260,'tatlı kaşığı',10],['Şekersiz reçel (light)',150,'tatlı kaşığı',10],['Hurma ezmesi',300,'yemek kaşığı',20],
 ['Avokado ezmesi',160,'yemek kaşığı',20],['Fındıklı kakaolu krema (light)',500,'yemek kaşığı',15],['Bal (petek)',320,'parça',30],['Kahvaltılık sos (domatesli)',90,'yemek kaşığı',20],['Çokokrem (bitter)',520,'yemek kaşığı',15]
]],
['🥛','Süt ve süt ürünleri',[
 ['Süt (tam yağlı)',61,'bardak (200 ml)',200],['Süt (yarım yağlı)',46,'bardak (200 ml)',200],['Süt (yağsız)',35,'bardak (200 ml)',200],['Laktozsuz süt',50,'bardak (200 ml)',200],['Kakaolu süt',80,'kutu (200 ml)',200],
 ['Çilekli süt',80,'kutu (200 ml)',200],['Muzlu süt',80,'kutu (200 ml)',200],['Yoğurt (tam yağlı)',65,'kase',200],['Yoğurt (yarım yağlı)',50,'kase',200],['Yoğurt (light)',40,'kase',200],
 ['Süzme yoğurt',100,'kase',150],['Meyveli yoğurt',95,'kase',150],['Ayran',38,'bardak (200 ml)',200],['Ayran (kutu, 300 ml)',38,'kutu',300],['Kefir',55,'bardak (200 ml)',200],
 ['Meyveli kefir',70,'şişe',250],['Krema (sıvı, %35)',335,'yemek kaşığı',15],['Krem şanti',260,'yemek kaşığı',10],['Süt tozu',496,'yemek kaşığı',8],['Badem sütü (şekersiz)',15,'bardak (200 ml)',200],
 ['Yulaf sütü',45,'bardak (200 ml)',200],['Soya sütü',42,'bardak (200 ml)',200],['Hindistan cevizi sütü (konserve)',197,'yemek kaşığı',15],['Keçi sütü',69,'bardak (200 ml)',200],['Kaymaklı yoğurt',95,'kase',200],
 ['Yoğurt (yemek kaşığı)',65,'yemek kaşığı',20],['Proteinli yoğurt',70,'kase',150],['Sütlü kahve kreması (toz)',540,'çay kaşığı',3],['Koyun yoğurdu',100,'kase',200],['Ayran (açık, büyük bardak)',38,'büyük bardak',300]
]],
['🧀','Peynirler',[
 ['Beyaz peynir',260,'dilim',30],['Beyaz peynir (light)',190,'dilim',30],['Kaşar peyniri',350,'dilim',20],['Eski kaşar',380,'dilim',20],['Tulum peyniri',360,'dilim',30],
 ['Ezine peyniri',290,'dilim',30],['Mihaliç peyniri',400,'dilim',30],['Örgü peyniri',300,'dilim',30],['Çeçil peyniri',280,'avuç',30,'tel peynir'],['Dil peyniri',280,'dilim',30],
 ['Lor peyniri',100,'yemek kaşığı',20],['Çökelek',100,'yemek kaşığı',20],['Hellim',320,'dilim',30],['Mozzarella',280,'dilim',25],['Parmesan',431,'yemek kaşığı',5],
 ['Cheddar',403,'dilim',20],['Rokfor',369,'dilim',20],['Keçi peyniri',300,'dilim',30],['Otlu peynir',290,'dilim',30],['Kolot peyniri',380,'dilim',30],
 ['Üçgen krem peynir',240,'adet',17],['Kars gravyeri',390,'dilim',20],['Çerkez peyniri',260,'dilim',30],['Burrata',300,'adet',125],['Rendelenmiş kaşar',350,'yemek kaşığı',10],
 ['Lor (light)',75,'yemek kaşığı',20],['Kaşar (light)',260,'dilim',20],['Maraş peyniri (sıkma)',290,'dilim',30],['Teleme',220,'dilim',30],['Mascarpone',430,'yemek kaşığı',15]
]],
['🥚','Yumurta',[
 ['Yumurta',155,'adet',55],['Haşlanmış yumurta',155,'adet',50],['Sahanda yumurta (2 yumurta, tereyağlı)',195,'porsiyon',120],['Omlet (sade, 2 yumurta)',180,'porsiyon',120],['Peynirli omlet',210,'porsiyon',150],
 ['Sucuklu yumurta',280,'porsiyon',150],['Pastırmalı yumurta',250,'porsiyon',140],['Kavurmalı yumurta',280,'porsiyon',150],['Çılbır',140,'porsiyon',250],['Ispanaklı yumurta',100,'porsiyon',200],
 ['Patatesli yumurta',170,'porsiyon',200],['Kıymalı yumurta',200,'porsiyon',180],['Yumurta akı',52,'adet',33],['Yumurta sarısı',322,'adet',17],['Bıldırcın yumurtası',158,'adet',10],
 ['Mantarlı omlet',150,'porsiyon',180],['Sebzeli omlet',130,'porsiyon',200],['Rafadan yumurta',155,'adet',50],['Poşe yumurta',145,'adet',50],['Yumurtalı ekmek (french toast)',230,'dilim',80]
]],
['🥩','Et, tavuk ve sakatat (pişmiş)',[
 ['Kıyma (orta yağlı, pişmiş)',250,'yemek kaşığı',20],['Kıyma (orta yağlı, çiğ)',220,'porsiyon',100],['Yağsız kıyma (çiğ)',150,'porsiyon',100],['Dana bonfile (ızgara)',200,'porsiyon',150,'biftek'],['Antrikot (ızgara)',270,'porsiyon',200],
 ['Dana kuşbaşı (pişmiş)',220,'porsiyon',150],['Kuzu pirzola (ızgara)',300,'adet',45],['Kuzu but (fırın)',230,'porsiyon',150],['Kuzu incik',220,'adet',200],['Kavurma',330,'yemek kaşığı',25],
 ['Tavuk göğsü (ızgara)',165,'porsiyon',150],['Tavuk but (derisiz, ızgara)',180,'adet',100],['Tavuk baget (derili)',215,'adet',80],['Tavuk kanat (ızgara)',250,'adet',35],['Tavuk pirzola',210,'porsiyon',150],
 ['Fırın tavuk (derili)',240,'porsiyon',200],['Haşlanmış tavuk',165,'porsiyon',150],['Hindi göğsü (fırın)',135,'porsiyon',150],['Tavuk ciğeri (sote)',170,'porsiyon',120],['Ciğer (ızgara)',180,'porsiyon',120],
 ['Izgara köfte',250,'adet',25],['Hamburger köftesi',250,'adet',100],['Kuzu kaburga (fırın)',360,'porsiyon',150],['Dana haşlama',200,'porsiyon',150],['Kuzu haşlama',220,'porsiyon',150],
 ['Dana dil (haşlanmış)',280,'porsiyon',100],['Böbrek (sote)',160,'porsiyon',100],['Yürek (sote)',170,'porsiyon',100],['Uykuluk',300,'porsiyon',100],['Dana kaburga (fırın)',330,'porsiyon',200],
 ['Tavuk kalçalı but (fırın)',230,'adet',150],['Hindi but (fırın)',190,'porsiyon',150],['Tavuk incik',200,'adet',70],['Bonfile (çiğ)',150,'porsiyon',150],['Kuzu kuşbaşı (sote)',250,'porsiyon',150]
]],
['🐟','Balık ve deniz ürünleri',[
 ['Hamsi tava',280,'porsiyon',200],['Hamsi (ızgara/buğulama)',165,'porsiyon',200],['Levrek (ızgara)',125,'adet (yenen kısım)',250],['Çipura (ızgara)',135,'adet (yenen kısım)',230],['Somon (ızgara)',206,'porsiyon',150],
 ['Alabalık (ızgara)',150,'adet',200],['Palamut (ızgara)',175,'porsiyon',200],['Lüfer (ızgara)',150,'adet',200],['İstavrit tava',230,'porsiyon',200],['Uskumru (ızgara)',262,'porsiyon',180],
 ['Sardalya (ızgara)',210,'porsiyon',150],['Mezgit tava',220,'porsiyon',200],['Barbun tava',230,'porsiyon',200],['Kalkan tava',230,'porsiyon',200],['Karides (haşlanmış)',99,'porsiyon',100],
 ['Karides güveç',160,'porsiyon',200],['Kalamar tava',230,'porsiyon',150],['Ahtapot (ızgara)',164,'porsiyon',150],['Midye (haşlanmış)',172,'porsiyon',100],['Hamsi buğulama',150,'porsiyon',200],
 ['Levrek buğulama',100,'porsiyon',300],['Balık pilaki',110,'porsiyon',250],['Fırında palamut',190,'porsiyon',250],['Kılıç şiş',170,'porsiyon',200],['Somon füme',117,'dilim',20],
 ['Balık köftesi',200,'adet',40],['Hamsikoli',240,'dilim',80],['Ahtapot salatası',90,'porsiyon',150],['Mürekkep balığı (ızgara)',150,'porsiyon',150],['Kefal (ızgara)',150,'porsiyon',200]
]],
['🥓','Şarküteri',[
 ['Sucuk',450,'dilim',10],['Pastırma',260,'dilim',10],['Salam (dana)',300,'dilim',10],['Sosis (dana)',270,'adet',45],['Hindi füme',110,'dilim',15],
 ['Hindi salam',150,'dilim',10],['Kavurma (konserve)',380,'yemek kaşığı',25],['Tavuk sosis',230,'adet',45],['Kokteyl sosis',280,'adet',10],['Pepperoni',500,'dilim',3],
 ['Dana füme göğüs (bacon tipi)',300,'dilim',15],['Dana jambon',120,'dilim',15],['Fermente sucuk (kangal)',450,'parmak',20],['Isıl işlem görmüş sucuk',330,'dilim',10],['Kuru et (biltong tipi)',300,'avuç',30]
]],
['🥣','Çorbalar',[
 ['Mercimek çorbası',60,'kase',250],['Ezogelin çorbası',65,'kase',250],['Yayla çorbası',55,'kase',250],['Tarhana çorbası',55,'kase',250],['Domates çorbası',55,'kase',250],
 ['Tavuk suyu çorbası (şehriyeli)',45,'kase',250],['Şehriye çorbası',45,'kase',250],['İşkembe çorbası',75,'kase',300],['Kelle paça çorbası',90,'kase',300],['Düğün çorbası',70,'kase',250],
 ['Mantar çorbası (kremalı)',70,'kase',250],['Brokoli çorbası (kremalı)',60,'kase',250],['Sebze çorbası',35,'kase',250],['Toyga çorbası',60,'kase',250],['Ayran aşı çorbası',50,'kase',250],
 ['Mısır çorbası (Karadeniz)',70,'kase',250],['Karalahana çorbası',45,'kase',250,'pancar çorbası karadeniz'],['Kabak çorbası',50,'kase',250],['Balık çorbası',50,'kase',250],['Beyran',85,'kase',400],
 ['Analı kızlı çorbası',90,'kase',300],['Kremalı tavuk çorbası',70,'kase',250],['Hazır çorba (paketten, hazırlanmış)',35,'kase',250],['Erişte çorbası',50,'kase',250],['Un çorbası',50,'kase',250],
 ['Hamsi çorbası',50,'kase',250],['Pazı çorbası',40,'kase',250],['Arabaşı çorbası',70,'kase',250],['Bamya çorbası (kuru bamya)',55,'kase',250],['Lebeniye çorbası',65,'kase',250],
 ['Kırmızı biber çorbası',50,'kase',250],['Kuru fasulye çorbası',70,'kase',250],['Patates çorbası',60,'kase',250],['Sütlü çorba (Karadeniz)',70,'kase',250],['Mercimek çorbası (restoran, tereyağlı)',75,'kase',300]
]],
['🍲','Etli yemekler ve ana yemekler',[
 ['Kuru fasulye (etli)',130,'tabak',250],['Nohut yemeği',140,'tabak',250],['Etli nohut',145,'tabak',250],['Ispanak yemeği (kıymalı)',85,'tabak',250],['Etli taze fasulye',90,'tabak',250],
 ['Karnıyarık',150,'adet',250],['Patlıcan musakka',140,'tabak',250],['Patates musakka',130,'tabak',250],['Kabak musakka',100,'tabak',250],['Türlü',85,'tabak',250],
 ['Etli bamya',90,'tabak',250],['Etli bezelye',95,'tabak',250],['Kıymalı patates',130,'tabak',250],['Kıymalı kabak',75,'tabak',250],['Etli kapuska',75,'tabak',250],
 ['Kabak dolma (etli)',110,'adet',120],['Biber dolma (etli)',120,'adet',120],['Domates dolma (etli)',110,'adet',150],['Soğan dolması',140,'adet',50],['Yaprak sarma (etli)',150,'adet',25],
 ['Lahana sarması (etli)',120,'adet',60],['Karalahana sarması',120,'adet',40],['Pazı sarması',120,'adet',40],['Hünkar beğendi',170,'porsiyon',300],['Ali Nazik',180,'porsiyon',300],
 ['Tas kebabı',160,'porsiyon',300],['Orman kebabı',140,'porsiyon',300],['Etli güveç',140,'porsiyon',300],['Kuzu tandır',250,'porsiyon',200],['Kuzu kapama',180,'porsiyon',300],
 ['Et sote',170,'porsiyon',250],['Tavuk sote',130,'porsiyon',250],['Fırın tavuk patates',150,'porsiyon',350],['Çerkez tavuğu',250,'porsiyon',150],['Piliç güveç',140,'porsiyon',300],
 ['Fırında köfte patates',170,'porsiyon',350],['Kadınbudu köfte',260,'adet',60],['İzmir köfte',150,'porsiyon',300],['İnegöl köfte',270,'adet',25],['Tekirdağ köftesi',270,'adet',25],
 ['Sulu köfte (ekşili)',110,'tabak',300],['İçli köfte (kızartma)',260,'adet',70],['İçli köfte (haşlama)',190,'adet',70],['Mercimek köftesi',150,'adet',30],['Fırında patates (yağlı, baharatlı)',130,'porsiyon',200],
 ['Patates püresi',110,'kase',200],['Kıymalı makarna',180,'tabak',250],['Fırın makarna',200,'dilim',200],['Elbasan tava',150,'porsiyon',300],['Kağıt kebabı',150,'porsiyon',300],
 ['Çökertme kebabı',220,'porsiyon',350],['Saç kavurma',250,'porsiyon',250],['Testi kebabı',150,'porsiyon',350],['Tirit',170,'porsiyon',350],['Keşkek',140,'kase',250],
 ['Etli ekmek (Konya)',230,'adet',300],['Kayseri yağlaması',280,'dilim',150],['Hingel',200,'porsiyon',300],['Mumbar dolması',230,'porsiyon',200],['Kaburga dolması',260,'porsiyon',300],
 ['Fellah köftesi',160,'porsiyon',300],['Oruk',250,'adet',100],['Yuvarlama',110,'kase',350],['Patlıcan oturtma',130,'porsiyon',250],['Patates oturtma',130,'porsiyon',250],
 ['Tavuk haşlama (sebzeli)',110,'porsiyon',300],['Tavuk kavurma',190,'porsiyon',200],['Mantarlı tavuk',140,'porsiyon',250],['Kremalı tavuk',170,'porsiyon',250],['Fırında tavuk but',220,'adet',150],
 ['Tavuklu bezelye',100,'tabak',250],['Etli patates yemeği',120,'tabak',250],['Fasulye turşusu kavurması',90,'tabak',200],['Karalahana yemeği (kıymalı)',70,'tabak',250],['Hamsili pilav',220,'porsiyon',250],
 ['Kuzu çevirme',250,'porsiyon',200],['Tavuk tandır',200,'porsiyon',250],['Ankara tava',160,'porsiyon',350],['Simit kebabı',260,'porsiyon',250],['Kuyu kebabı',250,'porsiyon',250],
 ['Kuru patlıcan dolması',180,'adet',60],['Mantı (yoğurtlu)',180,'tabak',250],['Erişte (tereyağlı)',200,'tabak',200],['Kıymalı ıspanaklı börek dolgusu',150,'kase',200],['Kurban kavurması (sulu)',250,'porsiyon',200],
 ['Sebzeli tavuk (fırın)',120,'porsiyon',300],['Tavuk ciğer sote',170,'porsiyon',150],['Köfte (fırında, sulu)',180,'porsiyon',250],['Kıymalı bulgur',170,'tabak',250],['Patlıcan kebabı',220,'porsiyon',300]
]],
['🫒','Zeytinyağlılar ve sebze yemekleri',[
 ['Taze fasulye (zeytinyağlı)',75,'tabak',200],['Ispanak (zeytinyağlı)',60,'tabak',200],['İmam bayıldı',130,'adet',250],['Pırasa (zeytinyağlı)',85,'tabak',200],['Kereviz (zeytinyağlı)',85,'tabak',200],
 ['Enginar (zeytinyağlı)',100,'adet',150],['Barbunya pilaki',130,'tabak',200],['Börülce (zeytinyağlı)',100,'tabak',200],['Taze bakla (zeytinyağlı)',90,'tabak',200],['Fasulye pilaki',120,'tabak',200],
 ['Biber dolma (zeytinyağlı)',150,'adet',100],['Yaprak sarma (zeytinyağlı)',170,'adet',20],['Lahana sarması (zeytinyağlı)',140,'adet',60],['Kabak (zeytinyağlı)',60,'tabak',200],['Kabak çiçeği dolması',150,'adet',30],
 ['Patlıcan kızartması',220,'porsiyon',150],['Kabak kızartması',190,'porsiyon',150],['Karnabahar kızartması',150,'porsiyon',150],['Biber kızartması',150,'porsiyon',100],['Mücver',200,'adet',50],
 ['Şakşuka',140,'porsiyon',200],['Ratatuy',70,'porsiyon',250],['Fırın sebze',90,'porsiyon',250],['Ege otları (zeytinyağlı)',70,'porsiyon',150],['Şevketi bostan',80,'porsiyon',200],
 ['Kuru fasulye (zeytinyağlı)',120,'tabak',200],['Pazı kavurma',70,'porsiyon',200],['Karnabahar (zeytinyağlı)',65,'tabak',200],['Bezelye (zeytinyağlı)',90,'tabak',200],['Kuru dolma (zeytinyağlı)',180,'adet',50],
 ['Bamya (zeytinyağlı)',70,'tabak',200],['Patates yemeği (zeytinyağlı)',100,'tabak',250],['Kabak sote',55,'porsiyon',200],['Mantar sote',70,'porsiyon',150],['Sebze sote',70,'porsiyon',200],
 ['Ispanaklı pirinç',100,'tabak',250],['Lahana kavurma',70,'porsiyon',200],['Kızartma tabağı (karışık)',200,'tabak',250],['Patlıcan salatası (közlenmiş)',70,'kase',150],['Semizotu (zeytinyağlı)',60,'tabak',200]
]],
['🍚','Pilav ve makarna',[
 ['Pirinç pilavı (tereyağlı)',160,'tabak',200],['Şehriyeli pilav',165,'tabak',200],['Bulgur pilavı',150,'tabak',200],['Domatesli bulgur pilavı',140,'tabak',200],['Nohutlu pilav',165,'tabak',200],
 ['İç pilav',190,'tabak',200],['Etli pilav',190,'tabak',250],['Tavuklu pilav',170,'tabak',250],['Perde pilavı',260,'dilim',250],['Mercimekli bulgur pilavı',150,'tabak',200,'müceddere'],
 ['Sebzeli pilav',140,'tabak',200],['Arpa şehriye pilavı',160,'tabak',200],['Firik pilavı',150,'tabak',200],['Kuskus pilavı',150,'tabak',200],['Makarna (soslu)',160,'tabak',200],
 ['Domates soslu makarna',140,'tabak',250],['Kremalı makarna',250,'tabak',250,'alfredo'],['Bolonez soslu makarna',165,'tabak',300],['Peynirli makarna',210,'tabak',250],['Yoğurtlu makarna',150,'tabak',250],
 ['Makarna salatası',160,'kase',200],['Ton balıklı makarna',170,'tabak',250],['Pesto soslu makarna',220,'tabak',250],['Spagetti carbonara',290,'tabak',300],['Lazanya',160,'dilim',300],
 ['Mantarlı risotto',160,'tabak',300],['Gnocchi (soslu)',180,'tabak',250],['Ravioli (peynirli, soslu)',200,'tabak',250],['Penne arrabbiata',150,'tabak',300],['Mantı (tereyağı soslu, restoran)',200,'tabak',300]
]],
['🥧','Börek, pide ve hamur işleri',[
 ['Su böreği',280,'dilim',120],['Sigara böreği',300,'adet',25],['Kol böreği (ıspanaklı)',270,'dilim',100],['Peynirli tepsi böreği',280,'dilim',120],['Kıymalı börek',280,'dilim',120],
 ['Patatesli börek',260,'dilim',120],['Gözleme (peynirli)',250,'adet',220],['Gözleme (patatesli)',240,'adet',220],['Gözleme (kıymalı)',260,'adet',220],['Gözleme (ıspanaklı)',230,'adet',220],
 ['Pide (kıymalı)',250,'adet',300],['Kaşarlı pide',270,'adet',280],['Kuşbaşılı pide',240,'adet',300],['Karışık pide',260,'adet',300],['Yumurtalı pide',250,'adet',280],
 ['Karadeniz pidesi (kaşarlı, tereyağlı)',300,'adet',350],['Lahmacun',220,'adet',120],['Fındık lahmacun',240,'adet',60],['Çiğ börek',300,'adet',100],['Paçanga böreği',300,'adet',80],
 ['Talaş böreği',330,'adet',100],['Katmer (fıstıklı)',420,'porsiyon',200],['Kumru',260,'adet',250],['Tost (kaşarlı)',290,'adet',130],['Karışık tost',280,'adet',160],
 ['Ayvalık tostu',260,'adet',300],['Sandviç (peynirli)',250,'adet',150],['Sandviç (hindi füme)',230,'adet',160],['Sucuklu tost',310,'adet',150],['Kaşarlı simit',320,'adet',140],
 ['Kıymalı gözleme (sac)',260,'adet',220],['Bafra pidesi',260,'adet',250],['Kapalı pide',260,'adet',300],['Sıkma (peynirli)',270,'adet',150],['Kaytaz böreği',300,'adet',100],
 ['Puf böreği',330,'adet',60],['Tepsi böreği (kıymalı)',280,'dilim',120],['Ispanaklı börek',250,'dilim',120],['Milföy böreği',350,'adet',70],['Börek (pastane, peynirli)',320,'porsiyon',150]
]],
['🍢','Kebap ve ızgara',[
 ['Adana kebap',280,'porsiyon (et)',200],['Adana kebap (tam porsiyon: lavaş, pilav, garnitür)',220,'tabak',500],['Urfa kebap',270,'porsiyon (et)',200],['Beyti sarma',250,'porsiyon',300],['İskender kebap',200,'porsiyon',400],
 ['Şiş kebap (kuzu)',230,'porsiyon (et)',180],['Tavuk şiş',165,'porsiyon (et)',180],['Tavuk şiş (tam porsiyon)',160,'tabak',500],['Çöp şiş',250,'şiş',30],['Cağ kebabı',260,'şiş',100],
 ['Ciğer şiş',190,'porsiyon',180],['Kanat (ızgara, porsiyon)',250,'porsiyon',250],['Pirzola (porsiyon)',300,'porsiyon',200],['Kokoreç (yarım ekmek)',260,'porsiyon',250],['Tantuni dürüm',230,'adet',200],
 ['Tavuk kanat (acılı)',260,'porsiyon',250],['Kuzu şiş (tam porsiyon)',220,'tabak',450],['Izgara köfte (tam porsiyon)',220,'tabak',400],['Karışık ızgara',250,'tabak',450],['Patlıcanlı kebap',230,'porsiyon',300],
 ['Fıstıklı kebap',290,'porsiyon',200],['Ali Nazik kebap',180,'porsiyon',350],['Yoğurtlu kebap',190,'porsiyon',400],['Tavuk pirzola (ızgara porsiyon)',210,'porsiyon',200],['Kaburga (ızgara)',350,'porsiyon',200]
]],
['🥙','Döner ve sokak lezzetleri',[
 ['Döner (et)',220,'porsiyon',150],['Tavuk döner',190,'porsiyon',150],['Et döner dürüm',230,'adet',300],['Tavuk döner dürüm',210,'adet',280],['Et döner ekmek arası',240,'adet',300],
 ['Tavuk döner ekmek arası',220,'adet',280],['Pilav üstü döner',200,'porsiyon',350],['Balık ekmek',210,'adet',300],['Midye dolma',200,'adet',20],['Midye tava',240,'porsiyon',150],
 ['Kumpir',150,'adet',600],['Islak hamburger',280,'adet',110],['Çiğ köfte (etsiz)',180,'parmak',30],['Çiğ köfte dürüm',220,'adet',250],['Ciğer dürüm',220,'adet',250],
 ['Kestane kebap',245,'adet',10],['Sucuk ekmek',330,'adet',200],['Köfte ekmek',260,'adet',250],['Kokoreç (çeyrek)',260,'porsiyon',180],['Tantuni (ekmek arası)',230,'adet',250],
 ['Waffle (meyveli, çikolatalı)',330,'adet',250],['Pamuk şeker',390,'adet',30],['Macun şekeri',350,'çubuk',20],['Lokma (sokak)',330,'adet',15],['Mısır (bardakta, soslu)',140,'bardak',200],
 ['Kokoreç (yarım ekmek, bol)',260,'adet',300],['Dürüm (karışık)',230,'adet',300],['Ayvalık tostu (sokak)',260,'adet',300],['Simit + peynir',300,'porsiyon',140],['Hamsi ekmek',230,'adet',250]
]],
['🥗','Meze ve salatalar',[
 ['Çoban salata',40,'kase',200],['Cacık',50,'kase',200],['Söğüş tabağı (domates, salatalık, biber)',18,'tabak',200],['Mevsim salata',40,'kase',200],['Yeşil salata',25,'kase',150],
 ['Gavurdağı salatası',110,'kase',200],['Kısır',150,'kase',150],['Piyaz',120,'kase',200],['Sezar salata',180,'porsiyon',250],['Ton balıklı salata',150,'porsiyon',250],
 ['Tavuklu salata',120,'porsiyon',300],['Roka salatası',60,'kase',150],['Patates salatası',120,'kase',200],['Rus salatası',200,'kase',150],['Yoğurtlu havuç',90,'yemek kaşığı',30],
 ['Humus',170,'yemek kaşığı',30],['Haydari',130,'yemek kaşığı',30],['Atom (acılı yoğurt)',150,'yemek kaşığı',30],['Acılı ezme',50,'yemek kaşığı',30],['Muhammara',300,'yemek kaşığı',20],
 ['Babagannuş',120,'yemek kaşığı',30],['Fava',130,'dilim',60],['Deniz börülcesi salatası',70,'porsiyon',100],['Girit ezmesi',320,'yemek kaşığı',25],['Topik',220,'adet',80],
 ['Tarama',400,'yemek kaşığı',20],['Semizotu (yoğurtlu)',60,'kase',150],['Közlenmiş biber (zeytinyağlı)',70,'porsiyon',100],['Patlıcan ezmesi (yoğurtlu)',110,'yemek kaşığı',30],['Mercimek salatası',140,'kase',150],
 ['Turşu (karışık)',15,'kase',100],['Meze tabağı (karışık)',180,'tabak',200],['Yeşil mercimek salatası',130,'kase',150],['Kinoa salatası',130,'kase',200],['Akdeniz salatası (peynirli)',110,'kase',250],
 ['Çingene pilavı',140,'kase',150],['Pancar salatası',60,'kase',150],['Fasulye salatası (haşlama)',110,'kase',150],['Antep ezmesi',60,'yemek kaşığı',30],['Rus salatası (yemek kaşığı)',200,'yemek kaşığı',25]
]],
['🫙','Soslar ve yağlar',[
 ['Zeytinyağı',880,'yemek kaşığı',13],['Ayçiçek yağı',884,'yemek kaşığı',13],['Mayonez',680,'yemek kaşığı',14],['Light mayonez',300,'yemek kaşığı',14],['Ketçap',110,'yemek kaşığı',15],
 ['Hardal',66,'tatlı kaşığı',8],['Barbekü sos',170,'yemek kaşığı',15],['Ranch sos',430,'yemek kaşığı',15],['Soya sosu',53,'yemek kaşığı',15],['Nar ekşisi',300,'yemek kaşığı',15],
 ['Sirke',18,'yemek kaşığı',15],['Limon suyu',22,'yemek kaşığı',15],['Hazır salata sosu',300,'yemek kaşığı',15],['Pesto',450,'yemek kaşığı',15],['Domates sosu (makarna)',50,'yemek kaşığı',20],
 ['Beşamel sos',120,'kepçe',60],['Sarımsaklı yoğurt',70,'yemek kaşığı',20],['Acı sos',30,'çay kaşığı',5],['Çikolata sosu',330,'yemek kaşığı',20],['Karamel sos',380,'yemek kaşığı',20],
 ['Domates salçası',80,'yemek kaşığı',15],['Biber salçası',75,'yemek kaşığı',15],['Tahin sosu',400,'yemek kaşığı',15],['Sarımsaklı mayonez',600,'yemek kaşığı',14],['Tereyağı (yemek kaşığı)',720,'yemek kaşığı',13],
 ['Kızartma yağı (emilen, porsiyon başı)',884,'porsiyon',10],['Fındık yağı',884,'yemek kaşığı',13],['Hindistan cevizi yağı',862,'yemek kaşığı',13],['Sade yağ',876,'yemek kaşığı',13],['Kuyruk yağı',800,'yemek kaşığı',12]
]],
['🍯','Şerbetli ve geleneksel tatlılar',[
 ['Baklava',430,'dilim',40],['Fıstıklı baklava',430,'dilim',35],['Cevizli baklava',420,'dilim',40],['Şöbiyet',440,'adet',50],['Sarığı burma',430,'adet',50],
 ['Havuç dilimi',430,'adet',60],['Tel kadayıf',380,'porsiyon',120],['Künefe',350,'porsiyon',150],['Kadayıf dolması',400,'adet',60],['Şekerpare',400,'adet',40],
 ['Revani',300,'dilim',100],['Tulumba',360,'adet',20],['Lokma tatlısı',330,'adet',15],['Kalburabastı',400,'adet',40,'hurma tatlısı'],['Ekmek kadayıfı (kaymaklı)',380,'porsiyon',150],
 ['Kemalpaşa',320,'adet',30],['Burma kadayıf',420,'dilim',60],['Bülbül yuvası',430,'adet',50],['Laz böreği',260,'dilim',150],['Güllaç',150,'porsiyon',150],
 ['Aşure',130,'kase',200],['Kabak tatlısı',170,'porsiyon',150],['Ayva tatlısı',160,'yarım',200],['İrmik helvası',350,'porsiyon',100],['Un helvası',450,'porsiyon',100],
 ['Tahin helvası',520,'dilim',40],['Cezerye',380,'adet',20],['Lokum',350,'adet',15],['Fıstıklı lokum',380,'adet',15],['Pişmaniye',480,'avuç',30],
 ['İncir tatlısı',270,'adet',50],['Zerde',110,'kase',150],['Höşmerim',330,'porsiyon',120],['Kaymaklı kadayıf',400,'porsiyon',150],['Kestane şekeri',300,'adet',20],
 ['Peynir helvası',340,'porsiyon',120],['Badem ezmesi',450,'adet',15],['Kerebiç',350,'adet',40],['Bici bici',130,'kase',200],['Şam tatlısı',330,'dilim',80],
 ['Hasır kadayıf',420,'dilim',60],['Soğuk baklava',380,'dilim',60],['Fıstıklı sarma',450,'adet',40],['Ballı lokma (İzmir)',350,'adet',15],['Kaymaklı ekmek kadayıfı (restoran)',380,'porsiyon',200]
]],
['🍮','Sütlü tatlılar',[
 ['Sütlaç',130,'kase',180],['Fırın sütlaç',130,'kase',180],['Muhallebi',120,'kase',150],['Su muhallebisi',100,'kase',150],['Kazandibi',150,'kase',150],
 ['Tavuk göğsü (tatlı)',150,'kase',150],['Keşkül',130,'kase',150],['Supangle',150,'kase',150],['Magnolia',220,'kase',150],['Trileçe',220,'dilim',120],
 ['Profiterol',280,'porsiyon',150],['Krem karamel',130,'adet',120],['Puding (sütle hazırlanmış)',115,'kase',150],['Dondurmalı irmik tatlısı',230,'porsiyon',150],['Sakızlı muhallebi',125,'kase',150],
 ['Güllaç (dilim)',150,'dilim',120],['Panna cotta',230,'adet',120],['Proteinli puding',80,'adet',200],['Pirinç muhallebisi',120,'kase',150],['Kaymaklı dondurmalı tatlı',250,'porsiyon',150]
]],
['🎂','Pasta, kek ve kurabiye',[
 ['Kek',380,'dilim',60],['Kakaolu kek',390,'dilim',60],['Limonlu kek',380,'dilim',60],['Havuçlu kek',410,'dilim',80],['Islak kek',380,'dilim',80],
 ['Mozaik pasta',420,'dilim',50],['Yaş pasta (kremalı)',300,'dilim',120],['Çikolatalı pasta',370,'dilim',120],['Çilekli pasta',260,'dilim',120],['Cheesecake',320,'dilim',120],
 ['San Sebastian cheesecake',330,'dilim',130],['Tiramisu',280,'dilim',120],['Brownie',430,'adet',60],['Muffin (çikolatalı)',400,'adet',110],['Kurabiye',480,'adet',20],
 ['Tuzlu kurabiye',480,'adet',15],['Un kurabiyesi',520,'adet',20],['Acıbadem kurabiyesi',440,'adet',15],['Elmalı turta',280,'dilim',100],['Meyveli tart',290,'dilim',100],
 ['Ekler',260,'adet',60],['Cupcake',380,'adet',70],['Donut (şekerli)',420,'adet',60],['Çikolata kaplı donut',450,'adet',70],['Makaron',400,'adet',12],
 ['Paskalya çöreği',380,'dilim',50],['Milföy tatlısı',450,'adet',80],['Pankek (şuruplu)',230,'porsiyon',200],['Krep (çikolatalı)',300,'adet',120],['Cookie (büyük, damla çikolatalı)',470,'adet',60],
 ['Kurabiye (kaşarlı)',450,'adet',20],['Elmalı kurabiye',430,'adet',30],['Fındıklı kurabiye',500,'adet',20],['Pastane pastası (fıstıklı)',380,'dilim',120],['Doğum günü pastası',350,'dilim',130],
 ['Rulo pasta',330,'dilim',70],['Waffle (sade)',290,'adet',75],['Sufle',380,'adet',100],['Kruvasan (tereyağlı)',406,'adet',60],['Brownie (dondurmalı)',350,'porsiyon',150]
]],
['🍦','Dondurma',[
 ['Dondurma',200,'top',50],['Maraş dondurması',230,'top',60],['Külah dondurma (2 top)',220,'adet',120],['Çubuk dondurma (çikolata kaplı)',300,'adet',70,'magnum'],['Meyveli buzlu dondurma',90,'adet',60],
 ['Kornet dondurma',280,'adet',75,'cornetto'],['Sorbe',130,'top',60],['Frozen yoğurt',130,'kase',150],['Gelato',220,'top',60],['Kutu dondurma (vanilyalı)',200,'kase',100],
 ['Dondurmalı sandviç',250,'adet',80],['Light dondurma',130,'top',50],['Proteinli dondurma',100,'kase',100],['Sundae (karamelli)',200,'adet',160],['Dondurma (çikolatalı)',230,'top',50]
]],
['🍫','Çikolata ve şekerleme',[
 ['Sütlü çikolata',535,'tablet',80],['Sütlü çikolata (kare)',535,'kare',6],['Bitter çikolata (%70)',600,'kare',6],['Beyaz çikolata',540,'kare',6],['Fındıklı çikolata',550,'tablet',80],
 ['Çikolatalı gofret',520,'adet',35],['Karamelli çikolata bar',480,'adet',50,'snickers mars'],['Fındık kremalı gofret',540,'adet',40],['Çikolatalı bisküvi bar',500,'adet',40,'twix'],['Draje çikolata',480,'avuç',30,'mm'],
 ['Jelibon',340,'avuç',30],['Şekersiz sakız',200,'adet',1.5],['Akide şekeri',390,'adet',5],['Lolipop',390,'adet',10],['Kesme şeker',400,'adet',4],
 ['Toz şeker',400,'çay kaşığı',4],['Esmer şeker',380,'çay kaşığı',4],['Akçaağaç şurubu',260,'yemek kaşığı',20],['Krokan',500,'avuç',30],['Marshmallow',320,'adet',7],
 ['Nane şekeri',390,'adet',3],['Gofret',500,'adet',20],['Bonbon',450,'adet',10],['Pralin',520,'adet',12],['Kakao (toz)',228,'yemek kaşığı',6],
 ['Çikolata kaplı badem',560,'avuç',30],['Fındıklı kaplama (Ordu)',530,'avuç',30],['Çikolata (mini paket)',535,'adet',15],['Toz şeker (yemek kaşığı)',400,'yemek kaşığı',12],['Hindistan cevizli çikolata bar',470,'adet',30,'bounty']
]],
['🍿','Atıştırmalık, cips ve bisküvi',[
 ['Cips',540,'küçük paket',40],['Cips (büyük paket)',540,'paket',150],['Mısır cipsi (tortilla)',500,'paket',80,'doritos'],['Kutu cips (silindir)',530,'kutu',165,'pringles'],['Patlamış mısır (tuzlu, yağlı)',500,'kase',30],
 ['Patlamış mısır (sinema, orta kova)',500,'kova',130],['Mikrodalga patlamış mısır',470,'paket',90],['Kraker (tuzlu)',470,'avuç',30],['Pirinç patlağı',390,'adet',9],['Çubuk kraker',400,'avuç',30],
 ['Bisküvi (sade)',440,'adet',8,'petibör'],['Kremalı bisküvi',480,'adet',12],['Çikolatalı bisküvi',490,'adet',15],['Yulaflı bisküvi',450,'adet',12],['Paketli kek (kremalı)',420,'adet',45,'topkek browni'],
 ['Paketli çikolatalı kek',420,'adet',40],['Balık kraker',480,'avuç',30],['Pretzel',380,'avuç',30],['Granola bar',420,'adet',30],['Protein bar',360,'adet',50],
 ['Meyve barı',340,'adet',35],['Meyve cipsi',350,'paket',30],['Bebe bisküvisi',430,'adet',7],['Çıtır mısır (kavrulmuş)',450,'avuç',30],['Peynirli kraker',490,'avuç',30],
 ['Çokonat tipi kurabiye',490,'adet',30],['Gofret (paket)',520,'paket',40],['Kepekli kraker',430,'adet',10],['Pirinç cipsi',420,'paket',60],['Mısır patlağı (şekerli)',400,'kase',30]
]],
['🌰','Kuruyemiş ve çerez',[
 ['Fındık (iç)',630,'avuç',30],['Kavrulmuş fındık',650,'avuç',30],['Fındık (adet)',630,'adet',1.4],['Ceviz',650,'avuç',30],['Ceviz içi (yarım)',650,'adet',3],
 ['Badem',580,'avuç',30],['Antep fıstığı',570,'avuç',30],['Kaju',560,'avuç',30],['Kavrulmuş fıstık',590,'avuç',30,'yer fıstığı'],['Leblebi (sarı)',370,'avuç',30],
 ['Beyaz leblebi',390,'avuç',30],['Şekerli leblebi',420,'avuç',30],['Ay çekirdeği içi',585,'avuç',30],['Ay çekirdeği (kabuklu)',300,'avuç',30],['Kabak çekirdeği (kabuklu)',450,'avuç',30],
 ['Kabak çekirdeği içi',560,'avuç',30],['Karışık kuruyemiş',600,'avuç',30],['Karışık çerez (leblebi, üzüm, fıstık)',470,'avuç',30],['Çam fıstığı',670,'yemek kaşığı',10],['Brezilya cevizi',660,'adet',5],
 ['Pekan cevizi',690,'avuç',30],['Makadamya',720,'avuç',30],['Kaplamalı fıstık',520,'avuç',30],['Susam',570,'yemek kaşığı',9],['Kabuklu fıstık (yer)',300,'avuç',40],
 ['Tuzlu badem',600,'avuç',30],['Fıstık (Antep, kabuklu)',300,'avuç',40],['Kavrulmuş nohut (tuzlu)',380,'avuç',30],['Çiğ kuruyemiş karışımı',590,'avuç',30],['Bal kabağı çekirdeği (tuzlu)',450,'avuç',30]
]],
['🥫','Konserveler',[
 ['Ton balığı (yağlı, süzülmüş)',200,'kutu',120],['Ton balığı (suda)',110,'kutu',120],['Sardalya konservesi',210,'kutu',90],['Konserve mısır',80,'kase',100],['Konserve bezelye',70,'kase',100],
 ['Konserve nohut',120,'kase',150],['Konserve barbunya',100,'kase',150],['Fasulye konservesi (soslu)',85,'kutu',400],['Domates konservesi (doğranmış)',25,'kase',200],['Salatalık turşusu',12,'adet',40],
 ['Lahana turşusu',20,'kase',100],['Sarma konservesi (zeytinyağlı)',190,'adet',20],['Közlenmiş biber (kavanoz)',30,'adet',50],['Kapari',23,'yemek kaşığı',10],['Mantar konservesi',25,'kase',100],
 ['Şeftali konservesi (şuruplu)',70,'kase',150],['Komposto',60,'kase',200],['Hazır yemek konservesi (etli nohut)',110,'kutu',400],['Hazır yemek konservesi (kuru fasulye)',120,'kutu',400],['Barbunya pilaki konservesi',110,'kutu',400],
 ['Sardalya (domatesli)',170,'kutu',100],['Uskumru konservesi',200,'kutu',125],['Zeytin (kavanoz, siyah)',250,'adet',4],['Biber turşusu',15,'adet',20],['Hazır dolma (kavanoz)',190,'adet',25]
]],
['🍜','Hazır gıdalar',[
 ['Hazır noodle (1 paket)',450,'paket',75],['Bardak makarna (hazır)',440,'bardak',65],['Hazır pilav (mikrodalga)',160,'paket',250],['Hazır sandviç (market)',240,'adet',160],['Hazır salata (market, soslu)',110,'kutu',250],
 ['Hazır wrap (market)',230,'adet',180],['Hazır humus (kavanoz)',250,'yemek kaşığı',30],['Hazır mercimek köftesi',150,'adet',30],['Hazır kek (paket, dilim)',400,'dilim',40],['Hazır çorba (bardak)',360,'paket',20],
 ['Hazır tavuk döner (market, ısıtılmış)',200,'paket',200],['Hazır köfte (market)',250,'adet',30],['Hazır mantı (pişmiş, soslu)',190,'tabak',250],['Kahvaltılık hazır krep',300,'adet',50],['Hazır milföy (pişmiş)',540,'kare',40],
 ['Puding (toz, hazırlanmış)',115,'kase',150],['Hazır yulaf kabı (meyveli)',380,'kap',60],['Hazır kumpir (market)',150,'adet',400],['Hazır makarna sosu (kremalı)',150,'yemek kaşığı',30],['Hazır pizza dilimi (market)',260,'dilim',120]
]],
['🧊','Dondurulmuş gıdalar',[
 ['Dondurulmuş pizza (bütün)',240,'adet',350],['Dondurulmuş mantı (haşlanmış, sade)',210,'porsiyon',150],['Dondurulmuş patates (fırında)',160,'porsiyon',150],['Dondurulmuş patates (kızartma)',300,'porsiyon',150],['Tavuk nugget (fırında)',250,'adet',20],
 ['Tavuk şinitzel (dondurulmuş)',240,'adet',100],['Balık kroket',220,'adet',28,'fish finger'],['Dondurulmuş sebze karışımı',50,'kase',150],['Dondurulmuş bezelye',77,'kase',150],['Sigara böreği (dondurulmuş, kızartılmış)',310,'adet',25],
 ['Paçanga (dondurulmuş, kızartılmış)',300,'adet',80],['Dondurulmuş köfte (pişmiş)',260,'adet',30],['Dondurulmuş hamburger köftesi',250,'adet',90],['Dondurulmuş lazanya',140,'paket',400],['Dondurulmuş börek (pişmiş)',300,'dilim',100],
 ['Dondurulmuş waffle',290,'adet',40],['Dondurulmuş çilek',35,'kase',150],['Dondurulmuş içli köfte (kızartılmış)',260,'adet',60],['Dondurulmuş karides',80,'porsiyon',100],['Çıtır tavuk (dondurulmuş, fırın)',250,'porsiyon',150],
 ['Dondurulmuş mısır',90,'kase',150],['Dondurulmuş ıspanak',25,'kase',150],['Dondurulmuş poğaça (pişmiş)',380,'adet',60],['Dondurulmuş gözleme (pişmiş)',250,'adet',200],['Dondurulmuş sosisli rulo',330,'adet',60]
]],
['🍔','Fast food',[
 ['Hamburger',250,'adet',220],['Cheeseburger',260,'adet',120],['Büyük hamburger (çift katlı)',250,'adet',220,'big mac'],['Büyük ızgara burger',235,'adet',290,'whopper'],['Tavuk burger',240,'adet',200],
 ['Balık burger',260,'adet',140],['Tavuk nugget',290,'adet',17],['Kızarmış tavuk kanat',290,'adet',35],['Kızarmış tavuk (çıtır but)',260,'adet',120],['Patates kızartması',310,'porsiyon',120],
 ['Patates kızartması (büyük)',310,'porsiyon',160],['Soğan halkası',330,'porsiyon',100],['Pizza',270,'dilim',110],['Margarita pizza',250,'dilim',100],['Karışık pizza',260,'dilim',110],
 ['Sucuklu pizza',280,'dilim',110],['Pizza (orta boy, bütün)',265,'adet',650],['Pizza (büyük boy, bütün)',265,'adet',900],['Hot dog',290,'adet',120],['Tavuk dürüm (fast food)',220,'adet',250],
 ['Burrito',210,'adet',300],['Taco',220,'adet',100],['Quesadilla',290,'adet',180],['Nachos (peynir soslu)',340,'porsiyon',200],['Milkshake',115,'bardak',400],
 ['Elmalı turta (fast food)',290,'adet',80],['Mozzarella stick',300,'adet',25],['Hamburger menü (burger, orta patates, kola)',155,'menü',700],['Tavuk menü (burger, patates, kola)',150,'menü',700],['Çıtır tavuk kova (8 parça)',260,'kova',800],
 ['Steakhouse burger',260,'adet',350],['Vejetaryen burger',200,'adet',200],['Tavuk wrap',220,'adet',220],['Sosisli sandviç',280,'adet',150],['Patates (elma dilim)',230,'porsiyon',150],
 ['Pizza (ince hamur, dilim)',240,'dilim',90],['Pizza (kalın kenar, dilim)',280,'dilim',130],['Kızarmış tavuk göğsü (çıtır)',250,'adet',150],['Fast food salata (soslu)',90,'kase',250],['Fast food kahvaltı (yumurtalı sandviç)',250,'adet',140]
]],
['☕','Kafe ürünleri',[
 ['Cheesecake (kafe)',320,'dilim',130],['Brownie (kafe)',430,'adet',80],['Muffin (kafe)',400,'adet',120],['Cookie (kafe)',470,'adet',70],['Kruvasan (kafe)',406,'adet',70],
 ['Tavuklu sandviç (kafe)',230,'adet',220],['Panini',260,'adet',200],['Bagel (krem peynirli)',280,'adet',130],['Avokado tost',220,'adet',180],['Simit sandviç',280,'adet',180],
 ['Tiramisu (kafe)',280,'dilim',130],['Kek (kafe dilimi)',390,'dilim',90],['Havuçlu kek (kafe)',410,'dilim',120],['Limonlu cheesecake',320,'dilim',130],['Smoothie bowl',110,'kase',350],
 ['Granola kase (yoğurtlu)',180,'kase',250],['Kafe kahvaltı tabağı',220,'tabak',400],['Waffle (kafe)',330,'adet',250],['Krep (muzlu, nutellalı)',300,'adet',180],['Mini sandviç',260,'adet',60]
]],
['🌍','Restoran yemekleri (dünya mutfağı)',[
 ['Sushi (maki, 1 parça)',150,'adet',25],['Kaliforniya rulosu (1 parça)',150,'adet',30],['Somon nigiri',160,'adet',35],['Sushi tabağı (12 parça)',150,'tabak',330],['Ramen',100,'kase',600],
 ['Pad thai',170,'porsiyon',350],['Kızarmış pilav (fried rice)',170,'porsiyon',300],['Tavuk tikka masala',150,'porsiyon',350],['Tavuk köri (pilavlı)',140,'porsiyon',450],['Tavuk fajita',160,'porsiyon',350],
 ['Tavuk şinitzel',260,'porsiyon',200],['Fish and chips',220,'porsiyon',400],['Poke bowl',130,'kase',450],['Falafel',330,'adet',17],['Falafel dürüm',230,'adet',300],
 ['Kung pao tavuk',170,'porsiyon',300],['Tatlı ekşi soslu tavuk',220,'porsiyon',300],['Dim sum',220,'adet',30],['Bahar rulosu',250,'adet',60],['Buffalo kanat',250,'porsiyon',250],
 ['Biftek (restoran, garnitürlü)',220,'tabak',450],['Burrito bowl',150,'kase',500],['Hindistan pilavı (biryani)',170,'porsiyon',350],['Naan ekmeği',290,'adet',90],['Paella',160,'porsiyon',350],
 ['Gyoza',200,'adet',25],['Tavuk teriyaki',160,'porsiyon',300],['Wok noodle (tavuklu)',150,'porsiyon',350],['Tom yum çorbası',40,'kase',350],['Moussaka (Yunan)',150,'porsiyon',300],
 ['Fettuccine Alfredo',250,'tabak',350],['Pizza Napoletana (bütün)',220,'adet',400],['Hamburger (restoran, patatesli)',240,'tabak',450],['Club sandviç (patatesli)',230,'tabak',400],['Kızarmış kalamar (restoran)',230,'porsiyon',200]
]],
['☕','Sıcak içecekler',[
 ['Çay (şekersiz)',1,'bardak',100],['Çay (1 şekerli)',17,'bardak',100],['Çay (2 şekerli)',33,'bardak',100],['Türk kahvesi (sade)',10,'fincan',70,'kahve sade'],['Türk kahvesi (orta)',39,'fincan',70,'kahve'],
 ['Türk kahvesi (şekerli)',67,'fincan',70,'kahve'],['Sütlü Türk kahvesi',60,'fincan',80],['Filtre kahve (sade)',2,'kupa',250],['Americano',1.5,'bardak',350],['Espresso',9,'shot',30],
 ['Latte (orta boy)',45,'bardak',350],['Cappuccino',32,'bardak',300],['Flat white',50,'bardak',240],['Mocha',80,'bardak',350],['Karamel macchiato',60,'bardak',350],
 ['Beyaz çikolatalı mocha',100,'bardak',350],['Sıcak çikolata',90,'bardak',300],['Salep',100,'bardak',250],['Chai tea latte',70,'bardak',350],['Matcha latte',60,'bardak',350],
 ['Bitki çayı',1,'kupa',250],['Yeşil çay',1,'kupa',250],['Ihlamur',1,'kupa',250],['Kuşburnu çayı',2,'kupa',250],['Hazır kahve (3’ü 1 arada)',430,'paket',18],
 ['Hazır kahve (2’si 1 arada)',470,'paket',10],['Neskafe (sade, sütlü)',30,'kupa',250],['Menengiç kahvesi',70,'fincan',100],['Dibek kahvesi',15,'fincan',70],['Sıcak süt (ballı)',80,'kupa',250],
 ['Latte (yulaf sütlü)',40,'bardak',350],['Latte (yağsız süt)',30,'bardak',350],['Şurup (kahve için, 1 pompa)',300,'pompa',10],['Çay (kupa, şekersiz)',1,'kupa',250],['Adaçayı',1,'kupa',250]
]],
['🥤','Soğuk içecekler',[
 ['Su',0,'bardak',200],['Maden suyu (sade)',0,'şişe',200],['Meyveli soda',35,'şişe',200],['Kola / gazlı içecek',42,'kutu (330 ml)',330],['Kola (şekersiz)',0.3,'kutu (330 ml)',330,'zero light diyet'],
 ['Gazoz',40,'kutu (330 ml)',330],['Portakallı gazoz',45,'kutu (330 ml)',330,'fanta'],['Limonlu gazoz',42,'kutu (330 ml)',330,'sprite'],['Soğuk çay (şeftali)',30,'kutu (330 ml)',330,'ice tea'],['Enerji içeceği',45,'kutu (250 ml)',250],
 ['Enerji içeceği (şekersiz)',3,'kutu (250 ml)',250],['Hazır meyve suyu',45,'bardak (200 ml)',200],['Meyve nektarı',50,'kutu (200 ml)',200],['%100 meyve suyu',45,'bardak (200 ml)',200],['Taze sıkma portakal suyu',45,'bardak',250],
 ['Şalgam suyu',10,'bardak',200],['Boza',100,'bardak',200],['Limonata',45,'bardak',300],['Smoothie (meyveli)',60,'bardak',350],['Soğuk kahve (şişe)',65,'şişe',250],
 ['Sporcu içeceği',25,'şişe',500],['Hindistan cevizi suyu',19,'kutu',330],['Vişne suyu',55,'bardak',200],['Osmanlı şerbeti',50,'bardak',200],['Kombucha',15,'şişe',330],
 ['Tonik',34,'kutu',250],['Buzlu latte',35,'bardak',400],['Frappe (kremalı, karamelli)',90,'bardak',400],['Cold brew (sade)',2,'bardak',350],['Kola (1 litre)',42,'litre',1000],
 ['Kola (büyük bardak, fast food)',42,'bardak',500],['Limonata (şekersiz)',5,'bardak',300],['Ayran (yayık)',35,'bardak',250],['Detoks suyu (meyveli su)',5,'şişe',500],['Proteinli içecek (hazır)',60,'şişe',330]
]],
['🍺','Alkollü içecekler',[
 ['Bira (50 cl)',43,'kutu',500],['Bira (33 cl)',43,'şişe',330],['Alkolsüz bira',20,'şişe',330],['Kırmızı şarap',85,'kadeh',150],['Beyaz şarap',82,'kadeh',150],
 ['Roze şarap',80,'kadeh',150],['Köpüklü şarap',76,'kadeh',120],['Rakı (tek, 4 cl)',270,'tek',40],['Rakı (duble, 8 cl)',270,'duble',80],['Rakı (35 cl şişe)',270,'şişe',350],
 ['Viski (tek, 4 cl)',250,'tek',40],['Votka (tek, 4 cl)',230,'tek',40],['Cin (tek, 4 cl)',230,'tek',40],['Tekila (shot)',230,'shot',40],['Rom (tek, 4 cl)',230,'tek',40],
 ['Konyak / brendi',240,'tek',40],['Likör',320,'shot',40],['Cin tonik',70,'bardak',250],['Mojito',80,'bardak',250],['Margarita kokteyli',170,'bardak',150],
 ['Piña colada',180,'bardak',250],['Aperol spritz',60,'bardak',250],['Sangria',90,'bardak',250],['Elma şarabı (cider)',50,'şişe',330],['Long Island ice tea',110,'bardak',250],
 ['Bira (fıçı, büyük)',43,'büyük',500],['Şarap (şişe, 75 cl)',85,'şişe',750],['Votka portakal',75,'bardak',250],['Bloody Mary',50,'bardak',250],['Duble viski (8 cl)',250,'duble',80]
]],
['💪','Sporcu ve diyet ürünleri',[
 ['Protein tozu (whey, 1 ölçek)',390,'ölçek',30],['Protein shake (sütle)',75,'bardak',300],['Protein shake (suyla)',40,'bardak',300],['Chia puding',140,'kase',200],['Enerji topu (hurmalı)',400,'adet',20],
 ['Tatlandırıcı',0,'adet',1],['Pirinç patlağı (fıstık ezmeli)',450,'adet',20],['Yulaf + muz + süt (kase)',100,'kase',300],['Kinoa kasesi (sebzeli)',120,'kase',300],['Haşlanmış tavuk + pirinç (fit tabak)',140,'tabak',350],
 ['Light ayran',25,'bardak',200],['Diyet bisküvi',400,'adet',10],['Proteinli cips',420,'paket',30],['Proteinli bar (düşük şekerli)',340,'adet',45],['BCAA içeceği',2,'şişe',500]
]]
];
