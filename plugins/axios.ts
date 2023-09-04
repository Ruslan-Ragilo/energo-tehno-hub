import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "<https://etechhubspb.ru/>";

  let api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      common: {},
    },
  });
return {
    provide: {
      api: api,
    },
  };
});