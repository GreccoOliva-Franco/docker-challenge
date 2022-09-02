// External modules
import dotenv from "dotenv";

dotenv.config();

const configs = {
  port: process.env.APP_PORT || 4000,
}

export default configs;