<?
$row = 1;
$col = 1;
if(isset($_GET['row'])) $row = $_GET['row'];
if(isset($_GET['col'])) $col = $_GET['col'];
?>
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
	<table class="w3-table w3-bordered w3-border w3-hoverable">
		<? for($i=0; $i<$row; $i++) { ?>
			<tr>
				<? for($j=0; $j<$col; $j++) { ?>
					<td class="w3-center">◆</td>
				<? } ?>
			</tr>
		<? } ?>
	</table>
	<div class="w3-center w3-margin">
		<button class="w3-button w3-red" onclick="history.go(-1);">뒤로가기</button>
	</div>
</body>
</html>