// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// ავტორიზაცია


Cypress.Commands.add('Authorization', (userData) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type(userData.email)
    cy.get('.ipass').type(userData.password)
    cy.get('.avtorization > .input-shablon > .form-button').click()


})


// ნივთის ამოშლა


Cypress.Commands.add('NivtAmoshla', (userData) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type(userData.email)
    cy.get('.ipass').type(userData.password)
    cy.get('.avtorization > .input-shablon > .form-button').click()
    cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    cy.get('.swiper-slide-active > .clear > a').click()
    cy.get('.empty > p').should('have.text', 'კალათა ცარიელია')
})




// პროდუქტის მომატება


Cypress.Commands.add('ProdMomateba', (userData) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type(userData.email)
    cy.get('.ipass').type(userData.password)
    cy.get('.avtorization > .input-shablon > .form-button').click()


    cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    cy.get('.plus').click()
    cy.get('.spinner > input').should('be.visible')


})




// რეგისტრაცია პირადობებზე დათანხმების გარეშე




Cypress.Commands.add('PirobebisGareshe', (userData) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > .rprof').click()
    cy.get('.input-shablon > p > a').click()
    cy.get(':nth-child(1) > .ismile').type(userData.firstname)
    cy.get(':nth-child(2) > .imail').type(userData.email)
    cy.get('.ipir').type(userData.Piradinom)
    cy.get(':nth-child(4) > .itel').type(userData.Tel)
    cy.get(':nth-child(5) > .ipass').type(userData.password)
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(userData.password)
    cy.get('.regsub').click()
    cy.get('#Group_15422').should('be.visible')




})




// რეგისტრაცია ვალიდური მონაცემებით


Cypress.Commands.add('RegValid', (userData) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.menu-pop > .rprof').click()
    cy.get('.input-shablon > p > a').click()
    cy.get(':nth-child(1) > .ismile').type(userData.firstname)
    cy.get(':nth-child(2) > .imail').type(userData.email)
    cy.get('.ipir').type(userData.Piradinom)
    cy.get(':nth-child(4) > .itel').type(userData.Tel)
    cy.get(':nth-child(5) > .ipass').type(userData.password)
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(userData.password2)
    cy.get('#Group_15422').click()
    cy.get('.regsub').click()




})
