var caption=document.getElementById('cap')
    caption.style.backgroundColor=localStorage.getItem('mode')   

function dark() {
    if (body.style.backgroundColor=='white') {
        body.style.backgroundColor='black'
        localStorage.setItem('mode','black')        
    }
       
}

function white() {
    if (body.style.backgroundColor=='black') {
        body.style.backgroundColor='white'
        localStorage.setItem('mode','white')        
    }
}