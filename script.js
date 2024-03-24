function domReady(fn) {
	if (
		document.readyState === "complete" ||
		document.readyState === "interactive"
	) {
		setTimeout(fn, 1000);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

domReady(function () {


	function onScanSuccess(decodeText, decodeResult) {
		// Get the label element
		var qrLabel = document.getElementById("qrLabel");
		
		// Set the text content of the label using decodeText and decodeResult
		qrLabel.textContent = "QR Text: " + decodeText ;
	}
	
	

	let htmlscanner = new Html5QrcodeScanner(
		"my-qr-reader",
		{ fps: 10, qrbos: 250 }
	);
	htmlscanner.render(onScanSuccess);
});
