const rewiremock = require('rewiremock/node')
const { deepStrictEqual } = require('assert')

const dbData = [{ name: 'Mariazinha' }, {name: 'Joao'}]
class MockDatabase {
    connect = () => this
    find = async (query) => dbData
}

rewiremock(() => require('./../../src/util/database')).with(MockDatabase)


;(async () => {
    {
        const expected = [{ name: 'MARIAZINHA' }, {name: 'JOAO'}]
        rewiremock.enable()
        const UserFactory = require('../../src/factory/userFactory')
        const userfactory = await UserFactory.createInstance()
        const result =  await userfactory.find()
        deepStrictEqual(result, expected)
        rewiremock.disable()
    }

    {
        const expected = [{ name: 'ERICKWENDELL' }]
        const UserFactory = require('../../src/factory/userFactory')
        const userfactory = await UserFactory.createInstance()
        const result =  await userfactory.find()
        deepStrictEqual(result, expected)
   
    }
})()