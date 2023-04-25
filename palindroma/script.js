const word = prompt('inserisci una parola');

isPalindrome(word);


function isPalindrome(){
let reverseword = '';
for (let i = word.length - 1; i >= 0; i--){
    reverseword += word[i];
}

if(word == reverseword){
    console.log('palindroma')
}
else{
    console.log('non palindroma')
}
}


