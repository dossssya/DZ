var month = prompt('Введите ваш месяц рождения. Писать за главной буквой!')
var day = prompt('Введите ваш день рождения')
if (month === 'Март'  && day >=21 && day <=31 || month === 'Апрель' && day <= 19 && day >= 0){
    alert(month +''+ day + ''+ '-Овен')
}else if (month === 'Апрель' && day >=21 && day <=30 || month === 'Май' && day <= 21 && day >= 0){
    alert(month +''+ day + ''+ '-Телец')
}else if (month === 'Май' && day >=22 && day <=31 || month === 'Июнь' && day <= 21 && day >= 0){
    alert(month +''+ day + ''+ '-Близнецы')
}else if (month === 'Июнь' && day >=22 && day <=30 || month === 'Июль' && day <= 22 && day >= 0){
    alert(month +''+ day + ''+ '-Рак')
}else if (month === 'Июль' && day >=23 && day <=31 || month === 'Август' && day <= 21 && day >= 0){
    alert(month +''+ day + ''+ '-Лев')
}else if (month === 'Август' && day >=22 && day <=31 || month === 'Сентябрь' && day <= 23 && day >= 0) {
    alert(month +''+ day + ''+ '-Дева')
}else if (month === 'Сентябрь' && day >=24 && day <=30 || month === 'Октябрь' && day <= 23 && day >= 0) {
    alert(month +''+ day + ''+ '-Весы')
}else if (month === 'Октябрь' && day >=24 && day <=31 || month === 'Ноябрь' && day <= 22 && day >= 0) {
    alert(month +''+ day + ''+ '-Скорпион')
}else if (month === 'Ноябрь' && day >=23 && day <=30 || month === 'Декабрь' && day <= 22 && day >= 0) {
    alert(month +''+ day + ''+ '-Стрельец')
}else if (month === 'Декабрь' && day >=23 && day <=31 || month === 'Январь' && day <= 20 && day >= 0) {
    alert(month +''+ day + ''+ '-Козерог')
}else if (month === 'Январь' && day >=21 && day <=31 || month === 'Февраль' && day <= 18 && day >= 0) {
    alert(month +''+ day + ''+ '-Водолей')
}else if (month === 'Февраль' && day >=20 && day <=29 || month === 'Март' && day <= 20 && day >= 0) {
    alert(month +''+ day + ''+ '-Рыбы')
} else{
    alert('Что-то пошло не так, попробуйте еще раз')
}