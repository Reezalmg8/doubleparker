require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const QRCode = require('qrcode');
const twilio = require('twilio');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig.development);

const app = express();
app.use(cors());
app.use(express.json());

// Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post('/register', async (req, res) => {
  const { name, phoneNumber, carPlateNumber, carType, password } = req.body;
  const userId = `user_${Date.now()}`;

  try {
    const baseUrl = 'http://localhost:3000/action'; // URL for the action page
    const qrUrl = `${baseUrl}?userId=${userId}`;
    const qrCodeDataUrl = await QRCode.toDataURL(qrUrl);

    await knex('users').insert({ userId, name, phoneNumber, carPlateNumber, carType, password, qrCodeUrl: qrCodeDataUrl });

    res.json({ qrCodeDataUrl });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/generate-qr', async (req, res) => {
  const { userId } = req.body;
  const baseUrl = 'http://localhost:3000/action'; // URL for the action page

  const qrUrl = `${baseUrl}?userId=${userId}`;

  try {
    const qrCodeDataUrl = await QRCode.toDataURL(qrUrl);
    res.json({ qrCodeDataUrl });
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

app.get('/send-sms', async (req, res) => {
  const { userId } = req.query;
  const userPhoneNumber = '+60176374665'; // Replace with actual phone number
  const message = 'This is a test SMS message';

  try {
    await client.messages.create({
      body: message,
      from: '+16189958169', // Replace with your Twilio phone number
      to: userPhoneNumber
    });
    res.send('SMS sent successfully');
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).send('Failed to send SMS');
  }
});

app.get('/send-whatsapp', async (req, res) => {
  const { userId } = req.query;
  const userPhoneNumber = '+60176374665'; // Replace with actual phone number
  const message = 'This is a test WhatsApp message';

  try {
    await client.messages.create({
      body: message,
      from: 'whatsapp:+16189958169', // Replace with your Twilio WhatsApp number
      to: `whatsapp:${userPhoneNumber}`
    });
    res.send('WhatsApp message sent successfully');
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).send('Failed to send WhatsApp message');
  }
});

app.get('/send-voice-note', async (req, res) => {
  const { userId } = req.query;
  const userPhoneNumber = '+60176374665'; // Replace with actual phone number

  try {
    await client.calls.create({
      twiml: `<Response><Say>Hello, this is a test voice message</Say></Response>`,
      to: userPhoneNumber,
      from: '+16189958169' // Replace with your Twilio phone number
    });
    res.send('Voice note sent successfully');
  } catch (error) {
    console.error('Error sending voice note:', error);
    res.status(500).send('Failed to send voice note');
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
