const DATA = {
  Layar: {
    judul: "Layar",
    gejala: [
      { teks: "Layar bergaris atau muncul bintik warna.",
        penyebab: "Panel layar rusak, biasanya setelah hp terjatuh atau tertekan.",
        saran: "Restart hp dulu dan jangan menekan area yang bergaris. Kalau garis atau bintik tetap ada, layar perlu diperiksa dan kemungkinan diganti.",
        tingkat: "Hubungi menu kontak." },
      { teks: "Sentuhan tidak responsif atau bergerak sendiri.",
        penyebab: "Bisa karena pelindung layar yang rusak atau kotor, layar sentuh bermasalah, soket lcd longgar, atau gangguan software.",
        saran: "Lepas pelindung layar, bersihkan layar dengan kain kering, lalu restart. Pastikan sistem sudah diperbarui. Kalau masih bermasalah, layar perlu diperiksa.",
        tingkat: "Hubungi menu kontak." },
      { teks: "Layar gelap padahal hp masih menyala (ada suara atau getar).",
        penyebab: "Lampu latar (backlight),IC lampu, atau fleksibel layar bermasalah. Bisa juga layar rusak setelah terbentur.",
        saran: "Sorot layar dengan senter dari dekat. Kalau tampilan samar terlihat, kemungkinan backlight/IC yang bermasalah.",
        tingkat: "Hubungi menu kontak." }
        
    ]
  },

  Baterai: {
    judul: "Baterai",
    gejala: [
      { teks: "Baterai cepat habis atau hp mati padahal persentase masih ada.",
        penyebab: "Baterai sudah aus karena pemakaian lama, atau ada aplikasi yang terlalu boros daya.",
        saran: "Cek aplikasi yang paling banyak memakai baterai di pengaturan. Kalau hp sudah dipakai lama dan masih boros, baterai biasanya perlu diganti.",
        tingkat: "hubungi menu kontak." },
      { teks: "Hp tidak mau di-charge, atau mengisi hanya kalau kabel digoyang.",
        penyebab: "Kabel atau adaptor rusak, atau port charger kotor atau longgar.",
        saran: "Coba kabel dan adaptor lain. Matikan hp, lalu bersihkan port dengan benda seperti tusuk gigi kayu. Kalau tetap bermasalah, port perlu diperiksa dan bisa juga harus diganti.",
        tingkat: "Jika sudah dibersihkan masih berkendala, hubungi menu kontak." },
      { teks: "Bagian belakang HP menggembung atau layar terangkat.",
        penyebab: "Baterai kembung.",
        saran: "Berhenti memakai dan jangan di charge. Jangan ditekan, ditusuk, atau dipanaskan. Bawa ke teknisi untuk penggantian baterai.",
        tingkat: "Segera ke teknisi, berbahaya jika dibiarkan. Hubungi menu kontak." }
    ]
  },

  Suara: {
    judul: "Suara",
    gejala: [
      { teks: "Suara speaker kecil atau pecah.",
        penyebab: "Lubang speaker tersumbat debu, atau speaker mulai rusak.",
        saran: "Bersihkan lubang speaker dengan sikat lembut. Pastikan HP tidak sedang tersambung ke bluetooth. Kalau tetap kecil atau pecah, speaker perlu diganti.",
        tingkat: "Coba sendiri dulu, jika masih kendala segera hubungi menu kontak." },
      { teks: "Lawan bicara tidak terdengar saat telepon.",
        penyebab: "Lubang mikrofon tersumbat atau mikrofon rusak.",
        saran: "Lepas casing dan bersihkan lubang mikrofon. Coba rekam suara di aplikasi perekam untuk memastikan. Kalau tidak terekam, mikrofon perlu diperiksa.",
        tingkat: "Coba sendiri dulu, jika masih kendala segera hubungi menu kontak." },
      { teks: "Tidak ada suara sama sekali padahal volume besar.",
        penyebab: "Mode senyap aktif, hp mengira headset masih tertancap, atau komponen audio rusak.",
        saran: "Cek mode senyap, lalu colok dan lepas headset beberapa kali. Restart hp. Kalau masih tidak ada suara, komponen audio perlu diperiksa.",
        tingkat: "hubungi menu kontak." }
      
    ]
  },

  Kamera: {
    judul: "Kamera",
    gejala: [
      { teks: "Hasil foto buram.",
        penyebab: "Lensa kotor, berembun, atau tergores.",
        saran: "Bersihkan lensa dengan kain mikrofiber dan lepas pelindung lensa. Kalau buram hanya di satu sisi, bisa jadi fokus kamera yang bermasalah.",
        tingkat: "Coba sendiri dulu." },
      { teks: "Kamera hitam atau muncul tulisan gagal membuka kamera.",
        penyebab: "Aplikasi kamera bermasalah, atau modul kamera rusak.",
        saran: "Restart HP, hapus cache aplikasi kamera, dan perbarui sistem. Kalau masih hitam, modul kamera perlu diperiksa.",
        tingkat: "Sebaiknya ke teknisi, hubungi menu kontak." },
      { teks: "Ada bintik atau bayangan di semua hasil foto.",
        penyebab: "Debu atau jamur di dalam lensa, atau sensor kamera bermasalah.",
        saran: "Bersihkan bagian luar lensa dulu. Kalau bintik tetap ada, berarti kotoran ada di dalam dan kamera perlu dibongkar teknisi.",
        tingkat: "Sebaiknya ke teknisi." }
    ]
  },

  Restart: {
    judul: "Restart",
    gejala: [
      { teks: "Hp restart namun normal jika di colok charger.",
        penyebab: "Baterai rusak dan tidak bisa memberikan tegangan ampere secara normal.",
        saran: "Lepas charger dan segera bawa ke teknisi.",
        tingkat: "Hubungi menu kontak." },
      { teks: "Hp restart meski di colok charger.",
        penyebab: "Tombol power bermasalah atau tertekan sehingga menyebabkan konslet.",
        saran: "Buka backdoor hp lalu bersihkan tombol power, jika masih restart, segera bawa ke teknisi.",
        tingkat: "Coba sendiri dulu, jika masih restart hubungi menu kontak." },
      { teks: "Hp restart secara berulang dan terkadang bisa masuk menu lalu mati.",
        penyebab: "Ada kendala di IC power atau di CPU.",
        saran: "Jangan dipaksa terus dipakai. Bawa ke teknisi untuk dicek bagian mesin.",
        tingkat: "Hubungi menu kontak." }
    ]
  },

  "Mati": {
    judul: "Mati",
    gejala: [
      { teks: "Hp tidak menyala sama sekali padahal sudah di-charge.",
        penyebab: "Baterai habis total, kabel atau adaptor rusak, atau gangguan di papan mesin seperti IC power atau CPU.",
        saran: "Charge sekitar 30 menit sampai 1 jam dengan kabel dan adaptor lain. Kalau tidak ada tanda apa pun (getar, lampu, atau layar), kemungkinan ada masalah di papan mesin yang perlu dibongkar, kadang sampai perlu reball.",
        tingkat: "Hubungi menu kontak." },
      { teks: "Hp mati setelah terkena air.",
        penyebab: "Korsleting atau karat di dalam HP.",
        saran: "Matikan segera dan jangan di-charge atau dinyalakan. Lepas SIM dan casing, lalu angin anginkan di tempat sejuk. Jangan pakai hair dryer panas. Bawa ke teknisi secepatnya sebelum muncul karat.",
        tingkat: "Segera ke teknisi, hubungi menu kontak." },
      { teks: "Hp hanya sampai logo lalu restart terus.",
        penyebab: "Sistem rusak setelah update atau aplikasi bermasalah, atau memori hp bermasalah.",
        saran: "Coba masuk mode recovery lalu bersihkan cache, jika menu itu tersedia di hp Anda. Hati hati dengan reset pabrik karena menghapus semua data. Kalau tidak berhasil, hp perlu diperbaiki sistemnya oleh teknisi.",
        tingkat: "Hubungi menu kontak." }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const kunci = params.get("bagian");
const area = document.getElementById("area-cek");
const judul = document.getElementById("judul-bagian");

if (DATA[kunci]) {
  tampilkanForm(DATA[kunci]);
} else {
  area.textContent = "Bagian HP belum dipilih. Silakan pilih dulu dari halaman Beranda.";
}

function tampilkanForm(bagian) {
  judul.textContent = "Cek Kerusakan: " + bagian.judul;

  let html = '<form id="formCek"><fieldset><legend>Pilih gejala yang paling mirip</legend>';
  bagian.gejala.forEach(function (g, i) {
    html += '<label class="gejala"><input type="radio" name="gejala" value="' + i + '"> ' + g.teks + "</label>";
  });
  html += '</fieldset><button type="submit">Lihat Perkiraan Penyebab</button></form>';
  html += '<div id="hasil" aria-live="polite"></div>';
  area.innerHTML = html;

  document.getElementById("formCek").addEventListener("submit", function (e) {
    e.preventDefault();
    const hasil = document.getElementById("hasil");
    const dipilih = document.querySelector('input[name="gejala"]:checked');

    if (!dipilih) {
      hasil.className = "salah";
      hasil.textContent = "Pilih salah satu gejala dulu.";
      return;
    }

    const g = bagian.gejala[dipilih.value];
    hasil.className = "hasil";
    hasil.innerHTML =
      "<h2>Perkiraan Penyebab</h2><p>" + g.penyebab + "</p>" +
      "<h3>Saran Awal</h3><p>" + g.saran + "</p>" +
      "<p><b>Tingkat:</b> " + g.tingkat + "</p>";
  });
}