const sorular = [
    {
        soru: "Türkiye'nin başkenti neresidir?",
        cevaplar: ["İstanbul", "Ankara", "İzmir", "Bursa"],
        dogruCevap: "Ankara"
    },
    {
        soru: "İnternetin öncüsü olan ağ hangisidir?",
        cevaplar: ["ARPANET", "BITNET", "NSFNET", "INTNET"],
        dogruCevap: "ARPANET"
    },
    {
        soru: "4² x 2⁴ işleminin sonucu kaçtır?",
        cevaplar: ["16", "32", "128", "256"],
        dogruCevap: "256"
    },
    {
        soru: "Dünyanın en büyük okyanusu hangisidir?",
        cevaplar: ["Atlas Okyanusu", "Hint Okyanusu", "Arktik Okyanusu", "Pasifik Okyanusu"],
        dogruCevap: "Pasifik Okyanusu"
    },
    {
        soru: "Futbol sahasında kaç oyuncu bulunur?",
        cevaplar: ["10", "11", "12", "13"],
        dogruCevap: "11"
    },
    {
    soru: "Basketbolda bir maç kaç periyottan oluşur?",
        cevaplar: ["2", "3", "4", "5"],
        dogruCevap: "4"
    },
    {
        soru: "Su kaç derecede kaynar?",
        cevaplar: ["50°C", "75°C", "100°C", "150°C"],
        dogruCevap: "100°C"
    },
    {
        soru: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
        cevaplar: ["Venüs", "Mars", "Jüpiter", "Satürn"],
        dogruCevap: "Mars"
        },
    {
        soru: "Bilgisayarın merkezi işlem birimine ne ad verilir?",
        cevaplar: ["RAM", "ROM", "CPU", "GPU"],
        dogruCevap: "CPU"
    },
    {
        soru: "Google'ın ana arama motoru rakibi kimdir?",
        cevaplar: ["Yahoo", "Bing", "DuckDuckGo", "Ask"],
        dogruCevap: "Bing"
    },
    {
        soru: "JavaScript hangi tür dildir?",
        cevaplar: ["Statik", "Dinamik", "Makine", "Yorumlanmış"],
        dogruCevap: "Dinamik"
    },
    {
        soru: "HTML'de en büyük başlık etiketi hangisidir?",
        cevaplar: ["<h1>", "<h3>", "<h5>", "<h6>"],
        dogruCevap: "<h1>"
    },
    {
        soru: "Türkiye'nin en uzun nehri hangisidir?",
        cevaplar: ["Sakarya", "Kızılırmak", "Fırat", "Dicle"],
        dogruCevap: "Kızılırmak"
    },
    {
        soru: "Avrupa kıtasındaki en büyük ülke hangisidir?",
        cevaplar: ["Fransa", "Almanya", "İtalya", "Rusya"],
        dogruCevap: "Rusya"
    },
    {
        soru: "İstanbul'un Fethi hangi yıl gerçekleşti?",
        cevaplar: ["1450", "1453", "1460", "1492"],
        dogruCevap: "1453"
    },
    {
        soru: "Mona Lisa tablosunun ressamı kimdir?",
        cevaplar: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        dogruCevap: "Leonardo da Vinci"
    },
    {
        soru: "Sistine Şapeli'nin tavanını kim boyamıştır?",
        cevaplar: ["Michelangelo", "Donatello", "Raphael", "Leonardo da Vinci"],
        dogruCevap: "Michelangelo"
    },
    {
        soru: "The Godfather filminde Don Vito Corleone'yi kim canlandırdı?",
        cevaplar: ["Al Pacino", "Robert De Niro", "Marlon Brando", "James Caan"],
        dogruCevap: "Marlon Brando"
    },
    {
        soru: "Harry Potter serisindeki ana karakterin adı nedir?",
        cevaplar: ["Hermione", "Ron", "Harry", "Draco"],
        dogruCevap: "Harry"
    },
        
    {
        soru: "Bir kilogram kaç gramdır?",
        cevaplar: ["10", "100", "1000", "10000"],
        dogruCevap: "1000"
    },
    {
        soru: "Dünyanın en yüksek dağı hangisidir?",
        cevaplar: ["K2", "Everest", "Kangchenjunga", "Lhotse"],
        dogruCevap: "Everest"
    },
    {
        soru: "2020 Olimpiyatları hangi şehirde düzenlendi?",
        cevaplar: ["Tokyo", "Paris", "Rio", "Londra"],
        dogruCevap: "Tokyo"
    },
    {
        soru: "Roger Federer hangi spor dalında ünlüdür?",
        cevaplar: ["Futbol", "Basketbol", "Tenis", "Golf"],
        dogruCevap: "Tenis"
    },
    {
        soru: "Atom numarası 1 olan element hangisidir?",
        cevaplar: ["Helyum", "Hidrojen", "Lityum", "Karbon"],
        dogruCevap: "Hidrojen"
    },
    {
        soru: "E=mc² formülünü kim geliştirdi?",
        cevaplar: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        dogruCevap: "Albert Einstein"
    },
    {
        soru: "Elon Musk'ın CEO'su olduğu elektrikli otomobil şirketi hangisidir?",
        cevaplar: ["Ford", "GM", "Tesla", "BMW"],
        dogruCevap: "Tesla"
    },
    {
        soru: "iPhone'un üreticisi hangi şirket?",
        cevaplar: ["Samsung", "Nokia", "Apple", "Sony"],
        dogruCevap: "Apple"
    },
    {
        soru: "Python'da bir liste nasıl tanımlanır?",
        cevaplar: ["{}", "[]", "()", "<>"],
        dogruCevap: "[]"
    },
    {
        soru: "CSS'de yazı tipi rengi hangi özellik ile belirlenir?",
        cevaplar: ["font-color", "color", "text-color", "background-color"],
        dogruCevap: "color"
    },
    {
        soru: "Afrika'nın en büyük ülkesi hangisidir?",
        cevaplar: ["Mısır", "Nijerya", "Cezayir", "Fas"],
        dogruCevap: "Cezayir"
    },
    {
        soru: "Gobi Çölü hangi kıtada bulunur?",
        cevaplar: ["Afrika", "Asya", "Avrupa", "Güney Amerika"],
        dogruCevap: "Asya"
    },
    {
        soru: "İkinci Dünya Savaşı ne zaman başladı?",
        cevaplar: ["1914", "1939", "1945", "1963"],
        dogruCevap: "1939"
    },
    {
        soru: "Osmanlı Devleti'nin kurucusu kimdir?",
        cevaplar: ["Osman Gazi", "Orhan Gazi", "Yavuz Sultan Selim", "Fatih Sultan Mehmet"],
        dogruCevap: "Osman Gazi"
    },
    {
        soru: "Starry Night tablosunun ressamı kimdir?",
        cevaplar: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Salvador Dali"],
        dogruCevap: "Vincent van Gogh"
    },
    {
        soru: "Persistence of Memory tablosunun ressamı kimdir?",
        cevaplar: ["Leonardo da Vinci", "Pablo Picasso", "Salvador Dali", "Claude Monet"],
        dogruCevap: "Salvador Dali"
    },
    {
        soru: "Breaking Bad dizisinin ana karakteri kimdir?",
        cevaplar: ["Jesse Pinkman", "Saul Goodman", "Walter White", "Gus Fring"],
        dogruCevap: "Walter White"
    },
    {
        soru: "The Matrix filminde Neo'yu kim canlandırdı?",
        cevaplar: ["Brad Pitt", "Johnny Depp", "Keanu Reeves", "Tom Cruise"],
        dogruCevap: "Keanu Reeves"
    },
    {
        soru: "Ay'ın Dünya etrafında bir turu kaç gündür?",
        cevaplar: ["28", "30", "31", "365"],
        dogruCevap: "28"
    },
    {
        soru: "UEFA Şampiyonlar Ligi'ni en çok kazanan takım hangisidir?",
        cevaplar: ["Barcelona", "Liverpool", "AC Milan", "Real Madrid"],
        dogruCevap: "Real Madrid"
    },
    {
        soru: "Cristiano Ronaldo hangi milli takımda oynar?",
        cevaplar: ["İspanya", "Portekiz", "Arjantin", "Brezilya"],
        dogruCevap: "Portekiz"
    },
    {
        soru: "'Zıt' kelimesinin anlamı nedir?",
        cevaplar: ["Aynı", "Karşıt", "Eş", "Benzer"],
        dogruCevap: "Karşıt"
    },
    {
        soru: "İsimlerin çekim ekleri almış hallerine ne ad verilir?",
        cevaplar: ["İlgi zamiri", "İlgeç", "Sıfat", "İsim tamlaması"],
        dogruCevap: "İsim tamlaması"
    },
    {
        soru: "'Beautiful' kelimesinin Türkçe karşılığı nedir?",
        cevaplar: ["Güzel", "Çirkin", "Zeki", "Hızlı"],
        dogruCevap: "Güzel"
    },
    {
        soru: "'House' kelimesinin İngilizce anlamı nedir?",
        cevaplar: ["Araba", "Ev", "Bina", "Kapı"],
        dogruCevap: "Ev"
    },
    {
        soru: "İnsanlık tarihindeki ilk yapay uydu hangisidir?",
        cevaplar: ["Voyager", "Hubble", "Sputnik", "Galileo"],
        dogruCevap: "Sputnik"
    },
    {
        soru: "Dünyaya en yakın gezegen hangisidir?",
        cevaplar: ["Venüs", "Mars", "Jüpiter", "Satürn"],
        dogruCevap: "Venüs"
    },
    {
        soru: "Paris hangi ülkenin başkentidir?",
        cevaplar: ["İtalya", "İspanya", "Fransa", "Almanya"],
        dogruCevap: "Fransa"
    },
    {
        soru: "New York hangi ülkede bulunur?",
        cevaplar: ["İngiltere", "Kanada", "ABD", "Meksika"],
        dogruCevap: "ABD"
    },
    {
        soru: "İsim tamlamasında, tamlayan ve tamlanan arasında hangi ek kullanılır?",
        cevaplar: ["-de", "-ın", "-da", "-e"],
        dogruCevap: "-ın"
    },
    {
        soru: "Fiillerde, işin yapılma zamanını belirten ek hangisidir?",
        cevaplar: ["Kip eki", "Çekim eki", "Şekil eki", "İyelik eki"],
        dogruCevap: "Kip eki"
    },
    
    {
        soru: "Osmanlı'nın ilk başkenti neresidir?",
        cevaplar: ["Bursa", "Edirne", "İstanbul", "Ankara"],
        dogruCevap: "Bursa"
    },
    {
        soru: "Kanuni Sultan Süleyman döneminde yazılan Kanunname-i Al-i Osman nedir?",
        cevaplar: ["Şiir kitabı", "Kanun kitabı", "Tarih kitabı", "Coğrafya kitabı"],
        dogruCevap: "Kanun kitabı"
    },
    {
        soru: "İslam'ın beş şartından biri olan oruç hangi ayda tutulur?",
        cevaplar: ["Muharrem", "Rebiülevvel", "Şaban", "Ramazan"],
        dogruCevap: "Ramazan"
    },
    {
        soru: "Hicret ne zaman gerçekleşti?",
        cevaplar: ["610", "620", "622", "632"],
        dogruCevap: "622"
    },
    {
        soru: "Hz. Muhammed'in veda haccı hangi yılda gerçekleşti?",
        cevaplar: ["610", "620", "630", "632"],
        dogruCevap: "632"
    },
    {
        soru: "Beethoven'in en ünlü 9. senfonisinin diğer adı nedir?",
        cevaplar: ["Ay Işığı Sonatı", "Kader Senfonisi", "Neşeli Günler", "Ode to Joy"],
        dogruCevap: "Ode to Joy"
    },
    {
        soru: "The Beatles grubunun üyesi olmayan kimdir?",
        cevaplar: ["John Lennon", "Paul McCartney", "Freddie Mercury", "George Harrison"],
        dogruCevap: "Freddie Mercury"
    },
    {
        soru: "Don Kişot'un yazarı kimdir?",
        cevaplar: ["Miguel de Cervantes", "William Shakespeare", "Victor Hugo", "Dante Alighieri"],
        dogruCevap: "Miguel de Cervantes"
    },
    {
        soru: "İnce Memed romanının yazarı kimdir?",
        cevaplar: ["Yaşar Kemal", "Orhan Pamuk", "Sabahattin Ali", "Reşat Nuri Güntekin"],
        dogruCevap: "Yaşar Kemal"
    },
    {
        soru: "Ekonomide, talep yasasına göre fiyat arttığında talep nasıl değişir?",
        cevaplar: ["Artar", "Azalır", "Değişmez", "Tersine döner"],
        dogruCevap: "Azalır"
    },
    {
        soru: "Sosyolojinin kurucusu olarak bilinen bilim insanı kimdir?",
        cevaplar: ["Emile Durkheim", "Max Weber", "Auguste Comte", "Karl Marx"],
        dogruCevap: "Auguste Comte"
    },
    {
        soru: "Hangi ülke en fazla FIFA Dünya Kupası kazanmıştır?",
        cevaplar: ["Almanya", "İtalya", "Arjantin", "Brezilya"],
        dogruCevap: "Brezilya"
    },
    {
        soru: "Usain Bolt hangi mesafede dünya rekorunu elinde tutuyor?",
        cevaplar: ["100 metre", "200 metre", "400 metre", "800 metre"],
        dogruCevap: "100 metre"
    },

    {
        soru: "Fermat'nın son teoremini kim ispatlamıştır?",
        cevaplar: ["Andrew Wiles", "Isaac Newton", "Leonhard Euler", "Carl Gauss"],
        dogruCevap: "Andrew Wiles"
    },
    {
        soru: "Kuantum mekaniğinin kurucularından biri olan bilim insanı kimdir?",
        cevaplar: ["Albert Einstein", "Max Planck", "Niels Bohr", "Richard Feynman"],
        dogruCevap: "Max Planck"
    },
    {
        soru: "Dünyanın ilk programlanabilir bilgisayarı hangisidir?",
        cevaplar: ["ENIAC", "UNIVAC", "Zuse Z3", "IBM 701"],
        dogruCevap: "Zuse Z3"
    },
    {
        soru: "Hangi programlama dili Google tarafından geliştirilmiştir?",
        cevaplar: ["Go", "Swift", "Rust", "Kotlin"],
        dogruCevap: "Go"
    },
    {
        soru: "Python'da `def` anahtar kelimesi ne için kullanılır?",
        cevaplar: ["Sınıf tanımlama", "Fonksiyon tanımlama", "Modül ithal etme", "Değişken tanımlama"],
        dogruCevap: "Fonksiyon tanımlama"
    },
    {
        soru: "SQL'de veri silmek için hangi komut kullanılır?",
        cevaplar: ["DELETE", "REMOVE", "ERASE", "DROP"],
        dogruCevap: "DELETE"
    },
    {
        soru: "İsviçre'nin resmi dilleri arasında hangisi yoktur?",
        cevaplar: ["Almanca", "Fransızca", "İtalyanca", "İspanyolca"],
        dogruCevap: "İspanyolca"
    },
    {
        soru: "Antarktika'daki en yüksek dağ hangisidir?",
        cevaplar: ["Mount Erebus", "Mount Vinson", "Mount Sidley", "Mount Menzies"],
        dogruCevap: "Mount Vinson"
    },
    {
        soru: "Moğol İmparatorluğu'nun kurucusu kimdir?",
        cevaplar: ["Cengiz Han", "Kubilay Han", "Timur", "Ögedei"],
        dogruCevap: "Cengiz Han"
    },
    {
        soru: "Normandiya Çıkarması hangi tarihte gerçekleşti?",
        cevaplar: ["6 Haziran 1944", "15 Ağustos 1945", "7 Aralık 1941", "1 Eylül 1939"],
        dogruCevap: "6 Haziran 1944"
    },
    {
        soru: "Michelangelo'nun ünlü heykeli Davut (David) hangi şehirde sergilenmektedir?",
        cevaplar: ["Roma", "Floransa", "Milano", "Venedik"],
        dogruCevap: "Floransa"
    },
    {
        soru: "Guernica tablosunun ressamı kimdir?",
        cevaplar: ["Salvador Dali", "Pablo Picasso", "Joan Miró", "Francisco Goya"],
        dogruCevap: "Pablo Picasso"
    },
    {
        soru: "Yüzüklerin Efendisi serisinde Gandalf'ı kim canlandırdı?",
        cevaplar: ["Ian McKellen", "Christopher Lee", "Viggo Mortensen", "Elijah Wood"],
        dogruCevap: "Ian McKellen"
    },
    {
        soru: "Game of Thrones dizisinde 'Ejderhaların Annesi' olarak bilinen karakter kimdir?",
        cevaplar: ["Cersei Lannister", "Arya Stark", "Sansa Stark", "Daenerys Targaryen"],
        dogruCevap: "Daenerys Targaryen"
    },
    {
        soru: "Bir günde kaç saniye vardır?",
        cevaplar: ["86400", "3600", "60000", "7200"],
        dogruCevap: "86400"
    },
    {
        soru: "Romen rakamlarında 'D' hangi sayıya karşılık gelir?",
        cevaplar: ["50", "100", "500", "1000"],
        dogruCevap: "500"
    },
    {
        soru: "Hangi ülke, ilk FIFA Dünya Kupası'nı kazandı?",
        cevaplar: ["Almanya", "İtalya", "Arjantin", "Uruguay"],
        dogruCevap: "Uruguay"
    },
    {
        soru: "Lionel Messi'nin futbol kariyerinin büyük bir kısmını geçirdiği kulüp hangisidir?",
        cevaplar: ["Real Madrid", "Manchester United", "Barcelona", "Paris Saint-Germain"],
        dogruCevap: "Barcelona"
    },
    {
        soru: "'Gökyüzü' kelimesinin eş anlamlısı nedir?",
        cevaplar: ["Atmosfer", "Uzay", "Semavat", "Kainat"],
        dogruCevap: "Semavat"
    },
    {
        soru: "'Metin' kelimesinin zıt anlamlısı nedir?",
        cevaplar: ["Gevşek", "Kuvvetli", "Zayıf", "Sağlam"],
        dogruCevap: "Gevşek"
    },
    {
        soru: "'To run' fiilinin üçüncü hali nedir?",
        cevaplar: ["Run", "Running", "Ran", "Runned"],
        dogruCevap: "Run"
    },
    {
        soru: "'Delicious' kelimesinin Türkçe karşılığı nedir?",
        cevaplar: ["Lezzetli", "Acı", "Tuzlu", "Ekşi"],
        dogruCevap: "Lezzetli"
        },
        {
        soru: "Güneş Sistemi'nde en büyük gezegen hangisidir?",
        cevaplar: ["Jüpiter", "Mars", "Dünya", "Venüs"],
        dogruCevap: "Jüpiter"
        },
        {
        soru: "Dünya'dan en uzak gezegen hangisidir?",
        cevaplar: ["Neptün", "Mars", "Jüpiter", "Plüton"],
        dogruCevap: "Neptün"
        },
        {
        soru: "Rio de Janeiro hangi ülkede bulunur?",
        cevaplar: ["Arjantin", "Brezilya", "Şili", "Peru"],
        dogruCevap: "Brezilya"
        },
        {
        soru: "İstanbul Boğazı'nın Avrupa ve Asya kıtalarını birbirinden ayıran en dar noktası neresidir?",
        cevaplar: ["Kandilli", "Anadolu Kavağı", "Rumeli Kavağı", "Bebek"],
        dogruCevap: "Anadolu Kavağı"
        },
        {
        soru: "Türkçede 'karşıt' anlamına gelen kelime hangisidir?",
        cevaplar: ["Benzer", "Aynı", "Farklı", "Zıt"],
        dogruCevap: "Zıt"
        },
        {
        soru: "Bir kelimenin anlamını vurgulamak için cümle içinde kullanılan hangi noktalama işareti vardır?",
        cevaplar: ["Virgül", "Nokta", "Ünlem", "Tire"],
        dogruCevap: "Ünlem"
        },
        {
        soru: "Osmanlı'nın ilk padişahı kimdir?",
        cevaplar: ["Orhan Gazi", "Osman Gazi", "I. Murad", "I. Mehmed"],
        dogruCevap: "Osman Gazi"
        },
        {
        soru: "Osmanlı İmparatorluğu'nun son padişahı kimdir?",
        cevaplar: ["V. Mehmed", "V. Murad", "VI. Mehmed", "VI. Murad"],
        dogruCevap: "VI. Mehmed"
        },
        {
        soru: "Hicretin başlangıcı hangi tarihte gerçekleşmiştir?",
        cevaplar: ["610", "622", "632", "640"],
        dogruCevap: "622"
        },
        {
        soru: "Hz. Muhammed'in doğum yeri neresidir?",
        cevaplar: ["Medine", "Mekke", "Kudüs", "İstanbul"],
        dogruCevap: "Mekke"
        },
        {
        soru: "Michael Jackson'ın en çok satan albümü hangisidir?",
        cevaplar: ["Thriller", "Bad", "Dangerous", "Off the Wall"],
        dogruCevap: "Thriller"
        },
        {
        soru: "Queen grubunun efsanevi solisti kimdir?",
        cevaplar: ["Freddie Mercury", "John Deacon", "Brian May", "Roger Taylor"],
        dogruCevap: "Freddie Mercury"
        },
        {
        soru: "George Orwell'in ünlü romanı '1984' hangi türde bir eserdir?",
        cevaplar: ["Bilim Kurgu", "Distopya", "Macera", "Biyografi"],
        dogruCevap: "Distopya"
        },
        {
        soru: "Türk edebiyatının 'Halk Şairi' olarak anılan şair kimdir?",
        cevaplar: ["Ahmet Haşim", "Mehmet Akif Ersoy", "Yunus Emre", "Fuzuli"],
        dogruCevap: "Yunus Emre"
        },
        {
        soru: "Sosyal bilimlerde 'Psikoloji' hangi konuyu inceler?",
        cevaplar: ["Toplum", "İnsan davranışlarını", "Doğa", "Tarih"],
        dogruCevap: "İnsan davranışlarını"
        },
        {
        soru: "Sosyolojide, toplumsal ilişkileri inceleyen kuramcı kimdir?",
        cevaplar: ["Max Weber", "Emile Durkheim", "Karl Marx", "Auguste Comte"],
        dogruCevap: "Max Weber"
        }

];


