import { test, expect } from '@playwright/test';

import { environment_variables, songs_array, songs_details } from '../environment/Pom';
import 'dotenv/config';


const obj = new environment_variables();
var playlist_name = 'Coding Music'

var external_songs_array = new songs_details();



test('Login process',async({page})=>{

    console.log('-----NAVIGATING TO SPOTIFY HOMEPAGE ------')

    await page.goto('https://open.spotify.com/');
    await page.getByTestId('login-button').click();

    console.log('------LOGIN PROCESS STARTING-----')
    await page.locator('#login-username').fill(obj.getusername());
    await page.locator('#login-password').fill(obj.getpassword());
    console.log(obj.getusername());
    console.log(obj.getpassword());
    await page.locator('#login-button').click();
    console.log('------LOGIN PROCESS COMPLETE------');

    await page.getByRole('button', { name: 'Coding Music Playlist' }).click();

    const first_song = await page.getByTestId('tracklist-row').first().getByRole('gridcell').nth(1).locator('div').first().innerText();
    console.log('First song ---- ',first_song);


    let songs_list = await page.getByTestId('tracklist-row').all();

    let songs_list_name:{id:number,song_name:string} []= []
    let i = 0 ;

    //Iterating through the songs grid to obtain the songs_array .  
    songs_list.forEach(async Element=>{
        
        let temp = await Element.locator('div').nth(1).locator('button').getAttribute('aria-label');
        external_songs_array.setSongName(temp);
        if(temp!==undefined){
            songs_list_name[i] ={
                id:i,
                song_name:temp||''
            }
        }
        i++ ; 
    })

})



