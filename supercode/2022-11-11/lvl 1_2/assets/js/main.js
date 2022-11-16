let person = {
    name: "luca",
    alter: 22,
    sagNameAlter: () => {
        alert(`${person.name} ${person.alter}`);
        console.log(`${person.name} ${person.alter}`);
    },
};

person.sagNameAlter();
