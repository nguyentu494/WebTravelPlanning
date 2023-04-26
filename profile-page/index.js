var getUser1 = localStorage.getItem('user1');
var user1 = JSON.parse(getUser1);
var getUser = localStorage.getItem('arrUser');
var arrUser = JSON.parse(getUser);


for(var i = 0; i < arrUser.length; i++){
    if(arrUser[i].tk==user1){
        document.getElementById("txtfname").value = arrUser[i].fname;
        document.getElementById("txtlname").value = arrUser[i].lname;
        document.getElementById("txtemail").value = arrUser[i].tk;
    }
}
    

function changePage(){
    window.location.href = "myTour.html"
}