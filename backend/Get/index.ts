import { AzureFunction, Context, HttpRequest } from "@azure/functions"

class Message {
    constructor(_message: string) {
      this.message = _message
    }
    message: string
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    

    const hello = new Message("hi");

    context.res = {
        // status: 200, /* Defaults to 200 */
        "content-type": "application/json",
        body: JSON.stringify(hello)
    };

};

export default httpTrigger;