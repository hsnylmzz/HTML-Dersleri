let sorular = [
    {
        "soru" : "1) Birincisinin lakabı Yıldırım, ikincisinin lakabı Veli olan Osmanlı padişahlarının adı nedir?",
        "a_sikki" : "Ahmed",
        "b_sikki" : "Süleyman",
        "c_sikki" : "Mehmed",
        "d_sikki" : "Bayezid",
        "cevap" : "D"
    },
    {
        "soru" : "2) Asıl adı Marie-Henri Beyle olan, 17 yaşında Napolyon Bonapart'ın ordusuna katılan ve Napolyon'un Rusya seferine de giden, Kızıl ile Kara adlı romanı yazan yazar kimdir?",
        "a_sikki" : "Stendhal",
        "b_sikki" : "Voltaire",
        "c_sikki" : "Balzac",
        "d_sikki" : "Gogol",
        "cevap" : "A"
    },
    {
        "soru": "3) PKK'lı teröristlerce, 11 Ağustos 2017'de şehit edilen Eren Bülbül, bugün kaç yaşında olacaktı?",
        "a_sikki" : "20",
        "b_sikki" : "22",
        "c_sikki" : "24",
        "d_sikki" : "26",
        "cevap" : "A"
    },
    {
        "soru" : "4) Okuduğunuz tarih kitabında anlatılan savaşta adı geçenlerden biri Romen Diyojen'se diğeri muhtemelen hangisidir?",
        "a_sikki" : "Gazneli Mahmut",
        "b_sikki" : "Cengiz Han",
        "c_sikki" : "Timur",
        "d_sikki" : "Alparslan",
        "cevap" : "D"
    },
    {
        "soru" : "5) Ünlü çizgi karakterlerden hangisi fare değildir?",
        "a_sikki" : "Sonic",
        "b_sikki" : "Mickey Mouse",
        "c_sikki" : "Jerry",
        "d_sikki" : "Speedy Gonzales",
        "cevap" : "A"
    },
    {
        "soru" : "6) Şehre, surlardaki Lefke Kapısı'ndan girip Yeşil Cami'yi ve Ayasofya Camii'ni ziyaret ettikten sonra göl kıyısında çay içiyorsanız neredesinizdir?",
        "a_sikki" : "Ayvalık",
        "b_sikki" : "İznik",
        "c_sikki" : "Ezine",
        "d_sikki" : "Bergama",
        "cevap" : "B"
    },
    {
        "soru" : "7) Hangisinin 100. yılı bir artık yıla denk gelmektedir?",
        "a_sikki" : "30 Ağustos",
        "b_sikki" : "23 Nisan",
        "c_sikki" : "29 Ekim",
        "d_sikki" : "19 Mayıs",
        "cevap" : "B"
    },
    {
        "soru" : "8) Hangisi Türkiye'deki üniversitelerde okuyabileceğiniz bir bölümdür?",
        "a_sikki" : "Bantu Dili ve Edebiyatı",
        "b_sikki" : "Norveç Dili ve Edebiyatı",
        "c_sikki" : "Arnavut Dili ve Edebiyatı",
        "d_sikki" : "Moğol Dili ve Edebiyatı",
        "cevap" : "C"
    },
    {
        "soru" : "9) Adlarında Gümüş Eyer, Altın Madalyon, Viking Kanı gibi ifadeler yer alan Yeşilçam filmlerinin başrolünde kim vardır?",
        "a_sikki" : "Sadri Alışık",
        "b_sikki" : "Kartal Tibet",
        "c_sikki" : "Ekrem Bora",
        "d_sikki" : "Cüneyt Arkın",
        "cevap" : "B"
    },
    {
        "soru" : "10) Hangi ülkede bir evin kapısını tıklatıp kaçmak suçtur?",
        "a_sikki" : "Birleşik Krallık",
        "b_sikki" : "Çin",
        "c_sikki" : "Küba",
        "d_sikki" : "Danimarka",
        "cevap" : "A"
    }
];

let sorunun_cevabi = "";
let puan = 0;
let dogru_sayisi = 0;
let yanlis_sayisi = 0;
let soru_numarasi = 0;

function basaDon()
{
    sorunun_cevabi = "";
    puan = 0;
    dogru_sayisi = 0;
    yanlis_sayisi = 0;
    soru_numarasi = 0;
    document.getElementById("sorular").style.display = "none";
    document.getElementById("score_board").style.display = "block";   
    document.querySelector(".baslamabutonu").style.display = "block";
    skorYaz();
}

function soruGetir(s_no)
{   

    document.getElementById("sorular").style.display = "block";
    document.getElementById("score_board").style.display = "block";
    document.querySelector(".baslamabutonu").style.display = "none";
    if(s_no == sorular.length)
    {
        swal({
            title : "Tebrikler",
            text : "Yarışmanız Bitmiştir",
            icon : "warning",
            button : "Başa Dönmek için tıklayın",
        }).then(function(){basaDon();});
    }
    document.getElementById("soru_metni").innerHTML = sorular[s_no].soru;
    document.getElementById("a_sikki").innerHTML = sorular[s_no].a_sikki;
    document.getElementById("b_sikki").innerHTML = sorular[s_no].b_sikki;
    document.getElementById("c_sikki").innerHTML = sorular[s_no].c_sikki;
    document.getElementById("d_sikki").innerHTML = sorular[s_no].d_sikki;
    sorunun_cevabi = sorular[s_no].cevap;
}

function skorYaz()
{
    document.getElementById("dogrusayisi").innerHTML = dogru_sayisi;
    document.getElementById("yanlissayisi").innerHTML = yanlis_sayisi;
    document.getElementById("toplampuan").innerHTML = puan;
}

function cevaplandi(secenek) 
{
    kullanici_secimi = secenek.getAttribute("data-secim"); // Kullanıcı seçeneği alındı.
    if(sorunun_cevabi == kullanici_secimi)
    {
        puan += 10;
        dogru_sayisi++;
        skorYaz();
        swal({
            title : "Tebrikler",
            text : "Doğru Cevap",
            icon : "success",
            button : "Sonraki Soru",
        }).then(function(){sonrakiSoruyaGec();});
    }
    else{
        yanlis_sayisi++;
        skorYaz();
        swal({
            title : "Üzgünüz",
            text : "Yanlış Cevap",
            icon : "error",
            button : "Sonraki Soru",
        }).then(function(){sonrakiSoruyaGec();});
    }
}

function sonrakiSoruyaGec()
{
    soru_numarasi++;
    soruGetir(soru_numarasi);
}