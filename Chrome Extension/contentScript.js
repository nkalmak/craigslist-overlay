
window.onload = setupApp


function setupApp() {

    createUserControls();
    let submitElem = document.getElementById("submit-button")
    submitElem.addEventListener("click", () => { 
        let inputElem = document.getElementById("add-comment-textbox")
        postComment(inputElem.value, url, loadComments)
    });


    // Get pageID
    
    let url = JSON.parse(document.getElementsByClassName("postinginfo")[1].innerHTML.slice(9,19));
    
    // use `url` here inside the callback because it's asynchronous!


    getComments(url, loadComments);
    
    // Get existing comments for the page
}

function loadComments(comments){
    document.getElementById("comment-section").innerHTML = ""
    for (let index = 0; index < comments.length; index++) {
        createComment(String(comments[index].comment_value))
}
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


    let beforeElem = document.getElementById("postingbody").parentNode
    let afterElem = beforeElem.nextSibling
    let parentElem = beforeElem.parentNode
    parentElem.insertBefore(controlSection, afterElem)

    controlSection.appendChild(commentSection)
    controlSection.appendChild(inputElem)
    controlSection.appendChild(submitElem)


}


function createComment(commentStr) {

    let commentSection = document.getElementById("comment-section")

    let newComment = document.createElement("p")
    newComment.innerHTML = commentStr;
    newComment.id = "new-comment"

    commentSection.appendChild(newComment)


}
