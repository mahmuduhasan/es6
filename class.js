
class parents{
    constructor(){
        this.fatherName = "A.K.M. Hashmat Ullah";
        this.motherName = "Kohinur Begum";
    }
}
class child extends parents{
    constructor(childId, childName){
        super();
        this.id = childId;
        this.name = childName;
    }
}

const firstChild = new child(1,"Mahmudul Hasan");
const secondChild = new child(2,"Sakib Al Hasan");
console.log(firstChild, secondChild);
