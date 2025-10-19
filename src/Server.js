const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // serve HTML from /public

app.post('/run', (req, res) => {
  const url = req.body.url;
  if (!url) return res.status(400).send('No URL provided');

  const child = spawn('npm', ['start', url], { shell: true });

  let output = '';

  child.stdout.on('data', (data) => {
    output += data.toString();
  });

  child.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  child.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).send('Script failed');
    }
    // Assuming your script outputs a file called "result.json" in the project root
    const filePath = path.join(__dirname, 'result.json');
    res.download(filePath);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

