<?php
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$mensaje = $_POST['mensaje'];
	$asunto = $_POST['asunto'];
	
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	$headers .= "From: ".$nombre." <".$email.">\r\n";
	//$headers .= "Reply-To: ipimentel77@gmail.com\r\n";
	//$headers .= "Cc: maria@desarrolloweb.com\r\n";
	//$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n";
	mail("ipimentel77@gmail.com",$asunto,$mensaje,$headers);
?>