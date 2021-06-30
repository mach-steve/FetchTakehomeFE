
// Function retrieves JSON data from web and returns JS Array of entry objects
const getAllRecords = async () => {
    let response = await fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json") // Gets JSON from web
    let strResponse = await response.json() //Turns JSON into array of objects
    return strResponse
}

export {
    getAllRecords
}