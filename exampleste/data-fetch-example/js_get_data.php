<?php

$in_data = json_decode(file_get_contents('php://input'));

if (isset($in_data->server_ip)) {
	$result = json_decode(file_get_contents("https://api.mcsrvstat.us/2/{$in_data->server_ip}"));
	
	if (isset($result->version)) {
		echo json_encode(
			array(
				"message" => "success",
				"version" => $result->version,
				"online" => $result->players->online,
				"max" => $result->players->max,
			)
		);
	} else {
		echo json_encode(
			array(
				"message" => "failure",
			)
		);
	}
}
