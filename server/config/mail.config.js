import mailgun from "mailgun-js";

export function initalizeMailgun(){
      return mailgun({
          apiKey:process.env.MAILGUN__API__KEY,
          domain:process.env.MAILGUN__DOMAIN,
      });

}
