// your code here
const body = document.querySelector("body");
const mainContainer = document.createElement("div");
mainContainer.id = "main";

const img = document.createElement("img");
const name = document.createElement("h2");
const showInfo = document.createElement("p");
const age = document.createElement("button");
age.id = "age";
const mail = document.createElement("button");
mail.id = "mail";
const phone = document.createElement("button");
phone.id = "phone";
const br =  document.createElement("br");
const getUser = document.createElement("button");
getUser.id = "getUser";

// global url
const url = "https://randomuser.me/api/";

// // default name & image
// img.src = "https://media.licdn.com/dms/image/D4D35AQGAIVS1dmoVMQ/profile-framedphoto-shrink_200_200/0/1692450889868?e=1711620000&v=beta&t=ZTPcP62OOHFgFBctr9sALLfsyc19bzZL3Z6V2daia4I";
// // img.style.width = "50vw";
// name.innerText = "Ruchi Badkur";


age.innerText = "Age";
mail.innerText = "Email";
phone.innerText = "Phone";
getUser.innerText = "GET ANOTHER USER";


let res;
async function init(){
	res = await getUserInfo();
	console.log(res);
}

init();

async function getUserInfo() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const result =  data.results[0];
        img.src = result.picture.large;
        name.innerText = result.name.first + " " + result.name.last;
        showInfo.innerText = "";
        return result;
    } catch(err) {
        console.log(err.msg);
    }
}

getUser.onclick = async function() {
    await getUserInfo();
};

function getMail(){
    showInfo.innerText = res.email;
}

function getPhone(){
    showInfo.innerText = res.phone;
}

age.onclick = function() {
    showInfo.innerText = res.dob.age;
};
mail.onclick = getMail;
phone.onclick = getPhone;


mainContainer.append(img, name, showInfo, age, mail, phone, br, getUser);
body.append(mainContainer);
