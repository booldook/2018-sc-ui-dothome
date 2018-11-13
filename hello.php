<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>시작페이지</title>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body class="w3-center">
	<?
	$greeting = "Hello World";
	if(isset($_GET['ln'])) {
		if($_GET['ln'] == 'kr' or $_GET['ln'] == 'ko') {
			$greeting = "안녕 세상";
		}
		else if($_GET['ln'] == 'jp') {
			$greeting = "こんにちは世界";
		}
		else if($_GET['ln'] == 'cn') {
			$greeting = '你好，世界';
		}
	}
	echo '<p class="w3-red" style="font-size:3rem; padding:1rem;">'.$greeting.'</p>';
	?>
</body>
</html>