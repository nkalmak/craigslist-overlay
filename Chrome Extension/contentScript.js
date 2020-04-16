
window.onload = setupApp


function setupApp() {


    createUserControls();
    let submitElem = document.getElementById("submit-button")
    submitElem.addEventListener("click", () => {
        let inputElem = document.getElementById("add-comment-textbox")
        createComment(inputElem.value)
    });



    // // Get page url
    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    //     // let url = tabs[0].url;
    let url = 1;
    //     // use `url` here inside the callback because it's asynchronous!


    getComments(url, (comments) => {
        for (let index = 0; index < comments.length; index++) {
            createComment(String(comments[index]))
        }
    });

    // });



    // Get existing comments for the page
}



function createUserControls() {

    let inputElem = document.createElement("INPUT")
    inputElem.type = "text"
    inputElem.innerHTML = "Add a comment"
    inputElem.id = "add-comment-textbox"

    let submitElem = document.createElement("BUTTON")
    submitElem.innerHTML = "Submit"
    submitElem.id = "submit-button"

    let controlSection = document.createElement("SECTION")
    controlSection.id = "control-section"

    let commentSection = document.createElement("SECTION")
    commentSection.id = "comment-section"

    //parent
    //// beforeElem
    //// we want to insert here
    //// afterElem (beforeElem.nextsibling)

    let beforeElem = document.getElementById("postingbody").parentNode
    let afterElem = beforeElem.nextSibling
    let parentElem = beforeElem.parentNode
    parentElem.insertBefore(controlSection, afterElem)

    controlSection.appendChild(commentSection)
    controlSection.appendChild(inputElem)
    controlSection.appendChild(submitElem)


}




// This returns the parent node of a list of comments (<div> or <p>)

function addComment(url) {
    fetch
}

// Queries api for comments for this url
function fetchComments(url) {
    fetch("http://localhost/getcomments")

}

function createComment(commentStr) {

    let commentSection = document.getElementById("comment-section")

    let newComment = document.createElement("p")
    newComment.innerHTML = commentStr;
    newComment.id = "new-comment"

    commentSection.appendChild(newComment)


}

function populateComments() {

}