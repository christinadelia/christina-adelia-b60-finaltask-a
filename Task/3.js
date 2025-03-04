function bubbleSortRecursive(arr, n = arr.length) {
    if (n === 1) return arr; // Basis rekursi, jika hanya 1 elemen maka selesai

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Tukar elemen jika tidak berurutan
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    // Rekursi dengan panjang array berkurang
    return bubbleSortRecursive(arr, n - 1);
}

function sortArray(arr) {
    let sortedArr = bubbleSortRecursive([...arr]); // Salin array agar tidak mengubah aslinya
    let ganjil = sortedArr.filter(num => num % 2 !== 0);
    let genap = sortedArr.filter(num => num % 2 === 0);

    return {
        sortedArray: sortedArr,
        ganjil: ganjil,
        genap: genap
    };
}

// Contoh penggunaan
let result = sortArray([2, 24, 32, 22, 31, 21, 7, 5, 25, 13, 11]);

console.log(`Array: ${result.sortedArray.join(", ")}`);
console.log(`Ganjil: ${result.ganjil.join(", ")}`);
console.log(`Genap: ${result.genap.join(", ")}`);
