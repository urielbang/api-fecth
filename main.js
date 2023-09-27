// api
fetch("https://jsonplaceholder.typicode.com/todos") // request from api
  .then((res) => {
    // if the request is giving data
    console.log(res);
    console.log("yesss");
  })
  .catch((error) => {
    //else
    console.log(error);
    console.log("no ");
  });
