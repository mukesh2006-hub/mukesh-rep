const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mukesh Web App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          text-align: center;
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          max-width: 500px;
        }
        h1 {
          color: #333;
          margin-bottom: 10px;
        }
        .status {
          color: #667eea;
          font-size: 18px;
          margin: 20px 0;
        }
        .info {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 5px;
          text-align: left;
          margin: 20px 0;
        }
        .info p {
          margin: 8px 0;
          color: #555;
        }
        .label {
          font-weight: bold;
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Mukesh Web App</h1>
        <div class="status">✅ Application is Running</div>
        <div class="info">
          <p><span class="label">Environment:</span> ${process.env.NODE_ENV || 'development'}</p>
          <p><span class="label">Port:</span> ${PORT}</p>
          <p><span class="label">Architecture:</span> AMD64</p>
          <p><span class="label">Deployment:</span> Docker + GitHub Actions</p>
          <p><span class="label">Time:</span> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'Mukesh Web App',
    version: '1.0.0',
    author: 'mukesh2006-hub',
    deployment: 'Docker + CI/CD'
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});