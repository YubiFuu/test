const product = {
    productName: "John",
    productPrice: 199,
    productYear: 1950,
    productDescription: () => {
        console.log(`${product.productName}`);
    },
};
product.productDescription();

for (let i in product) {
    console.log(i);
    console.log(product[i]);
}

let grade = {
    math: 3,
    pe: 1,
    html: 1,
    css: 1,
    js: 1,
};
let sum = 0;
for (let j in grade) {
    let hi = Number(product[j]);
    sum += hi;
}
console.log(sum);

let keyArr = Object.keys(grade);

let keyArr1 = Object.values(grade);

let keyArr2 = Object.entries(grade);
