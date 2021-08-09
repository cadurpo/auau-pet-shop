const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function(){
    
    setTimeout(function(){
        popup.style.display = 'block';//adicionando tempo de delay para o popup
    }, 2000)
}

close.addEventListener('click', () => {
    popup.style.display = 'none';
})