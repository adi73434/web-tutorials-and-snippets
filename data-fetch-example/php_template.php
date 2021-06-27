<html style="background-color:#777985">

	<body>

		<form method="post">
			Server: <input type="text" name="server"><br>
			<input type="submit">
		</form>
		<?php
		if (isset($_POST["server"])) {
			$serverip = $_POST["server"];
			$s = json_decode(file_get_contents("https://api.mcsrvstat.us/2/{$serverip}"));
			

			$is_successful = true;
			$return_html = "";

			// -----------------------------------------------------------------
			// Check if shit's fucked
			// -----------------------------------------------------------------
			if (!isset($s->version) || !isset($s->players->online) || !isset($s->players->max) || !isset($s->motd->clean) || !isset($s->players->list)) {
				$is_successful = false;
			}
			
			if (!$is_successful) {
				// -----------------------------------------------------------------
				// Default values if unsuccessful
				// -----------------------------------------------------------------
				$return_html = "<dl>
					<dt>version</dt>
					<dd>Unknown</dd>
					<dt>online / max</dt>
					<dd>N/A / N/A</dd>
				</dl>
				<div>";
			} else {
				// -------------------------------------------------------------
				// Get values properly
				// -------------------------------------------------------------
				$ver = $s->version;
				$players_online = $s->players->online;
				$players_max = $s->players->max;

				$return_html = "<dl>
					<dt>version</dt>
					<dd>$ver</dd>
					<dt>online / max</dt>
					<dd>$players_online / $players_max</dd>
				</dl>
				<div>";
				
				if (isset($s->players->list)) {
					foreach ($s->players->list as $player) {
						// -----------------------------------------------------
						// Add to return HTML
						// -----------------------------------------------------
						$return_html .= $player.'<br />';
					}
				}
			}

			// -----------------------------------------------------------------
			// Regardless of success/fail, show the table
			// -----------------------------------------------------------------
			$return_html .= "</div>";

			echo $return_html;
		}
		?>

	</body>
</html> 