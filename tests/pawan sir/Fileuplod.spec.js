const{test,expect}=require('@playwright/test')

test('Single Fileupload',async({page})=>{

    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('.mqfihd-upload')
    await page.locator('.mqfihd-upload').click()
    await page.locator('#file-upload').setInputFiles('tests/uplodfiles/interview.pdf')
    await page.waitForTimeout(5000)
})

test.only('multiple Fileupload',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(['tests/uplodfiles/interview.pdf','tests/uplodfiles/stonex.pdf'])
    await page.waitForTimeout(3000)
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('interview.pdf')
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('stonex.pdf')

    // removing file
    await page.locator('#filesToUpload').setInputFiles([])
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(3000)

})