# Simple API

This is a simple API made with NodeJS and Express and hosted on Firebase
**URL:** https://simple-api-e3515.firebaseapp.com/sentence

## Usage

The API only handles a single POST request that takes in data from the requests body in JSON format.

### Example:

- Using tools like Postman, send a POST request to https://simple-api-e3515.firebaseapp.com/sentence
- Make sure that you have this header: - **Key:** Content-Type - **Value:** application/json
- In body of request to a test sentence as such:

```json
{
  "sentence": "test Deloitte Google Google Cloud"
}
```

**Result:**
The updated sentence will be in the body of the API response.

## Sample queries

Required: Postman free download (https://www.getpostman.com/)

Folder **Postman Tests** contains sample queries to test the API, just extract the JSON in Postman to run the queries.

Types of test queries:

- Single keyword test (all upper/lower case, starts with an upper case letter)
- Multiple different keywords in sentence

Edge case not considered: multiple same keywords (example: "Google GOOOGLE google", will only add symbol to the first "Google" keyword).
