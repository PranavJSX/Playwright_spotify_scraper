import {test} from '@playwright/test';
import { songs_array, songs_links_array } from '../environment/Pom';




test('Starting downloading the songs',async ({page,context})=>{
    await page.goto('https://y2mate.nu/en-rsM0/');
    for(let i of songs_links_array){
        await page.locator("img[alt='Y2Mate']").click();
        await page.locator('#video').fill(i);
        await page.getByRole('button',{name:'Convert'}).click();
        await page.waitForSelector('button');
        
        
        // const download_promise = page.waitForEvent('download');
        const [page2] =await Promise.all([
            context.waitForEvent('page'),
            await page.getByRole('button',{name:'Download'}).first().click()])
        await page2.close(); 

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.getByRole('button',{name:'Download'}).first().click()
        ]);
        await download.saveAs(download.suggestedFilename());
        await page.locator('#logo').locator('a').click();
    }
    
    await page.pause();
})