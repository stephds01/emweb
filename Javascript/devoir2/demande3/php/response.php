<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>

</head>

<body>

    <?php
    $notes = array ('do' => 'C', 're' => 'D', 'mi' => 'E', 'fa' => 'f', 'sol' => 'G', 'la' => 'A', 'si' => 'B');
    ?>

    <?php
    if($_SERVER["REQUEST_METHOD"] == 'POST') {
        if (!empty($_POST['note_choisie'])) {
            $result = 'Aucune note choisie ';
        } else {
            $notte = $_POST['note_choisie'];
            $result = '<p class="rep">La notation américaine pour la note <span class="red">" . $notte . "</span> est la note <span class="red">" . $notes[$notte] . "</span></p>';
        }
        echo $result;
        return;
    }
        ?>

</body>


</html>

