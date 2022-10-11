let img1 =
    "<img src='https://images.unsplash.com/photo-1554364425-28f2d48c99a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFzdHJvbm9taWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='Trulli' style='width:200px'>";

let img2 =
    "<img src='https://images.unsplash.com/photo-1633377319967-a225355387ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='Trulli' style='width:200px'>";

let img3 =
    "<img src='https://images.unsplash.com/photo-1633377183286-a5dddaadf066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Trulli' style='width:200px'>";

/*document.getElementById("gallery").innerHTML =
    "<figure style= 'display:flex' 'justify-content:space-between'>" +
    "<div style= 'width:30vw'>" +
    img1 +
    "<figcaption>Fig.1</figcaption>" +
    "</div>" +
    "<div style= 'width:30vw'>" +
    img2 +
    "<figcaption>Fig.2</figcaption>" +
    "</div>" +
    "<div style= 'width:30vw'>" +
    img3 +
    "<figcaption>Fig.3</figcaption>" +
    "</div>" +
    "</figure>";*/
let num1 = 1;

let gallery = document.getElementById("gallery");
gallery.innerHTML =
    "<figure>" + img1 + "<figcaption>Fig." + num1 + "</figcaption></figure>";

num1++;
gallery.innerHTML +=
    "<figure>" + img2 + "<figcaption>Fig." + num1 + "</figcaption></figure>";

num1++;
gallery.innerHTML +=
    "<figure>" + img3 + "<figcaption>Fig." + num1 + "</figcaption></figure>";
