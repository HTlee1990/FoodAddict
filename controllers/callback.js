require("dotenv").config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
const ENDPOINT = process.env.ENDPOINT;
const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const authCode = req.body.authorizationCode;
    const code = await axios({
      url: "https://accounts.google.com/o/oauth2/token",
      method: "post",
      data: {
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_SECRET,
        code: authCode,
        redirect_uri: `${ENDPOINT}/login`,
        grant_type: "authorization_code",
      },
    });
    const accessToken = code.data.access_token;

    const userData = await axios({
      url: "https://www.googleapis.com/oauth2/v3/userinfo",
      method: "get",
      params: {
        access_token: accessToken,
        scope: "https://www.googleapis.com/auth/userinfo.email",
      },
    });
    res
      .cookie("accessToken", accessToken)
      .status(200)
      .send({ data: userData.data });
  } catch (error) {
    console.log(error);
  }
};
