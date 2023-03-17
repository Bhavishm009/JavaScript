//method 1
const practiceData = [[14,21,23,64], [33,46,51,65]]
const incrementedArray = practiceData.map((outerArray) =>
outerArray.map(innerElement => innerElement + 1)
);
console.log(incrementedArray);

//method 2
const evenArray = practiceData.map((outerArray) =>
outerArray.filter(innerElement => innerElement % 2 === 0)
);
console.log(evenArray);

const array = [23 , 45,467, 789, 34, 989, 56]
const answer = array.map((element, index) => index % 2 === 0 ? element * 10 : element * 2);
console.log(answer)


const carBrands = ["honda", "toyota", "maruti","tata"]
const carModel = ["city", "innova", "alto", "nano"]

const carObject = {}

carBrands.forEach((brand, index) => {
carObject[brand] = carModel[index];
});
console.log(carObject);


const arrays = [[1, 2, 3], [4, 5], [6]];
console.log(
arrays.reduce((acc, curr) => {
    acc = [...acc, ...curr]
    return acc
    }))
    
    const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const capitals = countries.map(item => item.toUpperCase())
console.log(capitals)