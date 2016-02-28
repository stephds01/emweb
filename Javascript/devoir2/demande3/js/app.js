/**
 * Created by Stéphanie on 01/02/2016.
 */
window.addEventListener("load", function (){

    //Je crée le btn notation,close & le formulaire
    var $notation = document.getElementById('notation'),
        close = document.createElement('button'),
        closeText = document.createTextNode('X');
        close.id="close";
    var $formulaire = document.getElementById('formulaire');



        //Qd je clique sur le btn notation
        $notation.addEventListener('click', function (event) {
            event.preventDefault ? event.preventDefault() : event.returnValue = false;

            //Si la class 'formulaireClass' existe
            if($formulaire.classList.contains('formulaireClass')){

                $notation.classList.toggle('notationClass');
                close.classList.toggle('closeClass');
                $formulaire.classList.toggle('formulaireClass');
            }
            //Sinon faire la requete Ajax
            else {

                var xhr = new XMLHttpRequest();
                xhr.addEventListener('readystatechange', function () {

                    //si l'etat == 4 & status == ok alors j' afficher
                    if (xhr.readyState === 4 && xhr.status == "200") {

                        $notation.setAttribute('class', 'notationClass');
                        close.appendChild(closeText);
                        document.body.appendChild(close);
                        document.body.insertBefore(close, $notation);
                        var div = document.getElementById('formulaire');

                        div.innerHTML = xhr.responseText;




                        //Ecoute le select
                        var $noteChoisie = document.getElementById('noteChoisie');
                        var $formulaire = document.getElementById('formulaire');


                        $formulaire.addEventListener('change', function(event) {
                            event.preventDefault ? event.preventDefault() : event.returnValue = false;
                            //alert(note_choisie);

                            var xhr = new XMLHttpRequest();
                            xhr.addEventListener('readystatechange', function () {

                                //si l'etat == 4 & status == ok alors j' afficher
                                if (xhr.readyState === 4 && xhr.status == "200") {

                                    var response = document.getElementById('response');

                                    //alert(xhr.responseText);
                                    response.innerHTML = xhr.responseText;
                                } else {

                                }
                            },false);
                            xhr.open('POST', $noteChoisie.action, true);
                            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded, charset=UTF-8");
                            xhr.send('php/response.php?note=' + $noteChoisie.note_choisie);
                        },false);






                    }else {
                        console.log('error code ' + xhr.status + ' : ' + xhr.statusText);
                    }
                }, false);

                xhr.open('POST', 'php/requete.php?note=' + $formulaire.action, true);
                xhr.send();
            }
        }, false);






    //Function qd on clique sur le btn close
    function buttonClose() {
        $notation.classList.toggle('notationClass');
        $formulaire.classList.toggle('formulaireClass');
        close.classList.toggle('closeClass');
    }
    close.addEventListener('click', buttonClose, false);




},false);



