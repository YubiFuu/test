function getDark() {
    // const backColor = document.body.style.backgroundColor;
    // if (backColor === "black") {
    //     document.body.style.backgroundColor = "white";
    //     document.body.style.color = "black";
    // } else {
    //     document.body.style.backgroundColor = "black";
    //     document.body.style.color = "white";
    // }

    const wrappe = document.querySelector("body");
    wrappe.classList.toggle("dark");
}
