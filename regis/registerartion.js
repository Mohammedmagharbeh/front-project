var username=document.getElementById("form3Example1cg")
var email=document.getElementById("form3Example3cg")
 var password=document.getElementById("form3Example4cg")
 var password2=document.getElementById("form3Example4cdg")
 var form=document.getElementById('form')
 
 var allusers = JSON.parse(localStorage.getItem('users')) || []; 
 form.addEventListener('submit', function(event) {
    event.preventDefault();

 var user={
     name:username.value,
     email:email.value,
  password:password.value,
     password2:password2.value
 }

 allusers.push(user)
 localStorage.setItem('users',JSON.stringify(allusers))
 alert('registed')
})