//your code here
let iElement= document.getElementById('evaluatedText');
let head= document.getElementById('wordCount');


function handleInput(e){
 let sentence = e.target.value;
//   match(/\S+/ig) => this is one of the regex(regular expression) that we use if we want to know the number of words in a sentence. 

 let match= sentence.match(/\S+/ig).length;
 head.innerText=match;
}

iElement.addEventListener('input' , handleInput );