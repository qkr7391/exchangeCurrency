let currencyRatio = {
	CAD: {
		CAD: 1,
		KRW: 939.51,
		USD: 0.73,
		unit: "CAD$",
	},
	KRW: {
		CAD: 0.0011,
		KRW: 1,
		USD: 0.00077,
		unit: "Won",
	},
	USD: {
		CAD: 1.38,
		KRW: 1292.04,
		USD: 1,
		unit: "USD$",
	},
};

//currencyRatio.CAD.unit
//currencyRatio["CAD"]["unit"]
//currencyRatio["CAD"].unit

let fromCurrency = "CAD";
let toCurrency = "CAD";

//click event
document.querySelectorAll("#from a").forEach((menu) =>
	menu.addEventListener("click", function () {
		document.getElementById("from-button").textContent = this.textContent;
		fromCurrency = this.textContent;
		convert("from");
		document.getElementById("dollarFrom").textContent =
			currencyRatio[fromCurrency].unit;
		// document.getElementById("from").style.display = "none";
	})
);

document.querySelectorAll("#to a").forEach((menu) =>
	menu.addEventListener("click", function () {
		document.getElementById("to-button").textContent = this.textContent;
		toCurrency = this.textContent;
		convert("to");
		document.getElementById("dollarTo").textContent =
			currencyRatio[toCurrency].unit;
		//document.getElementById("to").style.display = "none";
	})
);

function convert(type) {
	let amount = 0;
	if (type == "from") {
		amount = document.getElementById("from-input").value;
		let converted = amount * currencyRatio[fromCurrency][toCurrency];
		document.getElementById("to-input").value = converted;
	} else {
		amount = document.getElementById("to-input").value;
		let converted = amount * currencyRatio[toCurrency][fromCurrency];
		document.getElementById("from-input").value = converted;
	}
}
