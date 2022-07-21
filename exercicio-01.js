let products = [
    { name:'Macbook', price:1300, quantity:40, colors:['silver', 'black', 'white'] },
    { name:'Iphone', price:1000, quantity:50, colors:['silver', 'red', 'white'] },
    { name:'Pendrive', price:10, quantity:10, colors:[] },
    { name:'Headset', price:50, quantity:0, colors:['black'] },
    { name:'Mouse', price:20, quantity:5, colors:['white', 'black', 'blue'] },
    { name:'Tablet', price:500, quantity:20, colors:['white', 'black'] },
    { name:'USB adaptor', price:5, quantity:0, colors:[] },
    { name:'Keyboard', price:30, quantity:35, colors:['white'] },
    { name:'Gamepad', price:30, quantity:25, colors:['black', 'silver'] },
    { name:'Monitor', price:200, quantity:3, colors:[] },
]

function addIdToProducts(products) {
    products.forEach((product, i) => product.id = i + 1)
}

function printProductNames(products) {
    products.forEach(({ name }) => console.log(name))
}

function printProductWithId3(products) {
    console.log(products.find(({ id }) => id === 3))
}

function printProductsWithColorBlack(products) {
    console.log(products.filter(({ colors }) => colors.includes('black')))
}

function printProductsWithNoColors(products) {
    console.log(products.filter(({ colors }) => colors.length === 0))
}

addIdToProducts(products)
printProductNames(products)
printProductWithId3(products)
printProductsWithColorBlack(products)
printProductsWithNoColors(products)