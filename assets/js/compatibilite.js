var number_checked = 0;

function accueil(){
    document.getElementById('comparer').disabled = true;
    document.getElementById("myProgress").style.display = "none";
}

function essaiAjouter() {//Fonction de test pour ajouter
    if (validateForm()) {
        ajouter();
        return true;
    }
    return false;
}

function toutSupp(){//Supprime les infos rentrées par l'utilisateur dans le tableau
    var body = document.getElementById("body");
    while (body.hasChildNodes()) {
        body.removeChild(body.lastChild);
    }
    document.getElementById('comparer').disabled = true;
    document.getElementById("myProgress").style.display = "none";
    number_checked=0;
}


function validateForm() {//Vérifie si tous les champs sont remplis

    // On sort si l'un des champs nom, prenom, email est vide
    if ((document.getElementById("prenom").value == "") ||
        (document.getElementById('date').value == "") ||
        (document.getElementById('signe').value == "")) {
        alert("un des champs est vide");
        return false;
    }

    // tous les controles sont bons. on ajoute dans la table
    return true;
}

function ajouter(){//Ajouter les données des utilisateurs dans le tableau

    // on recupere le tboody de la table dans une variable
    var myTbody = document.getElementById('tabUsers').tBodies[0];

    // on crée un nouveau <tr> ... </tr>
    var newTR = document.createElement('TR');

    // On ajoute une case à cocher
    var newTD = document.createElement('TD');
    newTD.innerHTML = "<input type=\"checkbox\" id=\"chk\" onclick=\"check_box()\"/>";
    newTR.appendChild(newTD);

    // On ajoute les elements restants
    const liste = ["prenom", "date", "signe"];
    liste.forEach(function (item, index) {
        // on ajoute un nouveau TD
        var newTD = document.createElement('TD');

        // on met la valeur de (nom ou prenom ou email ou role) dans ce TD
        newTD.textContent = document.getElementById(item).value;

        // on ajoute le TD au nouveau TR
        newTR.appendChild(newTD);
    });
    myTbody.appendChild(newTR);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// tester la compataibilité de 2 personnes
function mycomparer(){

    if (number_checked != 2){
        alert("Vous devez sélectionner exactement 2 noms pour les comparer");
        return false;
    }

    //Reference the Table.
    var myTbody = document.getElementById('tabUsers').tBodies[0];

    //Reference the CheckBoxes in Table.
    var checkBoxes = myTbody.getElementsByTagName("INPUT");

    message = "Vous voulez comparer ";

    //Loop through the CheckBoxes.
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
            message += " " + row.cells[1].innerHTML;
        }
    }

    //Display selected Row data in Alert Box.
    alert(message);
    progressBar(getRandomInt(100));

}

function progressBar(limit) {//Désactive les boutons "ajouter" et "tâche" tant que la barre n'est pas remplie
    document.getElementById("myProgress").style.display = "block";

    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
        if (width == limit) {
            clearInterval(id);

        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerText = Math.round(width) + " %";
        }
    }
}


function check_box() {

    document.getElementById("myProgress").style.display = "none";

    // on recupere la tbody
    var myTbody = document.getElementById('tabUsers').tBodies[0];

    // on compte le nombre de checkbox cochees
    var checkBoxes = myTbody.getElementsByTagName("INPUT");

    var nb_checked = 0;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            nb_checked += 1;
        }
    }
    number_checked = nb_checked;

    if (number_checked == 2){
        document.getElementById('comparer').disabled = false;
    } else {
        document.getElementById('comparer').disabled = true;
    }

}


function GetSelected() {
    //Reference the Table.
    var myTbody = document.getElementById('tabUsers').tBodies[0];

    //Reference the CheckBoxes in Table.
    var checkBoxes = myTbody.getElementsByTagName("INPUT");

    message = "";

    //Loop through the CheckBoxes.
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
            message += row.cells[1].innerHTML;
            message += "   " + row.cells[2].innerHTML;
            message += "   " + row.cells[3].innerHTML;
            message += "\n";
        }
    }

    //Display selected Row data in Alert Box.
    alert(message);
}






