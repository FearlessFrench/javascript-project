// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

// const MathUtil = new MathUtil(); no need to do this
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

////////////////////////////////////////////////////////////

class User{
    
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    
    static getUserCount(){
        console.log(`There are ${User.usercount} users online`); 
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("French");

console.log(user1.username); // French
console.log(User.userCount); // 1

const user2 = new User("Claire")
console.log(user2.username); // Claire
console.log(User.userCount); // 2

const user3 = new User("Chris")
user3.sayHello(); // Hello, my username is Chris
User.getUserCount(); // There are 3 users online