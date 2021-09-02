# ReadingAssignment Fourteen

## Reading from [CSO](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html) and [Auth0 Docs](https://auth0.com/docs/authorization/flows)

- **What is OAuth?**
  - "OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization."
- **Give an example of what using OAuth would look like.**
  - The login for a website offers opportunities to login using a different sites login.
- **How does OAuth work? What are the steps that it takes to authenticate the user?**
  - User is authenticated at site-1 and wants to access site-2.
  - Site-1 connects to site-2 on behalf of the user, using OAuth, providing the user’s verified identity.
  - Site-2 generates a temporary, unique token and secret.
  - Site-1 gives token and secret to the user’s client software.
  - Client's software presents token and secret to authorization provider.
  - If not already authenticated to the authorization provider, the client may be asked to authenticate. After authentication, the client is asked to approve the authorization transaction to site-2.
  - User approves (or their software silently approves) a particular transaction type at site-1.
  - User is given an approved access token.
  - Site-1 gives token to site-2 for proof of authentication.
  - Site-2 allows site-1 access on behalf of user.
  - User sees successfully completed transaction occurring.
- **What is OpenID?**
  - Security technology, similar to OAuth, using authentication instead of authorization.
- **What is the difference between authorization and authentication?**
  - Authorization is the permission to access resources after successful authentication (proving ownership of identity)
- **What is Authorization Code Flow?**
  - Exchanges an authorization code for a token.
- **What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**
  - Exchanges an authorization code for a token, with the addition of a Proof Key for Code Exchange (PKCE).
- **What is Implicit Flow with Form Post?**
  - Alternative to ACF, used for apps unable to securely store client secrets.
- **What is Client Credentials Flow?**
  - "With machine-to-machine (M2M) applications, such as CLIs, daemons, or services running on your back-end, the system authenticates and authorizes the app rather than a user. For this scenario, typical authentication schemes like username + password or social logins don't make sense. Instead, M2M apps use this."
- **What is Device Authorization Flow?**
  - "With input-constrained devices that connect to the internet, rather than authenticate the user directly, the device asks the user to go to a link on their computer or smartphone and authorize the device. This avoids a poor user experience for devices that do not have an easy way to enter text. To do this, device apps use this."
- **What is Resource Owner Password Flow?**
  - Requests that users provide credentials (username and password), typically using an interactive form.
