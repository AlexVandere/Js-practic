let userPrompt = +prompt('ведіть число від 1 до 4 ')
let result 
switch (userPrompt) {
    case 1:
        result = 'зима'
        break;
    case 2:
        result = 'весна'
        break;
    case 3:
        result = 'літо'
        break;
    case 4:
        result = 'осінь'
        break
    default:
        result ='ведіть будь ласка друге значення'
}
alert(result)