import {test} from '@playwright/test'

test.skip('Scraping spotify for downloads', async({page})=>{
    console.log('LETS BEGIN MUSIC SCRAPING');

    await page.goto('https://open.spotify.com/');
    await page.getByTestId('component-shelf').nth(3).getByTestId('grid-container').locator('div').first().click();

    // const printer = await page.getByTestId('tracklist-row').all();
    // console.log('-----------------',printer);
    const song_array = await page.getByTestId('tracklist-row').first().getByRole('gridcell').nth(1).locator('div').first().innerText();
    // console.log(song_array)
    // await page.waitForLoadState();

    // console.log(await page.getByTestId('tracklist-row').all());
    let try1 = await page.getByTestId('tracklist-row').all();
    // console.log(try1);
    try1.forEach(async element => {
        console.log(await element.locator('div').nth(1).locator('button').getAttribute('aria-label')); 
    });

})