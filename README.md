
## Unhandled Runtime Error

Error: Attempted to call useAuth() from the server but useAuth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.

## Source

src\app\register\page.js (13:31) @ Register

```bash
const Register = () => {
const { register } = useAuth({                       
     middleware: "guest",
     redirectIfAuthenticated: "/dashboard",
   });
}
```
