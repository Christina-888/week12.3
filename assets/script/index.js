const userName = document.getElementById('name');
const userAvatar = document.getElementById('link');
const userComment = document.getElementById('comments');
const button = document.getElementById('submit');
const commentsSection = document.getElementById('comments-section');
const hideUserName = document.getElementById('name-show');

//Имя:
const formattedName = (name) => {
  const trimmedName = name.trim();
  if (trimmedName.length === 0) return '';
  return trimmedName[0].toUpperCase() + trimmedName.slice(1).toLowerCase();
};

//Цензура:
const findSpam = (inputText) => {
  const spamWords = ['viagra', 'сука', 'пидор', 'мудак', 'merde', 'bitch'];
  return spamWords.reduce((result, word) => {
    let regexp = new RegExp(word, 'gi');
    return result.replace(regexp, '***');
  }, inputText);
};

//Условие ввода текста:
userComment.addEventListener('input', function() {
  const commentText = userComment.value;
  if (commentText.trim() === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

const getRandomAvatar = () => {
  const whatAvatar = Math.floor(Math.random() * 6) + 1;
  return `./assets/image/jpeg/${whatAvatar}.jpg`;
}

//Отправка:
button.addEventListener('click', (evt) => {
  evt.preventDefault();

let finalName;
if (hideUserName.checked) {
  finalName = 'username';
} else {
  finalName = formattedName(userName.value);
}  
  
//Аватар:
  const emptyAvatar = getRandomAvatar();
  const name = formattedName(userName.value);
  const avatar = userAvatar.value || emptyAvatar;
  const comment = findSpam(userComment.value);

//Дата и время:
  const currentDate = new Date().toLocaleString('ru-RU');

  //Комменты:
  const commentElement = document.createElement('div');
  commentElement.innerHTML = `<img src="${avatar}" width='50px' height='60px'/>
  <strong>${finalName}</strong>: ${comment} <br>
  <small>${currentDate}</small>`;

  if (userName.value === '' && userAvatar.value === '' && userComment.value === '') {
    alert('Заполните, пожалуйста, поле!')
    return
  }

  commentsSection.append(commentElement);

  userName.value = '';
  userAvatar.value = '';
  userComment.value = '';
  button.disabled = true;
});








