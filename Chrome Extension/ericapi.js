const apiUrl = 'http://localhost:8080/comments/'




function getComments(url, callbackFunc) {
    console.log("Here1")
    fetch(apiUrl + url)
        .then((res) => {
            res.json().then(function (data) {
                console.log(data);
                callbackFunc(JSON.parse(data))
            });
        })
}