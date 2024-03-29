<?php
 if( !empty($_POST['email']) || !empty($_PUT['email'])){
    $email=$_POST['email'];
    $comments=$_POST['comments'];

    if (!isset($email)){
      $email=$_PUT['email'];
    }
    if(!isset($problem_type)){
      $problem_type=$_PUT["othprob"]
    }
    $headers="From:".$email."\r\n";
    $headers .= "MIME-Version: 1.0\r\n"; 
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    
    $nowtime = time();
    if (!is_dir("contacts")){
      mkdir("contacts");
    }
    $success = file_put_contents("contacts/issue".$nowtime.".txt", $comments); 
    
    $my_subject = "Contact Request -- slice.parrotsour.com";

    $my_message = "Reported by ".$email.': '.$comments;
    mail_attachment("jem3973@rit.edu", $email, $email, $email, $my_subject, $my_message);        
}

function mail_attachment($mailto, $from_mail, $from_name, $replyto, $subject, $msg) {
  $uid = md5(uniqid(time()));
 
  $eol = PHP_EOL;

  $header = "From: ".$from_name." <".$from_mail.">".$eol;
  $header .= "Reply-To: ".$replyto.$eol;
  $header .= "MIME-Version: 1.0".$eol;
  $header .= "Content-type: multipart/alternative; boundary=----=_NextPart_" . $uid;

  $message = "Hello in plain text";

  $message = "This is multipart message using MIME\n";

  $message .= "------=_NextPart_" . $uid . "\n";
  $message .= "Content-Type: text/plain; charset=UTF-8\n";
  $message .= "Content-Transfer-Encoding: 7bit". "\n\n";
  $message .= $msg . "\n\n";

  $message .="------=_NextPart_" . $uid . "\n";
   $message .= "Content-Type: text/plain; charset=UTF-8\n";
  $message .= "Content-Transfer-Encoding: 7bit". "\n\n";
  $message .= "Test here.\n\n";
  $message .= "------=_NextPart_" . $uid . "--";
 
  if (@mail($mailto, $subject, $message, $header, " -fwebmaster@parrotsour.com")) {
    echo "mail send ... OK"; // or use booleans here
  } else {
    $errorMessage = error_get_last()['message'];
    http_response_code(500);
    echo $errorMessage;
    echo var_dump($errorMessage);
    echo "mail send ... ERROR!";
 }
}
?>