const express = require('express');
const sqlite3 = require('sqlite3');
const ejs = require('ejs');
const app = express();
const port = 5300;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views')
app.use("/public", express.static("public"));


const boardDb = new sqlite3.Database('board_database.db');


// テーブルの作成
boardDb.run(`
   CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
   )
`);


// コメントの追加
app.post('/addComment', (req, res) => {
   const { content } = req.body;
   boardDb.run('INSERT INTO comments (content) VALUES (?)', [content], (err) => {
      if (err) {
         console.error(err);
         return res.status(500).send('Internal Server Error');
      }
      res.redirect('/');
   });
});

// 10分経過したコメントの削除
setInterval(() => {
   const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
   boardDb.run('DELETE FROM comments WHERE timestamp <= ?', tenMinutesAgo, (err) => {
      if (err) {
         console.error(err);
      }
   });
}, 10 * 60 * 1000); // 10分ごとに実行

// メインページの表示
app.get('/', (req, res) => {
   boardDb.all('SELECT * FROM comments', (err, boardRows) => {
      if (err) {
         console.error(err);
         return res.status(500).send('Internal Server Error');
      }

      res.render('index.ejs', { comments: boardRows });
   });
});

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});

