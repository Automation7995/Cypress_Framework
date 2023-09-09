describe('Testing DemoQA website',() =>
{
    it('Widget Menu Verify',() =>
    {
        cy.visit('https://www.browserstack.com/');
        cy.get('#signupModalButton').click();
    }
    )
}
)