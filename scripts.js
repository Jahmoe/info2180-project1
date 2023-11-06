/* Add your JavaScript to this file */
window.onload = function(){
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var userEmail = document.getElementById("email");
    var messageDiv = document.getElementsByClassName("message")[0];
    var submitButton = document.getElementsByTagName("button")[0];

    submitButton.addEventListener("click", function(e) {
        e.preventDefault();

        if (userEmail.value === "" || !userEmail.value.match(emailFormat)){
            messageDiv.innerHTML = "Please enter a valid email address.";
            userEmail.value = "";
        } else {
            messageDiv.innerHTML = "Thank you! Your email address " + userEmail.value + " has been added to our mailing list";
        }
    })
}

