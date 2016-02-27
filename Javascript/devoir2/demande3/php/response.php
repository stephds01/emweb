
/**
 * Created by PhpStorm.
 * Name: Stéphanie
 * Date: 27/02/2016
 * Time: 12:14
 */
<!--    <div id="conteneur">-->
        <?php $notes = array ('do' => 'C', 're' => 'D', 'mi' => 'E', 'fa' => 'f', 'sol' => 'G', 'la' => 'A', 'si' => 'B'); ?>



            <?php
            if($_SERVER['REQUEST_METHOD'] == 'GET') {
                if(!empty($_POST['note_choisie'])) {

                    foreach ($notes as $note => $valeur) {
                        $result = '<p class="rep">La notation américaine pour la note <span class="red">"' . $_POST['note_choisie'] . '"</span> est <span class="red">"' . $notes[$_POST['note_choisie']] . '"</span></p>';
                    }
                }
                echo $result;
                return;
            }
            ?>
