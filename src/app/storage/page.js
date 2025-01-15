const storageKey = "login-info"

export function setStorage(data){
    localStorage.setItem(storageKey,JSON.stringify(data))
}

export function getStorage(){
    return JSON.parse(localStorage.getItem(storageKey))
}

export function getToken(){
    return JSON.parse(localStorage.getItem(storageKey)).token;
}   