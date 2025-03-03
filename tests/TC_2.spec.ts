import {expect, test} from '@playwright/test'
import {  songs_array, songs_details, songs_links_array } from '../environment/Pom';
import { songs_links } from '../environment/Pom';


var links_obj = new songs_links();

test('Scraping spotify for downloads', async({page})=>{
    console.log(`Verifying if we have the songs array`);
    expect(songs_array).toBeTruthy();
    console.log(songs_array)
})

test('Downloading the songs one by one',async({page})=>{
    test.setTimeout(50000);
    await page.goto('https://www.youtube.com/');
    // await page.locator('.ytSearchboxComponentInput').fill('fsdafs');
        for(let Element of songs_array){
                console.log('starting the search for ,' , Element);
                await page.locator('.ytSearchboxComponentInput').fill(Element);
                await page.keyboard.press('Enter');
                await page.locator('ytd-video-renderer').first().locator('#dismissible').locator('#thumbnail').click();
                await page.waitForSelector('#top-row');
                await links_obj.setsongs_links(page.url());
                await page.locator('.ytSearchboxComponentInput').fill('');
                console.log('Search ended::');
            
        }
    
    await page.pause();
    
})

test('verifying links array',({page})=>{
    console.log(songs_links_array);
    expect(songs_links_array).toBeTruthy();
})