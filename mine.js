// name-5, lastname-5, fullName(), age, isMerred: boolen, car: {2} 
 
let user = new Object(); 
 
let name = prompt('Enter Your Name !') 
if (name.length > 5) { 
    user.name = name; 
}else{ 
    console.log('Ismingni yoz !'); 
}
let lastname = prompt('Enter Your lastname !') 
if (lastname.length > 5) { 
    user.lastname = lastname; 
}else{ 
    console.log('Famelyani yozing !'); 
}
let age =prompt('Who old do you!') 

let merred = prompt('Uylanganmisan?') 
if (merred.length > 3) { 
    user.merred = merred; 
}else{ 
    console.log('False !'); 
}
let car = prompt('Qanday Nomdagi mashinagiz bor?') 
if (car.length > 3) { 
    user.car = car; 
}else{ 
    console.log('Sizni mashinagiz yuq !'); 
}

 
console.log(user);


