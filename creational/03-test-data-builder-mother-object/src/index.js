/*
    ProductId: should be between 2 and 20 charatecters
    Name: should be only words
    Price: should be from zero to a thousand
    Category: should be electronic or organic
*/

function productValidator(product) {
    const errors = []
    if(!(product.id.length >= 2 && product.id.length <=20)) {
        errors.push(`id: invalid length, curren [${product.id}] expected to be between 2 and 20 charatecters`)
    }

    if(/(\W|\d)/.test(product.name)) {
        errors.push(`name: invalid value, curren [${product.name}] expected to have only words`)
    }

    if(!(product.price >= 1 && product.price <=1000)) {
        errors.push(`price: invalid value, curren [${product.price}] expected to be between 1 and 1000`)
    }

    if(!(['eletronic','organic'].includes(product.category))) {
        errors.push(`category: invalid value, curren [${product.category}] expected to be either eletronic or organic`)
    }


    return {
        result: errors.length === 0,
        errors
    }
}

module.exports = {
    productValidator
}