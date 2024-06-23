export const API_KEY = 'YOUR_API_KEY'  //go to "https://developers.google.com/youtube/v3/getting-started" , click on Google developer console, generate project then you will get the API_KEY

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+'M';
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'K';
    }
    else {
        return value
    }
}
