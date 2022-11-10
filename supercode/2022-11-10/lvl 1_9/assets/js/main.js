let options = document.getElementById("farbeAuswahlen");

function onClick(event) {
    event.preventDefault();
    let a = options.selectedIndex;
    document.forms.oneForm.children[0].children[a].remove();
}
