import React from 'react';
import styles from "./GoogleButton.module.css";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

export default function GoogleButton() {
  return (
    <div className={styles.GoogleButton}>
        <LoginSocialGoogle
        className={styles.gooleButton}
        client_id={"905238119614-qtrioedmjplvf42pmibg335uv8kd055p.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          alert("Hello "+ data.name);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle >
    </div>
  )
}
