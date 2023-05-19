# auth

To get started with the API, please follow the instructions below:

1. Since the server is running in render.com and a mongodb cluster is also running, just use Postman or Thunder Client to test these API endpoints.

2. Sign in to your account using the /api/signin endpoint. Send a POST request to https://auth-7k2y.onrender.com/api/signin with the following JSON body:
```
{
  "email": "johnson@gmail.com",
  "password": "test"
}
```

3. Replace "johnson@gmail.com" with your email and "test" with your password.

4. If you don't have an account yet, you can sign up by using the /api/signup endpoint. Send a POST request to https://auth-7k2y.onrender.com/api/signup with the following JSON body:
```
{
  "firstName": "John",
  "lastName": "Miller"
  "email": "johnson@gmail.com",
  "password": "test"
}
```

5. Again, make sure to replace "johnson@gmail.com" with your email, "John" with your first name, "Miller" with your last name, and "test" with your desired password.

Technologies used: Mongodb, Express, node, bcrypt.
