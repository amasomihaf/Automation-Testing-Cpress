describe('Handle table',(()=>{


    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get('.btn > .fas').click();
        cy.get('.btn-close').click();
        //customers ---> Customers   
        cy.get('#menu-customer > .parent').click(); // customer main menu
        cy.get('#collapse-5 > :nth-child(1) > a').click(); // customer sub/child item 
    })
    it('Check Number Rows and Columns',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '10')
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '7')

    })
    it('Check cell data from specific row and columns', ()=>{

        cy.get('tbody > :nth-child(5) > :nth-child(3)').contains("xvrt@test.com")

    })
    it('Read all the rows and columns data in the first page', ()=>{

        cy.get("table[class$='table table-bordered table-hover']>tbody>tr").each(($row , index, $rows)=>{

            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })


        })

    })
    it.only('pagination', ()=>{

        // find total number of pages
        let totalPages;
        cy.get('.row > .text-end').then((e)=>{
            let mytext=e.text(); // showing 1 to 9 of 13019 (1309) pages
            totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
            cy.log("Total Number of pages in a table=======>"+totalPages);

        })

        let Pages=1302
        for(let p=1; p<=Pages;p++)
        {
            if(Pages>1)
            {
                cy.log("Active pages is ===="+p)
                cy.get(":nth-child("+p+") > .page-link").click()
                cy.wait(3000)
                cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())// Email
                        })
                    })
                })
            }
        }
    })


}))
