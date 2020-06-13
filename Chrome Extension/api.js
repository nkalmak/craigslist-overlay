// const apiUrl = 'http://localhost:8080/comments/'
const apiUrl = 'https://api.kelownavegan.ca/comments/'


function getComments(url, callbackFunc) {
    fetch(apiUrl + url)
        .then((res) => {
            res.json().then(function (data) {
                callbackFunc(data)
                console.log(data)
            });
        })
}

let headers = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: null,
}

function postComment(commentTextObj, url, callbackFunc) {
    headers.body = JSON.stringify({
        commentText: commentTextObj,
        url: url,
    })
    
    fetch(apiUrl, headers)
        .then((res) => {
            res.json().then(function (data) {
                callbackFunc(data)
                console.log(data)
            });
    })
}