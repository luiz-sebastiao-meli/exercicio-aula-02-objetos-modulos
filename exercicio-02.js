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

function addProduct(products, product) {
    products.push(product)
}

function removeProductsWithQuantity0(products) {
    products.forEach(({ quantity }, i) => {
        if (quantity === 0) {
            products.splice(i, 1)
        }
    })
}

function printTotalQuantityOfProducts(products) {
    console.log(products.reduce((total, { quantity }) => total + quantity, 0))
}

function printProductsWithPriceGreaterThanEspecified(products, price) {
    console.log(products.filter((product => product.price > price)))
}

function printProductNamesThatContainsCharO(products) {
    products.forEach(({ name }) => {
        if (name.includes('o')) {
            console.log(name)
        }
    })
}

const newProduct = { name: 'TV', price: 2000, quantity: 50, colors: ['black', 'white'] }
addProduct(products, newProduct)
removeProductsWithQuantity0(products)
printTotalQuantityOfProducts(products)
printProductsWithPriceGreaterThanEspecified(products, 1000)
printProductNamesThatContainsCharO(products)