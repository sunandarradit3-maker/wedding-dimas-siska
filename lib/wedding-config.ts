export const weddingConfig = {
  title: 'The Wedding of Siska & Dimas',
  heroName: 'Siska & Dimas',
  eventISODate: '2026-05-30T08:00:00+07:00',
  displayDate: 'Sabtu, 30 Mei 2026',
  mapsUrl: 'https://maps.app.goo.gl/hRDqyxbHkKn1B6dF6',
  openingText:
    'Assalamu’alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri kami.',
  closingText:
    'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Atas kehadiran dan doanya kami ucapkan terima kasih. Wassalamu’alaikum Warahmatullahi Wabarakatuh.',
  prayer:
    'Semoga Allah menghimpun yang terserak dari keduanya, memberkahi mereka berdua, dan kiranya Allah meningkatkan kualitas keturunan mereka, menjadikannya pembuka pintu rahmat, sumber ilmu dan hikmah, serta pemberi rasa aman bagi umat.',
  bride: {
    name: 'Siska Amelia',
    shortName: 'Siska',
    parents: 'Putri kedua dari Bpk. Wahab dan Ibu Entin Kartika',
    photo: '/assets/images/profil-siska.jpg',
    whatsapp: '6282315640398'
  },
  groom: {
    name: 'Dimas Aldiansyah',
    shortName: 'Dimas',
    parents: 'Putra kedua dari Alm. Bpk. Wahab dan Ibu Neneng Rohayati',
    photo: '/assets/images/profil-dimas.jpg',
    whatsapp: '6282315640398' // TODO: ganti dengan nomor Dimas kalau sudah ada
  },
  contact: {
    label: 'Panitia',
    phone: '6282315640398'
  },
  events: [
    {
      title: 'Akad Nikah',
      date: 'Sabtu, 30 Mei 2026',
      time: '08.00 WIB s/d selesai',
      place: 'Ds. Pangrumasan, Kp. Bojongsari'
    },
    {
      title: 'Resepsi',
      date: 'Sabtu, 30 Mei 2026',
      time: '09.00 WIB s/d selesai',
      place: 'Ds. Pangrumasan, Kp. Bojongsari'
    }
  ],
  gallery: Array.from({ length: 10 }, (_, index) => `/assets/images/gallery-${index + 1}.jpg`),
  loveStory: [
    {
      year: '2021',
      title: 'Pertemuan Pertama di Coffee Shop',
      description:
        'Awal kisah kami dimulai dari sebuah pertemuan sederhana di sebuah coffee shop pada tahun 2021. Dari obrolan kecil yang awalnya biasa saja, perlahan tumbuh rasa nyaman yang tidak pernah kami duga sebelumnya. Senyum, tatapan, dan percakapan singkat hari itu menjadi awal dari perjalanan indah yang Allah takdirkan untuk kami.'
    },
    {
      year: '2024',
      title: 'Mulai Menata Keseriusan',
      description:
        'Seiring berjalannya waktu, kami semakin saling mengenal, saling memahami, dan saling menguatkan. Hubungan ini tidak hanya tumbuh karena rasa sayang, tetapi juga karena niat baik untuk menjaga satu sama lain dan melangkah ke arah yang lebih serius dengan restu keluarga.'
    },
    {
      year: '2026',
      title: 'Menuju Hari Bahagia',
      description:
        'Dengan memohon ridho Allah SWT, kami memantapkan hati untuk melangkah ke jenjang pernikahan. Dari pertemuan sederhana di coffee shop, kini kami berharap dapat membangun rumah tangga yang penuh cinta, keberkahan, dan menjadi keluarga yang sakinah, mawaddah, warahmah.'
    }
  ],
  envelopes: [
    {
      method: 'DANA',
      number: '085314300851',
      holder: 'Siska'
    },
    {
      method: 'DANA',
      number: '082315640398',
      holder: 'Dimas'
    }
  ],
  turutMengundang: [
    'Ustad Usman',
    'Ustad Dasep',
    'Keluarga Besar Pondok Pesantren Nurul Huda (Pulo)'
  ]
};

export type WeddingConfig = typeof weddingConfig;
