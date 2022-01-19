function callAPI({ url, data, headers = { 'Authorization': localStorage.getItem('Authorization') }, type, success, fail }) {
    $.ajax({
        url, data, headers, type, dataType: "json", statusCode: {
            200: function (data) {
                success(data)
            },
            400: function (data) {
                fail(data)
            }
        }
    })
}


let userid;
/*
main.html
先檢查是否有填寫帳號、密碼
再檢查使用者帳號、密碼是否正確(DB)
*/
function userLogin() {
    username = document.getElementById('userId').value;
    let password = document.getElementById('passwd').value;
    if (!username || !password) {
        document.getElementById("checkUserAns").innerHTML = "請輸入帳號密碼";
    } else {
        callAPI({
            url: '/login', data: { username, password, sex: 'F' }, type: "POST",
            success: (data) => {
                localStorage.setItem('Authorization', data.auth)
                window.location.href = './operation';
            }, fail: (data) => {
                alert(data.responseJSON.msg)
            }
        })
    }
}
/*
main.html
先檢查是否有填寫帳號、密碼
再新增使用者帳號、密碼(DB)
*/
function userRegist() {
    username = document.getElementById('userId').value;
    let password = document.getElementById('passwd').value;
    if (!username || !password) {
        document.getElementById("checkUserAns").innerHTML = "請輸入帳號密碼";
    } else {
        callAPI({
            url: "./regist", data: { username, password, sex: 'F' }, type: "POST",
            success: (data) => {
                loginDefault(username, password);
            }, fail: (data) => {
                alert(data.responseJSON.msg)
            }
        })
    }
}

function loginDefault(username, password) {
    callAPI({
        url: "./login", data: { username, password }, type: "POST", success: (data) => {
            localStorage.setItem('Authorization', data.auth)
            window.location.href = './choose';
        }, fail: (data) => {
            alert(data.responseJSON.msg)
        }
    })
}
/*
choose.html
選擇新增一隻寶可夢(DB)
新增該使用者帳號、密碼(DB)
*/

function chooseDefault(obj) {
    callAPI({
        url: "./initial", data: { pokemon: obj.value }, type: "POST", success: (data) => {
            window.location.href = './operation';
        }, fail: (data) => {
            alert(data.responseJSON.msg)
        }
    })
}

/*
backbagList.html
select 使用者的背包，並依序填入table(DB)
提供放生的功能，刪除放生的寶可夢(DB)
*/

function getUserPokemon() {
    callAPI({
        url: "./user/pokemon", type: "GET", success: (data) => {
            fillBagMap(data);
            getUserBag();
        }, fail: data => {
            alert(data.responseJSON.msg)
        }
    })
}

function getUserBag() {
    callAPI({
        url: "./bag/size", type: "GET", success: (data) => {
            document.getElementById("bagSize").innerHTML = `背包容量 : ${data.msg}`
        }, fail: data => {
            alert(data.responseJSON.msg)
        }
    })
}

function fillBagMap(data) {
    let table = `<tr> <td>編號</td> <td>名稱</td> <td>屬性1</td> <td>屬性2</td> <td style="color: crimson;">放生</td> </tr>`
    data.forEach((item, i) => {
        table += `<tr> <td>${i + 1}</td> <td>${item.pokemon}</td> <td>${item.type1}</td> <td>${item.type2 ? item.type2 : ""}</td>
        <td><input id='freed' type="button" user_pokemon_id="${item.user_pokemon_id}" value="放生" onclick='abandon(this);' style="width: auto;"></input></td> </tr>`
    })
    document.getElementById("userPokemon").innerHTML = table;
}

function abandon(data) {
    callAPI({
        url: `./user/pokemon?id=${data.getAttribute("user_pokemon_id")}`, type: "DELETE", success: () => {
            getUserPokemon();
        }, fail: data => {
            alert(data.responseJSON.msg)
        }
    })
}

/*
bookList.html
select 圖鑑，並依序填入table(DB)
*/

