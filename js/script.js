//CLASS
//1
class User {
    constructor(name,age,profession){
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
     get information () {
        console.log(this.name, this.age, this.profession);
    }
    pension () {
        for(let i = 0; i <= 65 ; i++){
            //console.log(i);
            if( this.age + i === 65 ){
                console.log(`Через ${i} года вы выйдете на пенсию`);
            } else if (this.age > 65 ){
                console.log("Вы уже на пенсии");
            }
        }
    }
    
}
let user = new User('Vlad',22,'navigator');
user.information;
user.pension();

//2 
class New_user extends User {
    constructor(name,age,profession,gender){
        super(name,age,profession);
        this.gender = gender;
    }
    get information (){
        console.log(this.name, this.age, this.profession, this.gender);
    }
   
}
let new_user = new New_user('Vasya',27,'driver','male');
new_user.information;

new_user.profession = 'seaman';
new_user.information;

//3 
class Rectangle {
    constructor (width,length){
        this.width = width;
        this.length = length;
    }
    get parametrs (){
        console.log(this.length , this.width);
    }
    set s_parametrs(value){
        
        this.length = (this.length / 100 * value) + this.length;
        this.width = (this.width / 100 * value) + this.width;
        console.log(this.length , ' увеличили на value %');
        console.log(this.width,' увеличили на value %');
    }
    square (){
        console.log(this.length * this.width ,'площадь');
    }
    perimetr(){
        console.log((this.length + this.width) * 2, 'периметр');
    }
}
let rectangle = new Rectangle(100,100);
rectangle.parametrs;

rectangle.s_parametrs = 20;

rectangle.square();
rectangle.perimetr();

//DOM
//1
let div = document.querySelector('.content');
let input = document.querySelector('.input');

let euro = document.querySelector('.euro');
let dollar = document.querySelector('.dollar');
let zlotiy = document.querySelector('.zlotiy');

euro.addEventListener('click',exchange);
dollar.addEventListener('click',exchange);
zlotiy.addEventListener('click',exchange);

let p = document.createElement('p');
p.classList.add('result');


function exchange (event){

    let target = event.target;
    //console.log(target);
    let attr = target.getAttribute('data-rate');
    //console.log(attr);
    let value = input.value;
    //console.log(value);
    
    let result = (value/attr).toFixed(2);
    // let p = document.createElement('p');
    // p.classList.add('result');
    p.innerText = `You can buy that amount ${result}`;
    div.appendChild(p);
};


