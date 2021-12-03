import CryptoJS from 'crypto-js';

var APP_Key = '87fce399d54e92a1d93b09d49a9da273';

//随机生成指定数量的16进制key
export const generatekey = (num) => {
    let library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (var i = 0; i < num; i++) {
        let randomPoz = Math.floor(Math.random() * library.length);
        key += library.substring(randomPoz, randomPoz + 1);
    }
    return key;
};

//DES加密 key=加密秘钥 APP_Key加密数据
export const encryptDes = () => {
    var key = '' + getNowDate();
    var message = APP_Key;
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    var data = {
        'App-Key': APP_Key,
        'App-Scode': encrypted.toString(),
		'Content-Type':'application/json'
    };
    return data;
};


//DES解密
export const decryptDes = (message, key) => {
    var keyHex = cryptoJs.enc.Utf8.parse(key)
    var decrypted = cryptoJs.DES.decrypt(
        {
            ciphertext: cryptoJs.enc.Hex.parse(message)
        },
        keyHex,
        {
            mode: cryptoJs.mode.ECB,
            padding: cryptoJs.pad.Pkcs7
        }
    )
    return decrypted.toString(cryptoJs.enc.Utf8)
}


function getNowDate() {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    var dateStr = year + "-" + month + "-" + day;
    return dateStr;
}

