<?php
$project_name = 'info@noproblems-centre.ru';
$fromEmail = 'info@noproblems-centre.ru';
$emails = ['dir@kuznetsov.studio'];

$domain = 'https://www.noproblems-centre.ru/';
$logoUrl = 'https://www.noproblems-centre.ru/assets/images/logo2-479x128.png';
$logoWidth = '200';// px
$namecompany = 'ЯЗЫКОВОЙ ЦЕНТР NO PROBLEMS';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

        




if ($method === 'POST') {
   if (!empty($_POST["fio"])) { 
        $subject = 'Заявка с сайта "ЯЗЫКОВОЙ ЦЕНТР NO PROBLEMS"';
        $body = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';
        $body .= '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head>';
        $body .= '<body>';
        $body .= '<table width="100%" bgcolor="#FFFFFF"><tbody><tr><td>';
        $body .= '<br><br>';
        $body .= '<table width="600" align="center" cellspacing="1" cellpadding="20" bgcolor="#000000"><tbody><tr>';
        $body .= '<td bgcolor="#000000" height="75" align="center">';
        $body .= '<a href="' . $domain . '" target="_blank">';
        $body .= '<img src="' . $logoUrl . '" width="' . $logoWidth . '" alt="logo" border="0">';
        $body .= '</a>';
        $body .= '</td>';
        $body .= '</tr>';
        $body .= '<tr>';
        $body .= '<td bgcolor="#FFFFFF">';
        $body .= '<p></p>';
        
         if (!empty ($_POST['fio'])) {
            $body .= '<p><strong>ФИО: </strong>' . $_POST['fio'] . '</p>';
        }        
        if (!empty ($_POST['tel'])) {
            $body .= '<p><strong>Телефон: </strong>' . $_POST['tel'] . '</p>';
        }         
        if (!empty ($_POST['email'])) {
            $body .= '<p><strong>Почта: </strong>' . $_POST['email'] . '</p>';
        }        
        if (!empty ($_POST['company'])) {
            $body .= '<p><strong>Компания: </strong>' . $_POST['company'] . '</p>';
        }
        if (!empty ($_POST['comment'])) {
            $body .= '<p><strong>Комментарий: </strong>' . $_POST['comment'] . '</p>';
        }
        $body .= '<p></p>';
        $body .= '</td>';
        $body .= '</tr></tbody></table>';
        $body .= '</td></tr></tbody></table></body></html>';

        function adopt($text)
        {
            return '=?UTF-8?B?' . Base64_encode($text) . '?=';
        }

        foreach ($emails as $email) {
            $headers = "MIME-Version: 1.0" . PHP_EOL .
                "Content-Type: text/html; charset=utf-8" . PHP_EOL .
                'From: ' . adopt($project_name) . ' <' . $fromEmail . '>' . PHP_EOL .
                'Reply-To: ' . $email . '' . PHP_EOL;
            mail($email, adopt($subject), $body, $headers);
        }
	   
	   echo '<div class="alert alert-success" role="alert">Зявка успешно отправлена!</div>';
     
   } else {
	   echo '<div class="alert alert-danger" role="alert">Заполните все поля!</div>';
       
    }
}
