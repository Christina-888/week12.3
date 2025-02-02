const userName = document.getElementById('name');
const userAvatar = document.getElementById('link');
const userComment = document.getElementById('comments');
const button = document.getElementById('submit');
const commentsSection = document.getElementById('comments-section');

//Имя:
const formattedName = (name) => {
  const trimmedName = name.trim();
  if (trimmedName.length === 0) return '';
  return trimmedName[0].toUpperCase() + trimmedName.slice(1).toLowerCase();
};

//Цензура:
const findSpam = (inputText) => {
  const spamWords = ['viagra', 'xxx'];
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

//Отправка:
button.addEventListener('click', (evt) => {
  evt.preventDefault();
  
//Аватар:
  const emptyAvatar = './assets/image/jpeg/avatar.jpg';
  const name = formattedName(userName.value);
  const avatar = userAvatar.value || emptyAvatar;
  const comment = findSpam(userComment.value);

  //Комменты:
  const commentElement = document.createElement('div');
  commentElement.innerHTML = `<img src="${avatar}" width='50px' height='50px'/>
  <strong>${name}</strong>: ${comment}`;
  commentsSection.append(commentElement);

  userName.value = '';
  userAvatar.value = '';
  userComment.value = '';
  button.disabled = true;
});








