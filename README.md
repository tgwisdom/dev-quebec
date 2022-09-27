# Back Row Heros :sunglasses:

fall 2022 spin up v3.0

This application was built using an angular framework.

## What is Angular?

<img src="https://www.ngdevelop.tech/wp-content/uploads/2017/12/Angular_Architecture.png" alt="Angular Diagram" style="height: 250px; width:300px;"/>

Angular Is a framework used to aid developers in the creation of single page client applications.

As the Image above shows the client interacts with the template and can trigger events that will activate other services on the server.

In our example we use a mongoDB via atlas as well as EJS to perform CRUD operations.
Using code such as get, post, put, and delete.

```javascript
app.post("/submit", async (req, res) => {
  const response = await UsersUtil.saveUser(req.body);

  if (!response) console.error(response);

  res.redirect("/");
});
```

More Information on modules can be found in the bottom link of our application!

# View Our Story Card!

[Find out more here](https://gist.github.com/tgwisdom/a3ed88718e4b0d9567435fa448f34730 "Our Gist!")
