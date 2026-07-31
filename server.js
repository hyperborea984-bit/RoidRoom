const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Handle Render health checks and base route
app.get('/', (req, res) => {
    res.send('Rec Room Custom Patch Backend is Online!');
});

// Example Rec Room API endpoint (Config data required by older builds)
app.get('/api/config/v2', (req, res) => {
    res.json({
        "PlayMode": "Normal",
        "DisplayMode": "None",
        "StripePublicKey": "pk_test_mock",
        "AcknowledgeLossOfData": true
    });
});

// Dynamic port assignment for Render
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Rec Room backend running on port ${port}`);
});
