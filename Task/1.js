function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function generatePrimes(limit) {
    let primes = [];
    let num = 2;
    while (primes.length < limit) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function drawSikuSiku(n) {
    if (n <= 0 || n >= 10) {
        console.log("Input harus antara 1 hingga 9");
        return;
    }
    
    let totalNumbers = (n * (n + 1)) / 2; // Jumlah bilangan prima yang dibutuhkan
    let primes = generatePrimes(totalNumbers);
    let index = 0;
    
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += primes[index] + ' ';
            index++;
        }
        console.log(row.trim());
    }
}

// Contoh penggunaan
// drawSikuSiku(7);
