const model1 = 'info';
const model2 = 'windows';
const model3 = 'win';
const checkCarModel = (model) => {
    if(['peugeot', 'renault','info'].includes(model)) { 
    console.log(model);
    }
};
checkCarModel(model1);
checkCarModel(model2);
checkCarModel(model3);

