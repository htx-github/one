<?php
	header("Content-type: text/html; charset=utf-8");
	$a = array('aa','bb','cc');
	echo json_encode(array (
				'a1' =>$a,
				'a2' =>"随便",
				'a3' =>"换头像"
			));
