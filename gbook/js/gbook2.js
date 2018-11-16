/*
개발 API명세서
1. API주소: gbook_api.php
2. chk:'I', writer:"A", content:"B", email:"C" --> 데이터 저장
3. chk:'D', id: 2 --> id가 2 번인 데이터를 삭제하겠다.
4. chk:'S' 데이터를 보내주겠다.
*/

//데이터 가져오기
/*
function getData(data) {
	if(data.code == 200) {
		var html = '';
		for(var i=0; i<data.lists.length; i++) {
			html += '<li>';
			html += '<div>'+data.lists[i].writer+' | '+data.lists[i].email+'</div>';
			html += '<div>'+data.lists[i].wdate+'</div>';
			html += '<p>'+data.lists[i].content+'</p>';
			html += '<i onclick="delData('+data.lists[i].id+');"></i>';
			html += '</li>';
		}
		$(".lists").html(html);
		$("input, textarea").val('');
	}
}

//데이터 삭제
function delData(id) {
	gbook.add({id:id, chk:"D"});
	gbook.send(getData);
}

//데이터 저장
function insData(){
	var writer = $("#writer");
	var email = $("#email");
	var content = $("#content");
	if(writer.val() == "") {
		alert("작성자를 입력해 주세요.");
		writer.focus();
		return false;
	}
	if(email.val() == "") {
		alert("이메일을 입력해 주세요.");
		email.focus();
		return false;
	}
	if(content.val() == "") {
		alert("글을 입력해 주세요.");
		content.focus();
		return false;
	}
	//내용이 모두 채워져 있다면...
	gbook.add({
		chk: "I",
		writer: writer.val(),
		content: content.val(),
		email: email.val()
	});
	gbook.send(getData);
}

//F5누르면 실행
var gbook = new Ajax("gbook_api.php");
gbook.add({chk:"S"});
gbook.send(getData);

$("#bt_save").click(insData);
*/


//리스트 가져오기
$.ajax({
	url: "gbook_api.php",
	type: "post",
	dataType: "json",
	data: {chk:"S"},
	success: function(data){
		var html = '';
		if(data.code == 200) {
			for(var i=0; i<data.lists.length; i++) {
				html += '<li>';
				html += '<div>'+data.lists[i].writer+' | '+data.lists[i].email+'</div>';
				html += '<div>'+data.lists[i].wdate+'</div>';
				html += '<p>'+data.lists[i].content+'</p>';
				html += '<i onclick="delData('+data.lists[i].id+');"></i>';
				html += '</li>';
			}
			$(".lists").html(html);
		}
	},
	error: function(a, b, c) {
		console.log(a, b, c);
	}
});

//데이터 삭제
function delData(id) {
	$.ajax({
		url: "gbook_api.php",
		type: "post",
		dataType: "json",
		data: {chk:"D", id:id},
		success: function(data){
			var html = '';
			if(data.code == 200) {
				for(var i=0; i<data.lists.length; i++) {
					html += '<li>';
					html += '<div>'+data.lists[i].writer+' | '+data.lists[i].email+'</div>';
					html += '<div>'+data.lists[i].wdate+'</div>';
					html += '<p>'+data.lists[i].content+'</p>';
					html += '<i onclick="delData('+data.lists[i].id+');"></i>';
					html += '</li>';
				}
				$(".lists").html(html);
			}
		},
		error: function(a, b, c) {
			console.log(a, b, c);
		}
	});
}

//데이터 입력
$("#bt_save").click(function(){
	var writer = $("#writer");
	var email = $("#email");
	var content = $("#content");
	if(writer.val() == "") {
		alert("작성자를 입력해 주세요.");
		writer.focus();
		return false;
	}
	if(email.val() == "") {
		alert("이메일을 입력해 주세요.");
		email.focus();
		return false;
	}
	if(content.val() == "") {
		alert("글을 입력해 주세요.");
		content.focus();
		return false;
	}
	$.ajax({
		url: "gbook_api.php",
		type: "post",
		dataType: "json",
		data: {chk:"I", writer:writer, email:email, content:content},
		success: function(data){
			var html = '';
			if(data.code == 200) {
				for(var i=0; i<data.lists.length; i++) {
					html += '<li>';
					html += '<div>'+data.lists[i].writer+' | '+data.lists[i].email+'</div>';
					html += '<div>'+data.lists[i].wdate+'</div>';
					html += '<p>'+data.lists[i].content+'</p>';
					html += '<i onclick="delData('+data.lists[i].id+');"></i>';
					html += '</li>';
				}
				$(".lists").html(html);
				$("input, textarea").val('');
			}
		},
		error: function(a, b, c) {
			console.log(a, b, c);
		}
	});
});