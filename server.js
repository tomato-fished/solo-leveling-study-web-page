const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Обработчик POST запроса для контактов
app.post('/api/contact', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Формируем строку для записи в файл
    const log = `${new Date().toISOString()} - ${firstName} ${lastName} <${email}>: ${message}\n`;

    // Записываем данные в файл messages.txt
    fs.appendFileSync('messages.txt', log);

    // Отправляем успешный ответ
    res.json({ status: 'success', message: 'Form received!' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
