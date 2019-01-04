<?php
$anniversary = $_GET['anniversary'];
$contents= file_get_contents('http://petipois.co.uk/json/anniversary.json');
$years = json_decode($contents);
$calculation = date('Y')-$anniversary;
foreach ($years as $year) {
	if($year->year == $calculation)
	{
		echo $year->modern;
	}
}
?>
