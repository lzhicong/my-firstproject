
const cars = new Map()
  .set('usa', ['Ford', 'Dodge'])
  .set('france', ['Renault', 'Peugeot'])
  .set('italy', ['Fiat']);

const getCarsByState = (state) => {
  return cars.get(state) || [];
}

console.log(getCarsByState()); // 输出 []
console.log(getCarsByState('usa')); //输出 ['Ford', 'Dodge']
console.log(getCarsByState('italy')); // 输出 ['Fiat']