<?php
$dir = 'archiv/2016-01-20-Pinguinparty/';
chdir($dir);
$images = glob('*.jpg');


$out = array(
        'file' => $images[array_rand($images)],
        'path' => $dir
);

//send JSON
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");
echo json_encode($out);
?>