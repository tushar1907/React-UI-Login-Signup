export function PostData(type,UserData) {

    let BaseUrl = 'https://api.thewallscript.com/restful/'

    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type,{
            method: 'POST',
            body: JSON.stringify(UserData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson)
            })
            .catch((error) => {
                reject(error);
            });
    })
}