const app = require('express')();

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => res.send({ 
  message: 'Welcome. That node application is running inside a docker container'
}));

app.listen(PORT, console.log(`server running in localhost:${PORT}`));