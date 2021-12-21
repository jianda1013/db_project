function processFormData(){
    let userid = document.getElementById('userId').value;
    if(!userid || userid == null){
        document.getElementById("checkUserAns").innerHTML = "error";
    }else{
        window.location.href='operation.html';
    }
}

function processFormA(){
    window.location.href='backbagList.html';
}
function processFormB(){
    window.location.href='bookList.html';
}
function processFormC(){
    window.location.href='explore.html';
}

