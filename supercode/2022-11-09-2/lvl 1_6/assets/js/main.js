const selectOne = document.getElementById("my-select");
const p = document.getElementById("option-selected");

selectOne.addEventListener(
    `change`,
    (e) => (p.innerHTML = `You choose "${e.target.value}"`)
);
