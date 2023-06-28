import React from "react";

export default function ReturnPage() {
  console.log("in implicit return");
  let pageURL = window.location.href.split("access_token=");
  localStorage.setItem("accessToken", JSON.stringify(pageURL[1]));
  console.log(pageURL);

  window.onload = function () {
    // set this to YOUR domain in production!!
    const msg = { source: "oauthResponse", hash: window.location.hash || "" };
    if (window.opener) {
      window.parent.postMessage(msg, "*");
    } else {
      window.parent.postMessage(msg, "*");
    }
  };

  return (
    <div>
      <h2>Please close this tab or window.</h2>

      <div></div>
    </div>
  );
}
