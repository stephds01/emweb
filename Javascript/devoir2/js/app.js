/**
 * Created by Stéphanie on 01/02/2016.
 */
window.addEventListener("load", function (){

    //Tableau
    var tabs = ['Sélectionner la note', 'do', 're', 'mi', 'fa', 'sol', 'la', 'si'],
        $notation = document.getElementById('notation');

    //Mes Functions

    var formulaire = document.createElement('form');
        formulaire.setAttribute('method', 'get');
        formulaire.setAttribute('action', 'php/requete.php');


    var p = document.createElement('p');
        pText = document.createTextNode('Choisissez une note pour obtenir son équivalent en notation américaine.');

    var select = document.createElement('select');
        select.setAttribute('id','list' );

    document.body.appendChild(formulaire);

    var list = document.getElementById('list');

    //Mes functions
    function addOption() {
        //var list = document.getElementById('list');

        for (var i = 0, j = tabs.length; i < j; i++) {

            var option = document.createElement('option');
            var optionText = document.createTextNode(tabs[i]);

                if(option[i] === select.options[0]){
                        option.setAttribute('selected', 'selected');
                        option.setAttribute('disabled', 'disabled');
                }
                option.appendChild(optionText);
                select.appendChild(option);


            }
        p.appendChild(pText);
            formulaire.appendChild(p);
            formulaire.appendChild(select);

        $notation.removeEventListener('click', addOption, false);
    }



    function listenSelect() {
            var $list = document.getElementById('list');

            console.log($list.options[$list.selectedIndex].innerHTML);

        var xhr = new XMLHttpRequest();
        xhr.open('get','php/requete.php?note=' + $list.value ,true);
        xhr.send();

        function response($result) {
            if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0) ){
                console.log('le resultat est ' + $result);

                var div = document.getElementById('result1');
                div.innerHTML = xhr.responseText;
            } else {
                console.log('Bahhhhh');
            }
        }

        xhr.addEventListener('readystatechange', response, false);
    }


    function lol () {
        if(list.option == list.options[0]){
            //var lol = list.options[0];
            // console.log(lol);

            option.setAttribute('selected', 'selected');
            //option.setAttribute('disabled', 'disabled');
            //}
        }
    }







    $notation.addEventListener('click', addOption, false);
    select.addEventListener('change', listenSelect, false);

});



