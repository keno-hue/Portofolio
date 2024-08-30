// script.js
// Anda bisa menambahkan interaksi tambahan di sini jika diperlukan

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website siap!");
    // Contoh: Tambahkan event listener pada semua link untuk pesan di Grab
    const orderLinks = document.querySelectorAll('.order-link');
    orderLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            alert('Anda akan diarahkan ke Grab untuk pemesanan.');
        });
    });
});
