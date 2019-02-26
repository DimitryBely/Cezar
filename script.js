"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('div');
        document.body.appendChild(header);
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            color: rgb(223, 223, 223);
            padding: 40px;
            font-size: 20px;
        `;

    const showLanguage = document.createElement('div');
        header.appendChild(showLanguage);
        showLanguage.textContent = 'Rus';
        showLanguage.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 40px;
            background-color: rgb(165, 153, 153);
            color: rgb(223, 223, 223);
            font-size: 20px;
        `;

    const mainName = document.createElement('div');
        header.appendChild(mainName);
        mainName.textContent = 'CEZAR';
        mainName.style.cssText = `
            font-size: 60px;
        `;

    const languageContainer = document.createElement('div');
        header.appendChild(languageContainer);
        languageContainer.classList.add('languageContainer');

    const languageRus = document.createElement('input');
        languageContainer.appendChild(languageRus);
        languageRus.classList.add('language');
        languageRus.type = 'button';
        languageRus.value = 'rus';

    const languageEng = document.createElement('input');
        languageContainer.appendChild(languageEng);
        languageEng.classList.add('language');
        languageEng.type = 'button';
        languageEng.value = 'eng';

    const input = document.createElement('input');
        document.body.appendChild(input);
        input.classList.add('input');

    const container = document.createElement('div');
        document.body.appendChild(container);
        container.classList.add('container');
        container.style.cssText = `
            display: flex;
            justify-content: space-around;
            flex-direction: row;
        `;

    const btnContainer = document.createElement('div');
        container.appendChild(btnContainer);
        btnContainer.classList.add('btnContainer');

    const code = document.createElement('input');
        btnContainer.appendChild(code);
        code.classList.add('code', 'button');
        code.value = 'Code';
        code.type = 'button';

    const decode = document.createElement('input');
        btnContainer.appendChild(decode);
        decode.classList.add('decode', 'button');
        decode.value = 'Decode';
        decode.type = 'button';

    const countersContainer = document.createElement('div');
        container.appendChild(countersContainer);
        countersContainer.classList.add('countersContainer');
        countersContainer.style.cssText = `
            display: flex;
            justify-content: space-around;
            flex-direction: row;
        `;

    const valueContainer = document.createElement('div');
        countersContainer.appendChild(valueContainer);
        valueContainer.classList.add('valueContainer');

    const value = document.createElement('input');
        valueContainer.appendChild(value);
        value.classList.add('value');
        value.value = '3';

    const btnValueContainer = document.createElement('div');
        valueContainer.appendChild(btnValueContainer);
        btnValueContainer.classList.add('btnValueContainer');

    const valueLoop = document.createElement('input');
        btnValueContainer.appendChild(valueLoop);
        valueLoop.classList.add('btnValue');
        valueLoop.type = 'button';
        valueLoop.value = '+';

    const valueUnloop = document.createElement('input');
        btnValueContainer.appendChild(valueUnloop);
        valueUnloop.classList.add('btnValue');
        valueUnloop.type = 'button';
        valueUnloop.value = '-';

    const output = document.createElement('input');
        document.body.appendChild(output);
        output.classList.add('output');

    const alphabetRus = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    const alphabetEng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

    code.addEventListener('click', function(){
        let arr = input.value.split('');
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < alphabet.length; j++){
                if(arr[i] == alphabet[j]){
                    if(alphabet.length - j > +value.value){
                        arr[i] = alphabet[j + +value.value];
                        break;
                    } else {
                        arr[i] = alphabet[+value.value - (alphabet.length - j)];
                        break;
                    }
                } else if (arr[i] == alphabet[j].toUpperCase()) {
                    if(alphabet.length - j > +value.value){
                        arr[i] = alphabet[j + +value.value].toUpperCase();
                        break;
                    } else {
                        arr[i] = alphabet[+value.value - (alphabet.length - j)].toUpperCase();
                        break;
                    }
                }
            }
        }
        output.value = arr.join('');
    });

    decode.addEventListener('click', function(){
        let arr = input.value.split('');
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < alphabet.length; j++){
                if(arr[i] == alphabet[j].toLowerCase()){
                    if(arr[i] == alphabet[j] && j >= value.value){
                        arr[i] = alphabet[j - value.value];
                        break;
                    } else if (arr[i] == alphabet[j] && j < value.value){
                        arr[i] = alphabet[alphabet.length + (j - value.value)];
                        break;
                    }
                } else {
                    if(arr[i] == alphabet[j].toUpperCase() && j >= value.value){
                        arr[i] = alphabet[j - value.value].toUpperCase();
                        break;
                    } else if (arr[i] == alphabet[j].toUpperCase() && j < value.value){
                        arr[i] = alphabet[alphabet.length + (j - value.value)].toUpperCase();
                        break;
                    }
                }
            }
        }
        output.value = arr.join('');
    });

    valueLoop.addEventListener('click', () => {
        if(+value.value < alphabet.length - 1) value.value++;
    });

    valueUnloop.addEventListener('click', () => {
        if(+value.value > 1) value.value--;
    });

    languageRus.addEventListener('click', () => {
        alphabet.splice(0);
        alphabet = alphabetRus;
    });

    languageEng.addEventListener('click', () => {
        alphabet.splice(0);
        alphabet = alphabetEng;
    });

    setInterval(function (){
        if(+value.value > alphabet.length - 1) value.value = alphabet.length - 1;
        if(+value.value < 1) value.value = 1;
    }, 10);
});