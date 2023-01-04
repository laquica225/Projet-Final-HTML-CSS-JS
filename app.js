document.getElementById('formulaire').addEventListener("submit", function(e) {
    e.preventDefault()

    var erreur;
    var name = document.getElementById('name')
    var oders = document.getElementById('oder')
    var musch = document.getElementById('musch')
    var number = document.getElementById('number')
    var food = document.getElementById('food')
    var date = document.getElementById('date')

    if (!name.value) {
        erreur = "Please enter a name"
    }
    if (!oders.value) {
        erreur = "Please enter a orders"
    }
    if (!musch.value) {
        erreur = "Please enter a musch"
    }
    if (!number.value) {
        erreur = "Please enter a number"
    }
    if (!food.value) {
        erreur = "Please enter a food"
    }
    if (!date.value) {
        erreur = "Please enter a date"
    }

    if(erreur) {
        e.preventDefault()
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !')
    }
   
    alert('Formulaire envoyé')
})