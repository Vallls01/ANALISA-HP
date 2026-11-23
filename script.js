// GANTI dengan nomor WhatsApp Anda. Contoh: 0812-3456-7890 menjadi 6281234567890
const NOMOR_WA = "6281234567890";

const form = document.getElementById("formKontak");
const info = document.getElementById("info");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const hp = document.getElementById("hp").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || hp === "" || pesan === "") {
      info.textContent = "Mohon isi semua kolom dulu.";
      info.className = "salah";
      return;
    }

    if (pesan.length < 10) {
      info.textContent = "Keluhan minimal 10 huruf.";
      info.className = "salah";
      return;
    }

    const teks = "Halo, saya " + nama + ". Tipe HP: " + hp + ". Keluhan: " + pesan;
    const link = "https://wa.me/" + 6281993773330 + "?text=" + encodeURIComponent(teks);

    info.textContent = "Membuka WhatsApp...";
    info.className = "benar";
    window.location.href = link;
  });
}