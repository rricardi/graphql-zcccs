# QraphQL
This repository serves to show a basic GraphQL application.

## Usage
To upload the application, simply run:
`node index.js`

After this, in your browser access this link:
`http://localhost:5000/user`


This application is integrated with GraphiQL and to run a query we execute the following command:

```
{
  user(id:2) {
    id,
    name,
    age
  }
}
```
