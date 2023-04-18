var user;

function chk_fname(){
    var pattern = /[a-zA-z]/g;
    if(pattern.test(document.getElementById('fname').value)==false){
        alert("First name must not contain numbers or special characters");
        // document.getElementById('fname').style.outline = "1px solid red"
        return false;
    }
}

function chk_lname(){
   var pattern = /[a-zA-z]/g;
    if(pattern.test(document.getElementById('lname').value)==false){
        alert("Last name must not contain numbers or special characters");
        // document.getElementById('lname').style.outline = "1px solid red"
        return false;
    }
}

function chk_email(){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    if(pattern.test(document.getElementById('email').value)==false){
        alert("Email is not valid");
        // document.getElementById('lname').style.outline = "1px solid red"
        return false;
    }
}

function chk_pass(){
    var pattern = /[\w\d-_+.,></]{8,}/g;
    if(pattern.test(document.getElementById('pass').value)==false){
        alert("Password must more than 8 characters");
        // document.getElementById('lname').style.outline = "1px solid red"
        return false;
    }
}

function chk_repass(){
    if(!(document.getElementById('repass').value==document.getElementById('pass').value)){
        alert("Confirm password does not match the password");
        return false;
    }
}

function chk_regex(){
    event.preventDefault();
    if(chk_fname()==false||chk_lname()==false||chk_email()==false||chk_pass()==false||chk_repass()==false){
        return;
    }
    var txtTK = document.getElementById('email').value;
    var txtMK = document.getElementById('pass').value;
    user = {tk: txtTK, pass: txtMK};
    localStorage.setItem('user', JSON.stringify(user));
    
    alert("Đăng ký thành công");
    window.location.href = "signup.html";
}