let kullanilmamisSorular = [...sorular];
let puan = 0;
let sure = 60;
let zamanlayici;

const baslangicEkrani = document.getElementById('baslangic-ekrani');
const oyunEkrani = document.getElementById('oyun-ekrani');
const sonucEkrani = document.getElementById('sonuc-ekrani');

const soruElementi = document.getElementById('soru');
const cevapButonlariElementi = document.getElementById('cevapbutonlari');
const soruSirasiElementi = document.getElementById('soru-sirasi');
const puanElementi = document.getElementById('puan');
const sureElementi = document.getElementById('sure');
const toplamPuanElementi = document.getElementById('toplam-puan');

document.getElementById('oyna-btn').addEventListener('click', oyunuBaslat);
document.getElementById('tekrar-oyna-btn').addEventListener('click', tekrarOyna);

function oyunuBaslat() {
    baslangicEkrani.style.display = 'none';
    oyunEkrani.style.display = 'block';
    sonucEkrani.style.display = 'none';
    kullanilmamisSorular = [...sorular];
    puan = 0;
    sure = 60;
    puanGuncelle();
    sureGuncelle();
    soruGoster();
    zamanlayici = setInterval(sureAzalt, 1000);
}

function sureAzalt() {
    sure--;
    sureGuncelle();
    if (sure <= 0) {
        oyunuBitir();
    }
}

