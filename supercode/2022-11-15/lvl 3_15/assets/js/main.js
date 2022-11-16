let fName = document.getElementById("first-name");
let lName = document.getElementById("last-name");
let sName = document.getElementById("stage-name");
let age = document.getElementById("age");
let eur = document.getElementById("eur");
let albums = document.getElementById("albums");
let top10 = document.getElementById("top-10");
let image = document.getElementById("image");
let submit = document.querySelector("button");

class Person {
    constructor(
        firstName,
        lastName,
        stageName,
        albums,
        top10,
        eur,
        age,
        image
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.stageName = stageName;
        this.albums = albums;
        this.top10 = top10;
        this.eur = eur;
        this.age = age;
        this.image = image;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    nickName() {
        return `Nickname: ${this.stageName}`;
    }
    thisAlbums() {
        return `Albums:<br> ${this.albums}`;
    }
    hits() {
        return `Hits:<br> ${this.top10}`;
    }
    netWorth() {
        return `Worth:<br> ${this.eur}`;
    }
    thisAge() {
        return `Age:<br> ${this.age}`;
    }
    thisImage() {
        return `url("${this.image}")`;
    }
}

submit.addEventListener(`click`, (event) => {
    event.preventDefault();
    let newStar = new Person(
        fName.value,
        lName.value,
        sName.value,
        albums.value,
        top10.value,
        eur.value,
        age.value,
        image.value
    );
    let card = document.createElement("div");
    card.style.backgroundImage = newStar.thisImage();
    card.classList.add("card");
    let top = document.createElement("div");
    top.classList.add("top");
    let bottom = document.createElement("div");
    bottom.classList.add("bottom");
    let left = document.createElement("div");
    left.classList.add("left");
    let right = document.createElement("div");
    right.classList.add("right");
    let albumText = document.createElement("p");
    albumText.innerHTML = newStar.thisAlbums();
    let hitText = document.createElement("p");
    hitText.innerHTML = newStar.hits();
    let eurText = document.createElement("p");
    eurText.innerHTML = newStar.netWorth();
    let ageText = document.createElement("p");
    ageText.innerHTML = newStar.thisAge();
    let nameText = document.createElement("h2");
    nameText.innerHTML = newStar.fullName();
    let nickText = document.createElement("h2");
    nickText.innerHTML = newStar.nickName();
    document.body.appendChild(card);
    card.appendChild(top);
    card.appendChild(bottom);
    bottom.appendChild(left);
    bottom.appendChild(right);
    top.appendChild(albumText);
    top.appendChild(hitText);
    top.appendChild(eurText);
    top.appendChild(ageText);
    left.appendChild(nameText);
    right.appendChild(nickText);
});
