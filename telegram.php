<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
      $title = strip_tags($_POST['name']);
      $titleFieldset = "Имя: ";
    }
  }
}
if (!empty($_POST['contact'])){
  if (isset($_POST['contact'])) {
    if (!empty($_POST['contact'])){
      $email = strip_tags($_POST['contact']);
      $emailFieldset = "Контакт: ";
    }
  }
}
if (!empty($_POST['username'])){
  if (isset($_POST['username'])) {
    if (!empty($_POST['username'])){
      $content = strip_tags($_POST['username']);
      $contentFieldset = "Username: ";
    }
  }
}


$token = "";
$chat_id = "-1001771111758";
$arr = array(
  $titleFieldset => $title,
  $emailFieldset => $email,
  $contentFieldset => $content
);
$txt = '';
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
}
?>