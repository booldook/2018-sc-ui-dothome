<?
include_once "inc/connect.php";

$chk = "";
if(isset($_POST['chk'])) $chk = $_POST['chk'];

$id = "";
if(isset($_POST['id'])) $id = $_POST['id'];

$writer = "";
if(isset($_POST['writer'])) $writer = $_POST['writer'];

$content = "";
if(isset($_POST['content'])) $content = $_POST['content'];

$email = "";
if(isset($_POST['email'])) $email = $_POST['email'];

$wdate = date("Y-m-d H:i:s");

if($chk == "I") {
	$sql = " insert into guestbook set ";
	$sql.= " content = '$content', ";
	$sql.= " writer = '$writer', ";
	$sql.= " email = '$email', ";
	$sql.= " wdate = '$wdate' ";
	mysqli_query($connect, $sql);

	$result = '{';
	$result.= '"code":200,';
	$result.= '"lists":[';
	$sql = " select * from guestbook order by id desc ";
	$result = mysqli_query($connect, $sql);
	while($rs = mysqli_fetch_array($result)) {
		$result.= '{"id":'.$rs['id'].', "writer":"'.$rs['writer'].'", "content":"'.$rs['content'].'", "wdate":"'.$rs['wdate'].'", "email":"'.$rs['email'].'"},';
	}	
	$result = substr($result, 0, -1);
	$result.= ']';
	$result.= '}';

	echo $result;
}
?>