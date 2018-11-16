<?
include_once "inc/connect.php";

$writer = "";
if(isset($_POST['writer'])) $writer = $_POST['writer'];

$content = "";
if(isset($_POST['content'])) $content = $_POST['content'];

$email = "";
if(isset($_POST['email'])) $email = $_POST['email'];

$wdate = date("Y-m-d H:i:s");


//insert/update/select/delete
/*
$sql = " insert into guestbook set ";
$sql.= " title = '".$title."', ";
$sql.= " content = '".$content."', ";
$sql.= " writer = '".$writer."', ";
$sql.= " email = '".$email."', ";
$sql.= " wdate = '".$wdate."' ";
*/
$sql = " insert into guestbook set ";
$sql.= " content = '$content', ";
$sql.= " writer = '$writer', ";
$sql.= " email = '$email', ";
$sql.= " wdate = '$wdate' ";

mysqli_query($connect, $sql);
?>
<script>
location.href = "gbook.php";
</script>