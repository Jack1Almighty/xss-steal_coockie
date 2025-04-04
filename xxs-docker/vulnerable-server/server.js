const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(cookieParser());

// Генератор уникальных сессий
const generateSession = () => ({
  id: uuidv4(),
  username: `user_${Math.floor(Math.random() * 1000)}`,
  lastVisit: new Date().toISOString()
});

app.get('/', (req, res) => {
  // Устанавливаем куку если её нет
  if (!req.cookies.session) {
    const session = generateSession();
    res.cookie('session', JSON.stringify(session), {
      httpOnly: false,
      maxAge: 86400000
    });
    console.log(`[+] Новая сессия для: ${session.username}`);
  }
  
  res.send(`
    <h1>Добро пожаловать!</h1>
    <form action="/search">
      <input type="text" name="query" placeholder="Поиск...">
      <button>Искать</button>
    </form>
  `);
});

app.get('/search', (req, res) => {
  // Уязвимый вывод поискового запроса
  const query = req.query.query || '';
  res.send(`<h2>Результаты поиска:</h2><p>${query}</p>`);
});

app.listen(3000, () => {
  console.log('Уязвимый сервер запущен: http://localhost:3000');
});