// const AWS = require('aws-sdk');
const dynamoose = require('dynamoose');

// Must reference the table we are using
// Create a Schema 
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  occupation: String,
});

const peopleModel = dynamoose.model('people', peopleSchema);


exports.handler = async (event) => {
  console.log(event);
  
  let newPerson = {
    id: event.queryStringParameters.id,
    name: event.queryStringParameters.name,
    occupation: event.queryStringParameters.occupation,
  }
  let response = ({  statusCode: null, body: null });

  try{
    // perform the CRUD using our specified Schema
    let peopleRecords = await peopleModel.create(newPerson);
    console.log(peopleRecords)
    response.statusCode = 200;
    response.body = JSON.stringify(peopleRecords);
  } catch (err){
    console.log(err);
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('Couldn\'t create a people'));
  }

    return response;
};