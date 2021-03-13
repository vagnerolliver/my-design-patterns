const { expect } = require('chai')
const { it, describe } = require('mocha')
const { productValidator } = require('../src')
const ProductMotherObject = require('./model/productMotherObject')

describe('Test Mother Object', () => {
    it('shouldn\'t return erro with valid product', () => {
        const  product = ProductMotherObject.valid()
        const result = productValidator(product)

        const expected = {
            errors: [],
            result: true
        }

        expect(result).to.be.deep.equal(expected)
    })  

    describe('Product validation rules', () => { 
        it("should return an object error when creating a Product with invalid id", () => { 
            const  product = ProductMotherObject.invalidId()

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
            const  product = ProductMotherObject.invalidName()


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
            const  product = ProductMotherObject.invalidPrice()

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
            const  product = ProductMotherObject.invalidCategory()


        const result = productValidator(product)

        const expected = {
            errors: ['category: invalid value, curren [invalidCategory] expected to be either eletronic or organic'],
            result: false
        }

        expect(result).to.be.deep.equal(expected)
        })
    })
})

