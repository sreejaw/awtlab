let student=function(name,age){
    this.name=name
    this.age=age
    this.display=function(){
        setTimeout(()=>{
            console.log(this.name+" is "+this.age+" years old")
        },1000)
        
    }
}

let s=new student("heer",18)
s.display()