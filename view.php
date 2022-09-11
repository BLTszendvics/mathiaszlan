<?php

    include("Utils/SQLConnect.php");
    include("Model/Csapat.php");

    $query = "SELECT * FROM csapatok WHERE ID = 1";
    $response = $sql->query($query);

    $csapatok = array();
    if ($response->num_rows > 0)
    {
        while($row = $response->fetch_assoc())
        {
            $array_push($csapatok, unserialize(base64_decode($row['Base64'])));
        }

        foreach ($csapatok as $csapat)
        {
            echo('<pre>');
            var_dump($csapat);
            echo('</pre>');
            echo('- = - = - = - = - = - = - = - = - =');
        }
    }
    else
    {
        echo('Nincs csapat!');
    }

?>