describe('adding a restaurant',()=>{
    it('displays the restaurant in the list',()=>{
        cy.visit('http://localhost:1234');

        cy.get('[data-test="addRestaurantButton"]')
           .click();
           
        cy.get('[data-test="newRestaurantName"]')
            .type('New Message');

        cy.get('[data-test="saveNewRestaurantbutton"]')
            .click();

        cy.contains('Sushi Place');
    } )
})