function getPokedex() {
    callAPI({
        url: "./pokemon", type: "GET", success: (data) => {
            fillPokedex(data);
        }, fail: (data) => {
            alert(data.responseJSON.msg)
        }
    })
}

function fillPokedex(data) {
    let table = `<tr> <td>編號</td> <td>名稱</td> <td>屬性1</td> <td>屬性2</td> </tr>`
    data.forEach(item => {
        table += `<tr> <td>${item.id}</td> <td>${item.name}</td> <td>${item.type1}</td> <td>${item.type2 ? item.type2 : ""}</td> </tr>`
    })
    document.getElementById("pokedex").innerHTML = table;
}

function getEncounter(data) {
    callAPI({
        url: `./encounter?region=${data.id}`, type: "GET", success: (data) => {
            localStorage.setItem("encounter", data.msg.name);
            window.location.href = './catch';
        }, fail: data => {
            alert(data.responseJSON.msg)
        }
    })
}

/*
store.html
購買背包容量，修改使用者背包空間(DB)
購買寶可夢，新增寶可夢至使用者背包(DB)
*/

function addBag() {
    callAPI({
        url: `./buy/bag`, type: "PUT", success: (data) => {
            getMoney();
        }, fail: data => {
            alert(data.responseJSON.msg)
        }
    })
}

function getLegendary() {
    callAPI({
        url: "./pokemon?legendary=1", type: "GET", success: (data) => {
            fillShop(data);
            getMoney();
        }, fail: (data) => {
            alert(data.responseJSON.msg)
        }
    })
}

function getMoney() {
    callAPI({
        url: "./money", type: "GET", success: (data) => {
            document.getElementById("remain").innerHTML = `remain: $${data.msg}`
        }, fail: (data) => {
            alert(data.responseJSON.msg)
        }
    })
}

function fillShop(data) {
    let table = `<tr> <td colspan="5">寶可夢區</td> </tr>
    <tr> <td>編號</td> <td>名稱</td> <td>屬性</td> <td>價格</td> <td>購買</td> </tr>`
    data.forEach((item, index) => {
        table += `<tr> <td>${index + 1}</td> <td>${item.name}</td> <td>${item.type1}</td> <td>87</td>
        <td><input id='buy' type="button" pokemon_name=${item.name} name="購買" value="購買" onclick='shopLengend(this);' style="width: auto;"></input>
        </td> </tr>`
    })
    document.getElementById("shopList").innerHTML = table;
}

function shopLengend(data) {
    callAPI({
        url: "./buy/pokemon", data: { pokemon: data.getAttribute("pokemon_name") }, type: "POST", success: (data) => {
            getMoney();
        }, fail: (data) => {
            alert(data.responseJSON.msg)
        }
    })
}
///

function meetEncounter() {
    let pokemon = localStorage.getItem("encounter");
    document.getElementById("catch_or_not").innerHTML = `遇到${pokemon}了!\n是否要捉取此寶可夢?`
}

function catchPokemon() {
    callAPI({
        url: "./user/pokemon", data: { pokemon: localStorage.getItem("encounter") }, type: "POST", success: (data) => {
            if (data.msg != 'FAIL')
                alert(`成功捉到${localStorage.getItem("encounter")}了\n獲得${data.msg}塊錢`)
            else
                alert(`${localStorage.getItem("encounter")}沒抓到\n並且逃跑了`)
            localStorage.removeItem("encounter");
            window.location.href = './explore';
        }, fail: (data) => {
            alert(data.responseJSON.msg)
        }
    })
}

function back() {
    localStorage.removeItem("encounter");
    window.location.href = './explore';
}

///

function gymEncounter(data) {
    callAPI({
        url: `./gym/encounter?type=${data.id}`, type: "GET", success: (data) => {
            localStorage.setItem("encounter", data.msg.name);
            window.location.href = './catch';
        }, fail: data => {
            alert(data.responseJSON.msg)
        }
    })
}

///

function goback() {
    window.location.href = 'operation'
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



