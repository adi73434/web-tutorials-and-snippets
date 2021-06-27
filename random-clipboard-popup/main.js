
/**
 * This copies the provided text to clipboard.
 *
 * See: https://stackoverflow.com/a/30810322
 *
 * @param {string} text
 * @return {*}  {boolean}
 */
const copyTextToClipboard = (text) => {
	if (!navigator.clipboard) {
		return false;
	}
	navigator.clipboard.writeText(text).then(function() {
		console.log("Async: Copying to clipboard was successful!");
	}, function(err) {
		console.error("Async: Could not copy text: ", err);
		return false;
	});
	return true;
};



// -----------------------------------------------------------------------------
// This is horrible, I know
// -----------------------------------------------------------------------------
let copyBtnEl;
let inputEl;
let popupEl;




/**
 * This triggers the deal, whatever
 *
 * @return {void}
 */
const gaNaarDeal = () => {
	if (copyTextToClipboard(inputEl.value)) {
		console.log("Copy success");
	}
	else {
		// Do some fallback here... but the user already sees the popup, so probably just tell them
		// it failed to copy?
		const concatText = "Failed to copy, lol";
		popupEl.innerText = concatText;
		popupEl.classList.add("bitchin");
	}

	// -------------------------------------------------------------------------
	// You could do an interval here to hide the popup
	// Or use a library
	// Which is what you were doing, but for Clipboard copying? Unless that also
	// does some popup-related-stuff
	// but I couldn't be arsed looking at that
	// -------------------------------------------------------------------------

	popupEl.classList.toggle("show");

	copyBtnEl.style.display = "none";
	inputEl.style.display = "block";
};

// Onload
window.onload = () => {
	copyBtnEl = document.getElementById("myInput2");
	inputEl = document.getElementById("myInput");
	popupEl = document.getElementById("myPopup");

	popupEl.addEventListener("click", () => {
		popupEl.classList.toggle("show");
	});

	// Just do this with CSS if you need it to be hidden on load
	inputEl.style.display = "none";
};
