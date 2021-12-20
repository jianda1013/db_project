function processFormData(){
    let userid = document.getElementById('userId').value;
    let passwd = document.getElementById('passwd').value;
    if(!userid || userid == null || !passwd || passwd == null){
        document.getElementById("checkUserAns").innerHTML = "請輸入帳號密碼";
    }else{
        window.location.href='operation.html';
    }
}
function processFormRegi(){
    let userid = document.getElementById('userId').value;
    if(!userid || userid == null){
        document.getElementById("checkUserAns").innerHTML = "請輸入帳號密碼";
    }else{
        window.location.href='choose.html';
    }
}

function goback()
{
    window.location.href='operation.html'
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

