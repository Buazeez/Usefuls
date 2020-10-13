export function unique(type:string, length:number) {
    const unique = require('../../json/config.json')
    if (type == null) {
        if(!length) length = 10;
        var result = ''
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_`~!@#$%^&*()[]{},.<>/?';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result
    
    } else if(type.toLowerCase() === unique.unique.letter) {
        if(!length) length = 10;
        var result = ''
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result
    } else if(type.toLowerCase() === unique.unique.number) {
        if(!length) length = 10;
        return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    } 

}