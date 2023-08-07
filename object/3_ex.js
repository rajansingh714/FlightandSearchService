user={
    name:"rajan",
    roll: 58,
    from: "bihar",
    sayHi(){
        console.log(this.name);
    }
};
let admin= user;
user=null;
admin.sayHi();