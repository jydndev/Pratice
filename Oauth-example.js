app.post('/auth/google', async (req, res) => {
  // exchange authorization code for access token
  const { code } = req.body;
  const tokenRes = axios.post('https://oauth2.googleapis.com/token', {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI,
    grant_type: 'authorization_code',
  });

  const { access_token } = tokenRes.data;
});
