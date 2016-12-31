<?php
$dir = 'selfies/';
chdir($dir);
$images = glob('*.jpg');

$bannerImage = "banner.jpg";

array_push($images, $bannerImage);


$randomFile = $images[array_rand($images)];
$out = array(
        'file' => $randomFile,
        'path' => $randomFile == $bannerImage ? "/" : $dir
);

//send JSON
header('content-type: application/json; charset=utf-8');
echo json_encode($out);
?>
