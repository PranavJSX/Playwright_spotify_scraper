import { test, expect } from '@playwright/test';

import { environment_variables } from '../environment/environment';


const obj = new environment_variables();
var playlist_name = 'Coding Music'


test('Login process',async({page})=>{
    await page.goto('https://open.spotify.com/');
    await page.getByTestId('login-button').click();
    await page.locator('#login-username').fill(obj.getusername());
    await page.locator('#login-password').fill(obj.getpassword());
    await page.locator('#login-button').click();
    console.log('Login process completed');

    await page.getByRole('button', { name: 'Coding Music Playlist' }).click();
    

    const mysongDiv =  page.getByTestId('playlist-tracklist').locator('div').last().locator('div').nth(1);
    const songarr = await mysongDiv.locator('div').all();
    console.log(songarr);

})
