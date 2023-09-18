const { test, expect } = require('@playwright/test')
test('table handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table = page.locator('#productTable')
    //                   1.count number or columns
    const columns = table.locator('thead tr th')
    console.log(await columns.count())
    //1.count number or rows
    const rows = table.locator('tbody tr')
    // console.log(await rows.count())
    // expect(await columns.count()).toBe(4)
    // expect(await rows.count()).toBe(5)


    //                      2.select
    /*const machedRow = rows.filter({
        has: page.locator('td'),
        hasText: "Product 4"
    })
    machedRow.locator('input').check()
    await page.waitForTimeout(5000)*/

    //             3.SELECT MULTIPLE PRODUCT BY USING RE-USABLE FUNCTION
    // await selectproduct(rows,page,"product 1")
    // await selectproduct(rows,page,"product 3")
    // await selectproduct(rows,page,"product 5")


    //            4.PRINLL PPRODUCT DETAILS USING FOR LOOP
    // for(let i=0;i<await rows.count();i++){
    //         const row=rows.nth(i)
    //         const tds=row.locator('td')

    //         for(let k=0;k<await tds.count()-1;k++){
    //             console.log(await tds.nth(k).textContent())
    //         }
    // }



    //             5.Read all data in all pages

    const pages = page.locator('.pagination li a')

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
          await pages.nth(p).click()

        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i)
            const tds = row.locator('td')

            for (let k = 0; k < await tds.count() - 1; k++) {
                console.log(await tds.nth(k).textContent())
            }
        }
    }
})


// async function selectproduct(rows,page,name,){
//     const machedRow = rows.filter({
//         has: page.locator('td'),
//         hasText:name
//     })
//     await machedRow.locator('input').check()
//     await page.waitForTimeout(5000)

// }