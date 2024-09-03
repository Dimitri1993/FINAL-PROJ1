import userData from '../fixtures/FixProject.json'


// რეგისტრაცია ვალიდური მონაცემებით


describe('RegValid', () => {
    it('Registration', () => {
        console.log(userData)
        cy.RegValid(userData.testCases[0].RegValid)




    })
})




// პირობებზე დათანხმების გარეშე
describe('Pirobebisgareshe', () => {
    it('Pirobebisgare', () => {
        console.log(userData)
        cy.PirobebisGareshe(userData.testCases[4].PirobebisGareshe)
    })
})


// ნივთის ამოშლა
describe('NivtAmoshla', () => {
    it('NivtisAmoshla', () => {
        console.log(userData)
        cy.NivtAmoshla(userData.testCases[2].NivtAmoshla)
    })
})


// პროდიქტის მომატება
describe('ProdMomateba', () => {
    it('ProdMomateba', () => {
        console.log(userData)
        cy.ProdMomateba(userData.testCases[3].ProdMomateba)
    })
})


//  ავტორიზაცია


describe('ProdMomateba', () => {
    it('ProdMomateba', () => {
        console.log(userData)
        cy.Authorization(userData.testCases[1].Authorization)


    })
})