function sureGuncelle() {
    sureElementi.innerText = `Süre: ${sure}`;
}

function puanGuncelle() {
    puanElementi.innerText = `Puan: ${puan}`;
}

function soruGoster() {
    if (kullanilmamisSorular.length === 0) {
        oyunuBitir();
        return;
    }

    const rastgeleIndex = Math.floor(Math.random() * kullanilmamisSorular.length);
    const guncelSoru = kullanilmamisSorular[rastgeleIndex];
    kullanilmamisSorular.splice(rastgeleIndex, 1);

    soruSirasiElementi.innerText = `Soru: ${sorular.length - kullanilmamisSorular.length}`;
    soruElementi.innerText = guncelSoru.soru;
    cevapButonlariElementi.innerHTML = '';
    guncelSoru.cevaplar.forEach(cevap => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = cevap;
        button.addEventListener('click', () => cevapKontrol(cevap, guncelSoru.dogruCevap));
        cevapButonlariElementi.appendChild(button);
    });
}

function cevapKontrol(seciliCevap, dogruCevap) {
    const butonlar = document.querySelectorAll('.btn');
    butonlar.forEach(buton => {
        if (buton.textContent === seciliCevap) {
            if (seciliCevap === dogruCevap) {
                buton.classList.add('dogru');
                setTimeout(() => buton.classList.remove('dogru'), 500);
                puan += 100;
            } else {
                buton.classList.add('yanlis');
                setTimeout(() => buton.classList.remove('yanlis'), 500);
                sure -= 2;
            }
        }
    });

    puanGuncelle();
    sureGuncelle();

    if (sure <= 0) {
        oyunuBitir();
    } else {
        setTimeout(() => soruGoster(), 500);
    }
}


function oyunuBitir() {
    clearInterval(zamanlayici);
    oyunEkrani.style.display = 'none';
    sonucEkrani.style.display = 'block';
    toplamPuanElementi.innerText = puan;
}

function tekrarOyna() {
    sonucEkrani.style.display = 'none';
    baslangicEkrani.style.display = 'block';
}