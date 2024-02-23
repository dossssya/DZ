var numbers = [34, 65, 67, 89,8,9,23,21,10,23,28]

for(var i = 0; i < numbers.length; i++){
    if (numbers [i] % '2' === 0){
        console.log(numbers[i])
    }
}


var film ={
    title: 'Гарри Поттер и философский камень',
    date: '16 ноября 2001г.',
    info: {
        genre: 'fantasy',
        price: '8$',
        starring: 'Дэниал Рэдклифф, Эмма Уотсон, Руперт Гринт, Том Фелтон, Алан Рикман',
        duration: '2 часа 32 минуты',
        measurement: '2D'
    }
}
console.log(film)


var number = Number(prompt('Введите цифру 1-15:'))

switch (number){
    case 1:
        console.log('I')
        break
    case 2:
        console.log('II')
        break
    case 3:
        console.log('III')
        break
    case 4:
        console.log('IV')
        break
    case 5:
        console.log('V')
        break
    case 6:
        console.log('VI')
        break
    case 7:
        console.log('VII')
        break
    case 8:
        console.log('VIII')
        break
    case 9:
        console.log('IX')
        break
    case 10:
        console.log('X')
        break
    case 11:
        console.log('XI')
        break
    case 12:
        console.log('XII')
        break
    case 13:
        console.log('XIII')
        break
    case 14:
        console.log('XIV')
        break
    case 15:
        console.log('XV')
        break
    default:
        console.log('Вы ввели неправильное число')
}
