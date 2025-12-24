function checkType(value) {
    if (Array.isArray(value)) {
        console.log("array");
        return "array";
    } else {
        console.log(typeof value);
        return typeof value;
    }
}

checkType({a: 1});
checkType(true);
checkType(10);       
checkType("Hello");               
checkType(undefined);