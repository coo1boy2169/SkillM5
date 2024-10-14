
const Danceing = document.getElementById('js--Dance')
const Lato = document.getElementById('js--Lato')
const Merri = document.getElementById('js--Merri')
const input = document.getElementById('js--input')


input.oninput = function (event) {
    Danceing.innerText = event.target.value
    Lato.innerText = event.target.value
    Merri.innerText = event.target.value

}



const hearts = document.getElementsByClassName("heart__logo");
const heart = document.getElementsByClassName("heart");
for (let i = 0; i < heart.length; i++) {
    
    heart[i].addEventListener('click', ()=>{
        for (let i = 0; i < hearts.length; i++){
            hearts[i].classList = "svg-inline--fa fa-regular fa-heart heart__logo"
        }
        hearts[i].classList = "svg-inline--fa fa-solid fa-heart heart__logo"
                            //svg-inline--fa fa-heart heart__logo
    })
        
}

