const rates = {
    USD: 1,         // Base currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.34,
    JPY: 143.25
};

document.getElementById("amount").addEventListener("input", convert);
document.getElementById("from").addEventListener("change", convert);
document.getElementById("to").addEventListener("change", convert);

function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (isNaN(amount)) {
        document.getElementById("result").textContent = "Converted Amount: --";
        return;
    }

    // Convert to USD first, then to target currency
    let inUSD = amount / rates[from];
    let converted = inUSD * rates[to];

    document.getElementById("result").textContent = 
        `Converted Amount: ${converted.toFixed(2)} ${to}`;
}
