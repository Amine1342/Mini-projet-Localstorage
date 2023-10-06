function register(e) {
    e.preventDefault();

    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prénom");
    var photo = document.getElementById("photo");
    var description = document.getElementById("description");
    var formValid = true;

    if (nom.value == "") {
        nom.classList.remove("is-valid");
        nom.classList.add("is-invalid");
        formValid = false;
    } else {
        nom.classList.remove("is-invalid");
        nom.classList.add("is-valid");
        formValid = true;
    }

    if (prenom.value == "") {
        prenom.classList.remove("is-valid");
        prenom.classList.add("is-invalid");
        formValid = false;
    } else {
        prenom.classList.remove("is-invalid");
        prenom.classList.add("is-valid");
        formValid = true;
    }

    if (photo.value == "") {
        photo.classList.remove("is-valid");
        photo.classList.add("is-invalid");
        formValid = false;
    } else {
        photo.classList.remove("is-invalid");
        photo.classList.add("is-valid");
        formValid = true;
    }

    if (description.value == "") {
        description.classList.remove("is-valid");
        description.classList.add("is-invalid");
        formValid = false;
    } else {
        description.classList.remove("is-invalid");
        description.classList.add("is-valid");
        formValid = true;
    }

    var user = {
        nom: nom.value,
        prenom: prenom.value,
        photo: photo.value,
        description: description.value
    }

    if (formValid) {
        var users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        window.location = "Formulaire.html";
        }
    }