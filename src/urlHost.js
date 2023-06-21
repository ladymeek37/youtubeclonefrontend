export const URL_HOST =
  process.env.NODE_ENV === "production"
    ? "https://ladys-proxy.ladyjmeek.workers.dev/?targetUrl=http://youtubeclonebackend-env.eba-v3pg8b35.us-east-2.elasticbeanstalk.com"
    : "http://127.0.0.1:8000";
