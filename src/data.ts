export const meta = {
  title: "Çakıroğlu Çay",
  description: "Özenle Seçilmiş Taze Yapraklar",
  keywords: [],
  author: "",
  numberRaw: "+905358809544",
  numberFormatted: "+90 535 880 9544",
};

export const hero = {
  title: "Karadeniz'in Bahçelerinden Sofranızı Saran Lezzet",
  text: "Karadeniz'in dik yamaçlarından elle toplanmış ve mineral bakımından zengin topraklarda yetiştirilen *Çakıroğlu Çay*, mükemmel demlenmiş bir fincan çayın koyu kırmızı rengini ve keskin, saf lezzetini sunar.",
  buttonContact: "İletişime Geçin",
  buttonTeas: "Çaylarımızı Keşfedin",
};

export const story = {
  title: "MİRASIMIZ",
  subtitle: "İyi Çay Nasıl Demlenir?",
  content:
    "Öncelikle çay, koku ve nemden etkilenmeyecek şekilde muhafaza edilerek ilk günkü tazeliğini korumasını sağlanır. Porselen bir demlik içerisine her bardak için bir kaşık çay konularak ılık su ile ıslatılır. Demliğin altına kaynatılmış su konularak 10-15 dakika demlenmeye bekletilir. Çay demlendikten sonra ince belli çay bardağında servis edilir.",
};

export type Product = { name: string; image: string; description: string };

export const products: {
  title: string;
  subtitle: string;
  content: string;
  products: Product[];
} = {
  title: "ÜRÜNLERİMİZ",
  subtitle: "Her Damak Zevki için Özenle Üretildi",
  content:
    "Her karışım, aromasını ve tazeliğini korumak için elle ayıklanır, sınıflandırılır ve paketlenir. Damak tadınıza en uygun çayı bulun.",
  products: [
    {
      name: "Çakıroğlu Konak Özel Seri 500g",
      image: "/images/product-500.jpg",
      description:
        "Özenle seçilen en taze çay yapraklarını, geleneksel yöntemlerle harmanlayıp sofralarınıza getiriyoruz. Rengiyle gözü, kokusuyla ruhu doyuran bu eşsiz lezzet, günün her saatinde içinizi ısıtacak. Ailenizle ve dostlarınızla paylaştığınız en güzel anlara ortak olmak için toplanan çay yapraklarını sizin için bu pakette topladık.",
    },
    {
      name: "Çakıroğlu Konak Özel Seri 1kg",
      image: "/images/product-1k.jpg",
      description:
        "Çok sevilen o bildiğiniz lezzet, şimdi kalabalık sofralar ve bitmeyen sohbetler için 1 kiloluk avantajlı paketinde! Çaydanlığın hiç soğumadığı evler, misafiri eksik olmayan mutfaklar için ideal. En taze yaprakların bereketi, her demlikte aynı benzersiz tatla buluşuyor. Çayınız hiç bitmesin, keyfiniz daim olsun.",
    },
  ],
};

export const contact = {
  title: "İLETİŞİME GEÇİN",
  subtitle: "",
  description: "",
  followText: "Bizi takip Edin:",
  form: {
    title: "Bize Ulaşın",
    name: "İsim",
    namePlaceholder: "",
    email: "E-posta",
    emailPlaceholder: "",
    message: "Mesaj",
    messagePlaceholder: "",
    thanksTitle: "Teşekkürler!",
    thanksDescription: "Mesajınız bize ulaştı. Kısa süre içerisinde size geri dönüş yapacağız.",
    send: "Gönder",
  },
  blocks: {
    address: {
      title: "Adresimiz",
      content: "Eskipazar, Hayrat Yolu No:34\n 61850 Of/Trabzon",
    },
    contact: {
      title: "İletişim",
      email: "info@cakiroglucay.com",
      number: meta.numberFormatted,
    },
    workHours: {
      title: "Çalışma Saatleri",
      content: "Hafta içi 9.00 - 17.00 Arası",
    },
  },
  socials: {
    instagram: "cakiroglucay",
    facebook: "cakiroglucay",
    whatsapp: meta.numberRaw,
  },
};
