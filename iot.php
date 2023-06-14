<?php
$client = new MongoDB\Client(
   'mongodb+srv://uvanshankar02:dzVRc4fqiyY7u5dw@cluster0.ejoioxu.mongodb.net/?retryWrites=true&w=majority'
);
$db = $client->Decision->path;

$document = $collection->findOne(['_id' => '94301']);
var_dump($document);
?>