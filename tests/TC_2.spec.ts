import {expect, test} from '@playwright/test'
import { songs_array, songs_links_array } from '../environment/environment';
import { songs_links } from '../environment/environment';


var links_obj = new songs_links();

test('Scraping spotify for downloads', async({page})=>{
    console.log(`Verifying if we have the songs array`);
    expect(songs_array).toBeTruthy();
    console.log(songs_array)
})

test.only('Downloading the songs one by one',async({page})=>{
    test.setTimeout(20000);
    await page.goto('https://www.youtube.com/');
    const tempsongs_array = ['Flight by Tristam, Braken',
        'Forbidden Voices by Martin Garrix',
        'The Only Way Is Up by Martin Garrix, Tiësto',
        'Take My Breath Away by Alesso']
    // await page.locator('.ytSearchboxComponentInput').fill('fsdafs');
        tempsongs_array.forEach( async Element=>{
            console.log(await page.locator('.ytSearchboxComponentInput'));
            console.log(Element);
            await page.locator(".ytSearchboxComponentInput").fill(Element);
            page.keyboard.press('return')
            await page.locator('#contents').locator('ytd-video-renderer').first().click();
            let temp = await page.url();
            links_obj.setsongs_links(temp);
    })
    
    await page.pause();
    
})

test.only('verifying links array',({page})=>{
    console.log(songs_links_array);
    expect(songs_links_array).toBeTruthy();
})