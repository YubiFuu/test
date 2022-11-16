const li = document.querySelectorAll("button");

console.log(li.length);
let array;
for (i = 0; i < li.length; i++) {
    li[i].addEventListener(`click`, (a) => {
        array = a.target.value.split(",");
        console.log(array);
        document.body.style.backgroundColor = array[0];
        document.body.style.color = array[1];
    });
    console.log(li[i]);
}
