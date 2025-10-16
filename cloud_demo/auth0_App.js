
import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div>
      <h2>IDaaS Example</h2>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          <p>Welcome {user.name}</p>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Home />
    </Auth0Provider>
  );
}
