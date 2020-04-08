import axios from "axios";
export const goToApp = (router, app_url) => {
  router.push(`${app_url}`);
};
