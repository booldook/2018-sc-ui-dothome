<?
include_once "inc/connect.php";
include_once "inc/head.php";
?>
<ul class="lists">
	<?
	$sql = " select * from guestbook order by id desc ";
	$result = mysqli_query($connect, $sql);
	while($rs = mysqli_fetch_array($result)) {
	?>
		<li>
			<div><?=$rs['writer']?> | <?=$rs['wdate']?></div>
			<p><?=$rs['content']?></p>
			<i onclick="delData(<?=$rs[id]?>);"></i>
		</li>
	<?
	}
	?>
</ul>
<section class="write">
	<form name="g_form" method="post" action="gbook_ok.php">
		<div>
			<input type="text" name="writer" id="writer" class="w3-input w3-border" placeholder="작성자">
		</div>
		<div>
			<input type="text" name="email" id="email" class="w3-input w3-border" placeholder="이메일">
		</div>
		<div>
			<textarea class="w3-input w3-border" name="content" id="content" placeholder="방명록을 작성해 주세요."></textarea>
		</div>
		<div>
			<button type="button" class="w3-button w3-red" id="bt_save">저장</button>
			<button type="reset" class="w3-button w3-red">취소</button>
		</div>
	</form>
</section>
<?
include_once "inc/foot.php";
?>