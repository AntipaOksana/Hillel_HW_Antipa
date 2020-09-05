function createTemplate(str) {

    return function(obj) {
        const arrOfKeys = Object.keys(obj)
        arrOfKeys.forEach(key => {
            str = str.replace(`{{${key}}}`, obj[key])
        })
        return str
    }
}

const person = {
    name: 'Alex',
    surname: 'Smith',
    phone: '+380 00 000 00 00'
};

const helloTemplate = createTemplate(`Hello, {{name}}!`)
console.log(helloTemplate(person));

const detailsTemplate = createTemplate(`{{name}} {{surname}}, phone {{phone}}`);

console.log(detailsTemplate(person));