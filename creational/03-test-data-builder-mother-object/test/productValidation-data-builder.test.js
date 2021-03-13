const { expect } = require('chai')
const { it, describe } = require('mocha')
const { productValidator } = require('../src')
const ProducDataBuilder = require('./model/productDataBuilder')

describe('Test Data Builder', () => {
    it('shouldn\'t return erro with valid product', () => {
        const  product = ProducDataBuilder.aProduct().build()
        const result = productValidator(product)

        const expected = {
            errors: [],
            result: true
        }

        expect(result).to.be.deep.equal(expected)
    })  

    describe('Product validation rules', () => { 
        it("should return an object error when creating a Product with invalid id", () => { 
            const  product = ProducDataBuilder
                .aProduct()
                .withInvalidId()
                .build()

            const result = productValidator(product)
    
            const expected = {
                errors: [
                    'id: invalid length, curren [1] expected to be between 2 and 20 charatecters'
                ],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
            
        })

        it("should return an object error when creating a Product with invalid name", () => { 
            const  product = ProducDataBuilder
                .aProduct()
                .withInvalidName()
                .build()

            const result = productValidator(product)
    
            const expected = {
                errors: [
                    'name: invalid value, curren [abc123] expected to have only words'
                ],
                result: false
            }
    
            expect(result).to.be.deep.equal(expected)
        })

        it("should return an object error when creating a Product with invalid price", () => { 
            const  product = ProducDataBuilder
            .aProduct()
            .withInvalidPrice()
            .build()

        const result = productValidator(product)

        const expected = {
            errors: [
                'price: invalid value, curren [200000] expected to be between 1 and 1000'
            ],
            result: false
        }

        expect(result).to.be.deep.equal(expected)
        })

        it("should return an object error when creating a Product with invalid category", () => { 
            const  product = ProducDataBuilder
            .aProduct()
            .withInvalidCategory()
            .build()

        const result = productValidator(product)

        const expected = {
            errors: ['category: invalid value, curren [invalidCategory] expected to be either eletronic or organic'],
            result: false
        }

        expect(result).to.be.deep.equal(expected)
        })
    })
})

