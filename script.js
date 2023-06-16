const form = document.querySelector("form");
const signUp = document.querySelector('.sign-up');
const input = document.querySelector('input');
const photos = document.querySelector('.illustraiton');
const errorMsg = document.querySelector('.error-msg');
const email = document.querySelector('.email-id');
const finalCard = document.querySelector('.thanks');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value.match(validRegex)){
    
    email.innerText=input.value;
    signUp.style.animation = "fadeOut 1s";
    setTimeout(() => {
        signUp.style.display='none';
        photos.style.display='none';
        finalCard.style.display='flex';
        finalCard.style.animation = "fadeIn 1s";
      }, 800);

    }

    else{
        errorMsg.style.display='block'
        input.style.background='#ffe9e7'
        input.style.border = 'solid 1px #e8c1c1'
        input.style.color = 'rgb(255, 59, 45)';
        setTimeout(
            ()=>{ errorMsg.style.display='none'
            input.style.background='white'
            input.style.border = ''
            input.style.color = 'black';

        }
           ,3000
        )

    }
    
  });