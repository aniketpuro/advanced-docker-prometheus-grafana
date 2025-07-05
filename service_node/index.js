const express = require('express');
const app = express();

app.get('/node', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

app.get('/metrics', (req, res) => {
  res.send(`node_response_time_seconds ${Math.random() * 2}`);
});

app.listen(5001, () => {
  console.log('Node service running on port 5001');
});
