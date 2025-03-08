import { configDotenv } from "dotenv";


let username = process.env.spotify_username;
let password = process.env.spotfy_password;

export class environment_variables{
    constructor(){
        this.username = username||'',
        this.password = password||''
    }

    getusername(){
        return this.username;
    }
    
    getpassword(){
        return this.password;
    }
}

let songs_array = []
export class songs_details{
    constructor(){}
    setSongName(songName){
        let temp = songName ;
        temp = temp.slice(5);
        songs_array.push(temp);
    }
}


export {songs_array};

let songs_links_array = []
export class songs_links{
    constructor(){}
    async setsongs_links(link){
        console.log('pushing this link now :', link);
        songs_links_array.push(link);
    }
} 

export {songs_links_array};


