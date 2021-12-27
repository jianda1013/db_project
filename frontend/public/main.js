function processFormData(){
    let userid = document.getElementById('userId').value;
    if(!userid || userid == null){
        document.getElementById("checkUserAns").innerHTML = "error";
    }else{
        window.location.href='operation.html';
    }
}



