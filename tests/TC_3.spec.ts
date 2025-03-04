import {test} from '@playwright/test';
import { songs_links_array } from '../environment/Pom';


// var temp_array = ['https://www.youtube.com/watch?v=TUawyJn7dws&list=RDGMEMCMFH2exzjBeE_zAHHJOdxgVMTUawyJn7dws&start_radio=1&ab_channel=JattLifeStudios',
//     'https://www.youtube.com/watch?v=ilNt2bikxDI&list=RDGMEMCMFH2exzjBeE_zAHHJOdxgVMTUawyJn7dws&index=3&ab_channel=AnuvJain'
// ] 

test('Starting downloading the songs',async ({page,context})=>{
    await page.goto('https://y2mate.nu/en-rsM0/');
    for(let i of songs_links_array){
        await page.locator("img[alt='Y2Mate']").click();
        await page.locator('#video').fill(i);
        await page.getByRole('button',{name:'Convert'}).click();
        await page.waitForSelector('button');
        const [page2] =await Promise.all([context.waitForEvent('page'),
            await page.getByRole('button',{name:'Download'}).first().click()])
        await page2.close();
    }
    await page.pause();
})