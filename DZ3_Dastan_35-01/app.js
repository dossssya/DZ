var tag = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var tag1 = {}
for (var i = 0; i < tag.length; i++){
    var tags = tag[i]
    if (tag1[tags]){
        tag1[tags]++
    }else{
        tag1[tags] = 1
    }
}
console.log(tag1)

var number = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
var number1 = [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
var number2 = []
for (var numbers of number){
    if (number1.includes(numbers)&&!number2.includes(numbers)){
        number2.push(numbers)
    }
}
console.log(number2)