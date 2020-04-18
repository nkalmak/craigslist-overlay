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

let headers = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: null,
}

function postComment(commentTextObj) {
    headers.body = JSON.stringify({
        commentText: commentTextObj,
        url: 1
    })

    fetch(apiUrl, headers)

}