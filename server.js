const express = require('express');
const app = express();
const results = [
  { id: 1, name: "محمد أحمد", score: "95%" },
  { id: 2, name: "فاطمة علي", score: "88%" }
];

app.use(express.json());

app.get('/api/results/:id', (req, res) => {
  const result = results.find(r => r.id == req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: "النتيجة غير موجودة" });
  }
});

app.post('/api/results', (req, res) => {
  const newResult = {
    id: results.length + 1,
    name: req.body.name,
    score: req.body.score
  };
  results.push(newResult);
  res.status(201).json(newResult);
});

app.listen(3000, () => console.log('Server running on port 3000'));