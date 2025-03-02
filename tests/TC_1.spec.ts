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

    const first_song = await page.getByTestId('tracklist-row').first().getByRole('gridcell').nth(1).locator('div').first().innerText();
    console.log('First song ---- ',first_song);


    let songs_list = await page.getByTestId('tracklist-row').all();

    let songs_list_name:{id:number,song_name:string} []= []
    let i = 0 ;
    songs_list.forEach(async Element=>{
        // console.log(await Element.locator('div').nth(1).locator('button').getAttribute('aria-label'));
        let temp = await Element.locator('div').nth(1).locator('button').getAttribute('aria-label');
        // console.log(temp)
        if(temp!==undefined){
            songs_list_name[i] ={
                id:i,
                song_name:temp||''
            }
        }
        i++ ;
        // console.log(songs_list_name);
    })
    
    page.pause()

})
