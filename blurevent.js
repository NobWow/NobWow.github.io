let modalElement, modal;

window.onload = function(evteeee) {
    modalElement = document.getElementById("cheatDetection");
    modal = new bootstrap.Modal(modalElement, {backdrop: true, keyboard: false, focus: true});

    window.addEventListener("blur", function(event) {
        // you are dropped out!
        modal.show();
    }, false);
}
