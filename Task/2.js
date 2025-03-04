function hitungVoucher(voucher, totalBelanja) {
    let diskon = 0;
    let totalBayar = totalBelanja;
    
    if (voucher === "DumbWaysJos" && totalBelanja >= 50000) {
        diskon = totalBelanja * 0.211; // Diskon 21.1%
        if (diskon > 20000) diskon = 20000; // Maksimal diskon 20000
    } 
    else if (voucher === "DumbWaysMantap" && totalBelanja >= 80000) {
        diskon = totalBelanja * 0.30; // Diskon 30%
        if (diskon > 40000) diskon = 40000; // Maksimal diskon 40000
    }
    
    totalBayar -= diskon; // Mengurangi total belanja dengan diskon
    let kembalian = totalBelanja - totalBayar; // Menghitung kembalian
    
    console.log(`Uang yang harus dibayar: ${totalBayar}`);
    console.log(`Diskon: ${diskon}`);
    console.log(`Kembalian: ${kembalian}`);
}

// Contoh penggunaan
// hitungVoucher("DumbWaysJos", 100000);

