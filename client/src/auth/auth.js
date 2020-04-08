import axios from "axios";
import Router from "next/router";
import Cookies from "universal-cookie";
import moment from "moment";

// set up cookies
const cookies = new Cookies();
const serverUrl = "http://localhost:5000";

export async function handleAuthSSR(ctx) {
  let token = null;
  let token_exp = null;

  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    // good enough for demostration
    token = ctx.req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    token_exp = ctx.req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)token_exp\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  } else {
    // we dont have request info aka Client Side
    token = cookies.get("token");
    token_exp = cookies.get("token_exp");
  }

  try {
    if(token_exp ==  )


    const response = await axios.get(serverUrl + "/api/v1/auth/todos", {
      headers: { "x-access-token": token },
    });
    return response;
  } catch (err) {
    // in case of error
    console.log(err.response.data.msg);
    console.log("redirecting back to main page");
    // redirect to login
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/users/login",
      });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  }
}
