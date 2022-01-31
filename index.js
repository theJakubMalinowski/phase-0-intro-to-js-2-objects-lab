const employee = {
    name: "David",
    streetAddress: "111 S Where? Way",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey (obj, key) {
    const newObj = { ...employee};
    delete newObj.name;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj.name;
    return obj;
}