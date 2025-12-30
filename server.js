const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Certificates folder
const CERT_FOLDER = path.join(__dirname, "certificates");

// Home page
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>Certificate Download</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f6f9;
    }
    .container {
      max-width: 500px;
      margin: 80px auto;
      padding: 30px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      text-align: center;
    }
    h1 {
      color: #0a3d62;
      margin-bottom: 10px;
    }
    h3 {
      color: #333;
      margin: 5px 0;
    }
    p {
      color: #555;
      margin: 4px 0;
    }
    input {
      width: 90%;
      padding: 10px;
      margin-top: 15px;
      font-size: 16px;
    }
    button {
      margin-top: 20px;
      padding: 10px 25px;
      font-size: 16px;
      background: #0a3d62;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #07416b;
    }
    footer {
      margin-top: 25px;
      font-size: 13px;
      color: #777;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Web Development Vision Workshop</h1>
    <h3>Aditya Institute of Technology and Management</h3>

    <p><b>Organized by</b></p>
    <p>Department of CSM</p>

    <p><b>Coordinator</b></p>
    <p>Sri Dasaradha Arang</p>

    <form action="/download" method="get">
      <input type="text" name="roll" placeholder="Enter Roll Number" required />
      <br>
      <button type="submit">Download Certificate</button>
    </form>

    <footer>
      © Aditya Institute of Technology and Management
    </footer>
  </div>
</body>
</html>
  `);
});

app.get("/download", (req, res) => {

  //  STOP DOWNLOADS (TEMPORARY / PERMANENT)
  return res.send(`
    <script>
      alert("Certificate download period has ended. Please contact the coordinator (Sri. Dasaradha Arangi).");
      window.location.href = "/";
    </script>
  `);

  // ---- OLD CODE BELOW (WILL NOT RUN) ----


  res.download(filePath);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
