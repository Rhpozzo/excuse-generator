
let who = ['my neighbor ', 'my cat ', 'the king ', 'a person I don\'t know '];
let what = ['played loud music ',"drove the car into my pool ", "went to mexico ", "got blown up " ];
let when = ['all night', 'this morning', 'last week', 'in the future'];

let excuse = () => {
   let output = who[Math.floor(Math.random() * who.length)] + what[Math.floor(Math.random() * what.length)]  + when[Math.floor(Math.random() * who.length)];
    document.querySelector('.output').innerHTML = output;
}

console.log('hello from the console.')