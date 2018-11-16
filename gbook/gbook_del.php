<?
include_once "inc/connect.php";

if(isset($_GET['id'])) {
	$sql = " delete from guestbook where id=".$_GET['id'];
	mysqli_query($connect, $sql);
}
?>
<script>
location.href = "gbook.php";
</script>