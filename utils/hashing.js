const { hash } = require("bcryptjs")

exports.doHash = (value, saltValue) => {
    const result = hash(value,saltValue)
    return result;

};

exports.dollashvalidation = (value,hashedValue) =>{
    const result = compare(value,hashedValue);
    return result;

}