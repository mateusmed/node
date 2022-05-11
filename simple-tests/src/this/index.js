

let newList = [{"id": 1, "name": "mateus"},
               {"id": 1, "name": "mateus med"},
               {"id": 2, "name": "israel"}];




let filterFunction = newList.filter(function (item){

    let contextList = this;

    if(!contextList.includes(item.id)){
        contextList.push(item.id);
        return true;
    }

}, []);


let filterArrowFunction = newList.filter( (item) => {

    let contextList = this;

    if(!contextList.includes(item.id)){
        contextList.push(item.id);
        return true;
    }

}, []);


console.log("filterFunction: ", filterFunction);

console.log("filterArrowFunction: ", filterArrowFunction);