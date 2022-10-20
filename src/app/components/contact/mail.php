if (isset($_GET("email")) && isset($_GET("textarea")){
$mail = isset($_GET("email");
$texto = isset($_GET("textarea");

$para = 'frighetto23@gmail.com';
$titulo = 'Portfolio';
$mensaje = $texto;
$cabeceras = 'From:' . $mail . "\r\n" .
'Reply-To: webmaster@example.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);
}