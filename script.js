const myForm = document.querySelector('#myForm');
const containerInput = document.querySelectorAll('.container-input');
const result = document.querySelector('.result');


console.log(myForm);


myForm.addEventListener('submit', (e) => {

    let isError = false;

    Array.from(myForm).forEach( (item, index) => {

        if(!item.validity.valid){

            isError = true;

            if(!item.parentElement.lastElementChild.classList.contains('error')){

                item.style.border = '0.1rem solid hsl(0, 100%, 66%)';

                const spanError = index !== 1 ? `<span class="error">Can't be blank</span>` : `<span class="error">Wrong format, numbers only</span>`;
                item.parentElement.insertAdjacentHTML('beforeend', spanError);  

            }

        }

        else{

            if(item.parentElement.lastElementChild.classList.contains('error')){

                item.style.border = '0.1rem solid hsl(279, 6%, 55%)';
                item.parentElement.lastElementChild.remove();
                
            }

        }        

    });

    if(!isError){

        myForm.style.display = 'none';

        const divResult = `<section class="result">
                            <img class="image-complete" src="./images/icon-complete.svg" alt="complete">
                            <h2 class="title-result text">Thank you!</h2>
                            <p class="text text-result">We've added your card details</p>
                            <button class="button-submit text" type="reset" form="myForm">Continue</button>
                           </section>`;
         
        document.querySelector('.container').insertAdjacentHTML('beforeend', divResult);

    }

    e.preventDefault();

});



Array.from(myForm).forEach( (item, index) => {

    item.addEventListener('input', () => {

        if(index === 0){
            document.querySelector('.name-member').innerText = item.value;
        }

        if(index === 1){

            let array = [];

            array = item.value.split('');

            if(array.length < 16){

                console.log(16 - array.length);

                for(let i = array.length; i < 16; i++){

                    array.push('0');

                }

            }

            document.querySelector('.card-member').innerText = `${array.splice(0, 4).join('')} ${array.splice(0, 4).join('')} ${array.splice(0, 4).join('')} ${array.splice(0, 4).join('')}`;

        }

        if(index === 2){
            document.querySelector('.date-member-month').innerText = item.value;
        }

        if(index === 3){
            document.querySelector('.date-member-year').innerText = item.value;
        }

        if(index === 4){
            document.querySelector('.cvc-member').innerText = item.value;
        }

    });

});


myForm.addEventListener('reset', () => {

    if(document.querySelector('.container').lastElementChild.classList.contains('result')){

        document.querySelector('.container').lastElementChild.remove();
        document.querySelector('.name-member').innerText = 'Jane Appleseed';
        document.querySelector('.card-member').innerText = '0000 0000 0000 0000';
        document.querySelector('.date-member-month').innerText = '00';
        document.querySelector('.date-member-year').innerText = '00';
        document.querySelector('.cvc-member').innerText = '000';

    }

    myForm.style.display = 'block';

});

