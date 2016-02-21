<?php

$notes = array ('do' => 'C', 're' => 'D', 'mi' => 'E', 'fa' => 'f', 'sol' => 'G', 'la' => 'A', 'si' => 'B');



    if (isset ($_GET['note']))
    {
        $result = '<p class="rep">La notation américaine pour la note <span class="red">"' . $_GET['note'] . '"</span> est <span class="red">"' . $notes[$_GET['note']] . '"</span></p>';
        echo $result;
        return;

    }
