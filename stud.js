let student=function(name,age){
    this.name=name
    this.age=age
    this.display=function(){
        console.log(this.name+" is "+this.age+" years old")
    }
}

let s=new student("heer",18)
s.display()