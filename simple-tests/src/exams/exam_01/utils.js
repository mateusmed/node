
function isBraket(text) {
    return text.includes("{") ||
        text.includes("}") ||
        text.includes("(") ||
        text.includes(")") ||
        text.includes("[") ||
        text.includes("]");
}


function isOpository(textA, textB) {

    if(textA === "{" && textB === "}"){
        return true;
    }
    if(textA === "(" && textB === ")"){
        return true;
    }
    if(textA === "[" && textB === "]"){
        return true;
    }
    return false;
}

function order (a, b) {
    if (a['value'] < b['value']) {
        return 1;
    }
    if (a['value'] > b['value']) {
        return -1;
    }
    return 0;
}


function findZeros(layer){

    let layerStr = layer.join("");

    let result = layerStr.match('([1-9])(.*)([1-9])');
    if(result !== null){
        let zeros = result[0].replace(/[1-9]/g, '');
        return zeros.length;
    }
    return 0;
}


module.exports = {
    isBraket: isBraket,
    isOpository: isOpository,
    order: order,
    findZeros: findZeros
};
