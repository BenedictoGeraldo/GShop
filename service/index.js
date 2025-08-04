// backend/index.js

// 1. Impor modul http bawaan Node.js
const http = require("http");

// 2. Tentukan port untuk server
const port = 5000;

// 3. Buat server
const server = http.createServer((req, res) => {
  // Atur header respons agar browser tahu ini adalah JSON
  res.writeHead(200, { "Content-Type": "application/json" });

  // Siapkan data yang akan dikirim
  const data = {
    message: "Halo Geral",
  };

  // Kirim data sebagai string JSON dan akhiri respons
  res.end(JSON.stringify(data));
});

// 4. Jalankan server dan tampilkan pesan konfirmasi di terminal
server.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
