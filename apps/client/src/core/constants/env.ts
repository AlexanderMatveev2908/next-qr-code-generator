const isDev = process.env.NEXT_PUBLIC_ENV === "development";

export const envApp = {
  isDev,
  ENV: process.env.NEXT_PUBLIC_ENV,
  BACK_URL: isDev
    ? process.env.NEXT_PUBLIC_BACK_URL_DEV
    : process.env.NEXT_PUBLIC_BACK_URL,
  CURR_URL: isDev
    ? process.env.NEXT_PUBLIC_FRONT_URL_DEV
    : process.env.NEXT_PUBLIC_FRONT_URL,
};
