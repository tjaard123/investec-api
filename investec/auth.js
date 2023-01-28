import axios from "axios";
import config from "./config/config.js";
import secrets from "./config/secrets.js";

export const getAccessToken = async () => {
  // Stock standard basic auth using your client ID and secret
  const encodedCredentials = Buffer.from(`${secrets.ClientId}:${secrets.ClientSecret}`).toString('base64');
  
  const { data } = await axios.post(
    config.AuthUrl, // Investec authentication URL, to exchange credentials for access token
    "grant_type=client_credentials",
    {
      headers: {
        "x-api-key": secrets.ApiKey, // Your API key
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodedCredentials}`,
      },
    }
  );
  return data.access_token;
};