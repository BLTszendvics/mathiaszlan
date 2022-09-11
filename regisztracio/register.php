<?php

    // Maksi Dávid ¤ 2022 ¤ MathiászLAN
    if (isset($_POST['csapatNev']) 
    && isset($_POST['cskNev']) 
    && isset($_POST['cskEmail']) 
    && isset($_POST['csapattag2']) 
    && isset($_POST['csapattag3']) 
    && isset($_POST['csapattag4']) 
    && isset($_POST['jatek']))
    {
        include('Model/Csapat.php');
        $csapat = new Csapat($_POST['csapatNev'],
                            $_POST['cskNev'],
                            $_POST['cskEmail'],
                            array(
                                $_POST['csapattag2'],
                                $_POST['csapattag3'],
                                $_POST['csapattag4']
                            ),
                            $_POST['jatek']);
        
        include("Utils/SQLConnect.php");

        $query = "INSERT INTO `csapatok`(`Base64`) VALUES ('{$csapat->getBase64Data()}')";
        if ($sql->query($query) == TRUE)
        {
            echo('Sikeres regisztráció');
        }
        else
        {
            echo($sql->error);
        }
                             
    }
    else
    {
        header("HTTP/1.1 400 Bad Request");
        echo("HTTP 400");
    }

?>