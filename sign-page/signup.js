var getUser = localStorage.getItem('user');
var user = JSON.parse(getUser);

function chk_user(){
    var txtMail = document.getElementById("email").value;
    var txtPass = document.getElementById("password").value;

    
    if(txtMail == "" || txtPass == ""){
        alert("Please fill in the information !");
    }else{
        if(user.tk == txtMail && user.pass == txtPass){
            alert("Login success");
            window.location.href = "http://127.0.0.1:5500/Main_Page/webMain.html";
        }else{
            alert("Login failed! Please check your email and password");
        }
    }
    
}