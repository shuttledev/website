<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $msg = "Name: ".$name."\nEmail: ".$email."\Subject: ".$subject."\nMessage: ".$message;

//send email
    mail("haaruun2003@gmail.com", "Message" .$email, $msg);
}