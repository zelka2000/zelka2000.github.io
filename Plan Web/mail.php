<?php 
$to = "anthonzelenov@yandex.ru"; 
$tema = "форма обратной связи на PHP"; 
$message = "Ваше имя: ".$_POST['name']."<br>"; 
$message .= "Email: ".$_POST['email']."<br>"; 
$message .= "Номер телефона: ".$_POST['phone']."<br>"; 
$message .= "Сообщение: ".$_POST['messages']."<br>"; 
$headers = 'MIME-Version 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
mail($to, message, $headers); 
ob_start(); 
$new_url = 'contact.html'; 
header('Location: '.$new_url); 
ob_end_flush(); 
?>