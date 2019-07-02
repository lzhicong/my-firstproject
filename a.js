const model1 = 'info';
const checkCarModel = (model) => {
    if(['peugeot', 'renault','info'].includes(model)) { 
    console.log(model);
    }
};
checkCarModel(model1);
