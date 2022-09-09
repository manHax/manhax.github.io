const aa = document.getElementById('footergen')
let yeard =  new Date().getFullYear();
ftext = `${aa.innerText[0]} ${yeard} Company, Inc`
aa.innerText = ftext

function mailtoo(){
    const subject = document.getElementById('subjecte').value
    const body = document.getElementById('bodye').value
    window.location.href=`mailto:lhakim1762@gmail.com?subject=${subject}&body=${body}`
}

