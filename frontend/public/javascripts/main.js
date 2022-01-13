let userid ;
/*
main.html
先檢查是否有填寫帳號、密碼
再檢查使用者帳號、密碼是否正確(DB)
*/
function processFormData(){
    userid = document.getElementById('userId').value;
    let passwd = document.getElementById('passwd').value;
    if(!userid || userid == null || !passwd || passwd == null){
        document.getElementById("checkUserAns").innerHTML = "請輸入帳號密碼";
    }else{
        window.location.href='operation';
    }
}
/*
main.html
先檢查是否有填寫帳號、密碼
再新增使用者帳號、密碼(DB)
*/
function processFormRegi(){
    userid = document.getElementById('userId').value;
    let passwd = document.getElementById('passwd').value;
    if(!userid || userid == null || !passwd || passwd == null){
        document.getElementById("checkUserAns").innerHTML = "請輸入帳號密碼";
    }else{
        window.location.href='choose';
    }
}
/*
choose.html
選擇新增一隻寶可夢(DB)
新增該使用者帳號、密碼(DB)
*/

/*
backbagList.html
select 使用者的背包，並依序填入table(DB)
提供放生的功能，刪除放生的寶可夢(DB)
*/

/*
bookList.html
select 圖鑑，並依序填入table(DB)
*/

/*
store.html
購買背包容量，修改使用者背包空間(DB)
購買寶可夢，新增寶可夢至使用者背包(DB)
*/
function goback(){
    window.location.href='operation'
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}


// window.onload=function(){
//     const button = document.querySelector(".btn");
//     console.log(button)
//     button.addEventListener('click', updateButton);
// }


function playSound() {
    var audio = document.getElementById("audio");
    audio.play();
}



