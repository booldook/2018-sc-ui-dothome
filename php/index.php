<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
<?
$greeting = "Hello";
if(isset($_GET['ln'])) {
	if($_GET['ln'] == "KR") {
		$greeting = "안녕하세요";
	}
	else if($_GET['ln'] == "JP") {
		$greeting = "こんにちは";
	}
}
echo '<p style="text-align:center;font-size:5rem;">'.$greeting.'</p>';
?>
</body>
</html>