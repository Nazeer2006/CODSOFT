const currencyList = ["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD"];

let fromSelect = document.getElementById("from");
let toSelect = document.getElementById("to");

// Populate dropdowns
currencyList.forEach(currency => {
    let option1 = new Option(currency, currency);
    let option2 = new Option(currency, currency);

    fromSelect.add(option1);
    toSelect.add(option2);
});

fromSelect.value = "USD";
toSelect.value = "INR";

// Swap currencies
function swap() {
    let temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
}

// Convert function
async function convert() {
    let amount = document.getElementById("amount").value;

    if (amount === "" || amount <= 0) {
        alert("Enter valid amount!");
        return;
    }

    let from = fromSelect.value;
    let to = toSelect.value;

    document.getElementById("result").innerText = "Converting...";

    try {
        let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        let data = await res.json();

        let rate = data.rates[to];
        let converted = (amount * rate).toFixed(2);

        document.getElementById("rate").innerText =
            `1 ${from} = ${rate} ${to}`;

        document.getElementById("result").innerText =
            `${amount} ${from} = ${converted} ${to}`;

    } catch {
        document.getElementById("result").innerText = "Error fetching data";
    }
}