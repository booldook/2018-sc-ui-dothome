<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>테스트</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="../../css/main.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
<div class="wrap">
<div class="top_menu clear">
	<ul>
		<li>Sitemap</li>
		<li>Join</li>
		<li>Login</li>
	</ul>
</div>
<div class="top clear">
	<div class="logo">LOGO</div>
	<div class="bars">
		<span class="fa fa-bars"></span>
	</div>
</div>
<ul class="navs clear">
	<li><a href="../../main/main.php?S=0">HOME</a></li>
	<li><a href="../../board/bbs/board.php?bo_table=gallery&S=1">PORTFOLIO</a></li>
	<li><a href="../../board/bbs/board.php?bo_table=notice&S=2">NOTICE</a></li>
	<li><a href="../../sub/about.php?S=3">ABOUT ME</a></li>
</ul>

<script>
<?
$location = 0;
if(isset($_GET['S'])) $location = $_GET['S'];
?>
$(".navs li").css({"background-color":"#f8f8f8","border-bottom":"1px solid #999"});
$(".navs li").eq(<? echo $location?>).css({"background-color":"#fff","border-bottom":"1px solid #fff"});
</script>
<div class="mbody">