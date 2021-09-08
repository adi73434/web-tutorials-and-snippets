<?php

require __DIR__ . "/../vendor/autoload.php";

// NOTE: This file acts as a standalone server so, really, you should run it via CLI
// WARNING: If you run this by navigating to the file via phpserver, you may need to kill this in your task manager
// of choice because it didn't seem to want to quit for me.

$server = new React\Http\HttpServer(function (Psr\Http\Message\ServerRequestInterface $request) {
	return new React\Http\Message\Response(
		200,
		array(
			'Content-Type' => 'text/plain'
		),
		"Hello World!\n"
	);
});

$socket = new React\Socket\SocketServer('127.0.0.1:8080');
$server->listen($socket);

echo "Server running at http://127.0.0.1:8080" . PHP_EOL;
