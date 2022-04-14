# aws-REST-app

A RESTful API application created with AWS DynamoDB, API Gateway, and Lambda functions

## UML

![UML](/assets/AWS-REST-App-URL.png)

## Links

- [Deployed API](https://wtwy2fy47h.execute-api.us-east-1.amazonaws.com/People-Production)

## Routes

- `GET` people
  - Request `/people`
  - `READ` all people from DynamoDB table
- `GET` person
  - Request `/people/id`
  - `READ` One person from DynamoDB table
- `POST` people
  - Request `/people?id=4&name=Kevin&occupation=Clerk`
  - `CREATE` a person to add to DynamoDB table
  - Respone
    - Status 200
    - Body:

 ```js
{
  "id": "4",
  "name": "Kevin",
  "occupation": "Clerk"
}
```

- `PUT` person
  - Request `/people/4?id=4&name=Kevin&occupation=unemployed`
  - `UPDATE` a person in the DynamoDB table
  - Respone
    - Status 200
    - Body:

```js
{
  "occupation": "unemployed",
  "id": "4",
  "name": "Kevin"
}
```

- `DELETE` person
  - Request `/people/4`
  - `DELETE` a person from the DynamoDB table
  - Respone
    - Status 200
    - Body: `no data`
