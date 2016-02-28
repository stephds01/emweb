<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>

<body>

    <div id="conteneur">
        <?php $notes = array ('do' => 'C', 're' => 'D', 'mi' => 'E', 'fa' => 'f', 'sol' => 'G', 'la' => 'A', 'si' => 'B'); ?>

<!--        --><?php
//            if (isset($_GET['note_choisie'])) {
//                echo '<p class="rep">La notation américaine pour la note <span class="red">"' . $_GET['note_choisie'] . '"</span> est <span class="red">"' . $notes[$_GET['note_choisie']] . '"</span></p>';
//            }
//        ?>

        <h1>Convertisseur de note de musique</h1>

        <form name="formulaire" action="requete.php" method="post">

            <label for="note_choisie" >Veuillez sélectionner une note à convertir:</label>
                <select name="note_choisie" id="noteChoisie">
                    <?php foreach ($notes as $note => $valeur) { ?>
                    <option value="<?php echo $note; ?>"> <?php echo $note; ?></option><?php } ?>
                </select>
        </form>
    </div>

</body>


</html>


