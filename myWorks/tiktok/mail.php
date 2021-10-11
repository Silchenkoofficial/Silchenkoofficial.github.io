<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($_POST['email'] == "")   $errors[] = "Поле 'Ваш e-mail' не заполнено!";
    if($_POST['message'] == "") $errors[] = "Поле 'Текст сообщения' не заполнено!";

    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message  = "Имя пользователя: <b>" . $_POST['name'] . "</b><br/>";
        $message .= "E-mail пользователя: <b>" . $_POST['email'] . "</b><br/>";
        $message .= "Текст письма:<br /><b>" . $_POST['message'] . "</b>";
        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }

    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "nikita.silchenko.work@yandex.ru"; 
        // тема письма
        $subject = "Тестовое письмо";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: <" . $_POST['email'] . ">\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
?>