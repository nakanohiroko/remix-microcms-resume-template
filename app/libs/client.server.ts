import { createClient } from "microcms-js-sdk";
import dotenv from "dotenv";

dotenv.config();

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain) {
  throw new Error("Environment variable MICROCMS_SERVICE_DOMAIN is not defined");
}

if (!apiKey) {
  throw new Error("Environment variable MICROCMS_API_KEY is not defined");
}

export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});