<html style="background-color:#777985">


<script>
	
	// -------------------------------------------------------------------------
	// This is here so that the serverDataForm is actually a thing. This is
	// basically making JavaScript wait for the HTML element to exist
	// -------------------------------------------------------------------------
	window.onload = function () {

		// -------------------------------------------------------------------------
		// Add event listener to the submit event 
		// -------------------------------------------------------------------------
		const serverDataForm = document.getElementById("serverDataForm");
		const serverDataFormIp = document.getElementById("serverIpInput");

		var keepReChecking = false;

		var serverDataIp;

		serverDataForm.addEventListener("submit", event => {
			// Stop refresh
			event.preventDefault();
			keepReChecking = false;
			// Get value to submit
			serverDataIp = serverDataFormIp.value;
			// Make request
			getDataStuff();
		});


		// ---------------------------------------------------------------------
		// Set an interval to re-check the data every 500 ms ONLY IF the last fetch
		// was successful
		// ---------------------------------------------------------------------
		setInterval(() => {
			if (keepReChecking) {
				getDataStuff();
			}
		}, 500);
		

		// -------------------------------------------------------------------------
		// API Request
		// -------------------------------------------------------------------------
		function getDataStuff() {

			// Location
			fetch("js_get_data.php", {
					method: "POST",
					credentials: "omit",
					// Submit JSON data
					body: JSON.stringify({
						server_ip: serverDataIp,
					}),
				})
				// -------------------------------------------------------------
				// Accept response as JSON
				// -------------------------------------------------------------
				.then(response => response.json())
				// -------------------------------------------------------------
				// Handle response data
				// -------------------------------------------------------------
				.then(data => {
					if (data.message === "success") {
						
						// -----------------------------------------------------
						// Horrible way of templating HTML
						// -----------------------------------------------------
						var templateHtml = "<dl>";
						templateHtml += "<dt>version</dt>";
						templateHtml += "<dd>" + data.version + "</dd>"
						templateHtml += "<dt>online / max</dt>"
						templateHtml += "<dd>" + data.online + " / " + data.max + "</dd>"
						templateHtml += "</dl>";

						templateHtml += "<p>Last Updated:" + new Date() + "</p>";
						
						// -----------------------------------------------------
						// Add HTML to the parent-something element
						// -----------------------------------------------------
						const parentHtml = document.getElementById("parent-something");
						parentHtml.innerHTML = templateHtml;

						keepReChecking = true;
					} else {
						const parentHtml = document.getElementById("parent-something");
						parentHtml.innerHTML = "fuken failed";

						keepReChecking = false;
					}
				});
		}
	}
</script>


<body>

	<!-- Form -->
	<form id="serverDataForm">
		Server: <input id="serverIpInput" type="text" name="server"><br>
		<button type="submit">Submit</button>
	</form>

	<!-- Parent of result -->
	<div id="parent-something">

	</div>
</body>

</html>