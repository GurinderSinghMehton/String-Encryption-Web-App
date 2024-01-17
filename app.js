const encryptButton = document.getElementById("encrypt"); // select the encrypt button.
const decryptButton = document.getElementById("decrypt"); // select the decrypt button.
const container = document.getElementById('container'); // select the div element(id: container) of DOM.

// English Alphabets {key : value}
const alphabets = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
    'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
};
const keys = Object.keys(alphabets);
const values = Object.values(alphabets);

encryptButton.addEventListener("click", event => {
    const password = (String)(document.getElementById("password").value).toLowerCase(); // stores the value inside the input element and coverts the value in lower case string.
    const resultElement = document.createElement('h4'); // create the result element <h4>
    resultElement.classList.add('resultDisplay'); // add a class to the created element

    if(password){ // check if the input element has a value or not(true or false)
        const alphabetIndexArray = []; // will store the value of alphabet (from alphabets object)
        for(let i=0; i<password.length; i++){
            alphabetIndexArray[i] = alphabets[password.charAt(i)];
        }
        console.log(alphabetIndexArray);
        encrypt(alphabetIndexArray);
        //resultElement.textContent = encrypt(alphabetIndexArray); // this returns a encrypted string and pass it to the element content
        //container.appendChild(resultElement);
    }else{
        try{
            throw new Error("Value Missing!"); // if the input element is empty, it will throw an array(i.e.,Value Missing)
        }
        catch(error){
            resultElement.textContent = error;
            container.appendChild(resultElement);
        }
    }
});

decryptButton.addEventListener("click", event => {
    const password = document.getElementById("password").value;
    if(password){
        console.log(password);
    }else{
        throw new Error("Value Missing!");
    }
});




function encrypt(array){
    let tempArray = [];
    const stringArray = [];
    let index = 0;
    array.forEach(element => {
        tempArray[index] = (element/2) - 1;
        index++;
    });
    
    

}
function decrypt(array){
    let tempArray = [];
    for(let i=0; i<array.length; i++){
        tempArray[i] = (array[i] + 1) * 2;
    }
}
function displayResult(){}