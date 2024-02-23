//Первое задание
function getShortName(lastName, firstName, patronymic) {
    const shortFirstName = firstName[0];
    const shortPatronymic = patronymic[0];

    return `${lastName} ${shortFirstName}. ${shortPatronymic}.`;
}

const fullName = getShortName('Жаныбеков', 'Дастан', 'Камчыбекович');
console.log(fullName);

//Второе задание
function filterBooksLetterU(...bookTitles) {
    const booksWithLetterU = bookTitles.filter(title => title.toLowerCase().includes('у'));
    const otherBooks = bookTitles.filter(title => !title.toLowerCase().includes('у'));

    console.log('Книги с буквой "у":', booksWithLetterU);
    console.log('Остальные книги:', otherBooks);
}

filterBooksLetterU('Узорный Покров', 'Самурай без меча', 'Не ной', 'Сила воли', 'Гамлет');

//Третье задание

const users = [
    { name: 'Дастан', birthDate: '05.02.2008' },
    { name: 'Данил', birthDate: '03.11.2007' },
    { name: 'Ирина', birthDate: '06.01.1986' },
    { name: 'Владимир', birthDate: '07.10.1952' },
    { name: 'Александр', birthDate: '30.05.1996' },
    { name: 'Алексей', birthDate: '17.10.1995' },

];

const userStrings = users.map(user => `Пользователь ${user.name} родился ${user.birthDate}`);

userStrings.forEach(userString => console.log(userString));

//Четвертое задание

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/ /, '');

    const isPalindromic = cleanStr === cleanStr.split('').reverse().join('');

    console.log(`Строка "${str}" является палиндромом: ${isPalindromic}`);

    return isPalindromic;
}

isPalindrome("А роза упала на лапу Азора");
isPalindrome("Город дорог");
isPalindrome("Привет!");
