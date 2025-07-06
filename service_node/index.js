const express = require('express');
const client = require('prom-client');
const app = express();
const port = 5001;

// Create a custom metric
const responseTime = new client.Histogram({
  name: 'node_response_time_seconds',
  help: 'Response time in seconds',
  labelNames: ['method', 'route', 'status_code']
});

// Middleware to record response time
app.use((req, res, next) => {
  const end = responseTime.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.path, status_code: res.statusCode });
  });
  next();
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

// Expose metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  console.log(`Node service listening at http://localhost:${port}`);
});
