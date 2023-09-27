// process.env use for get the api call in the variable
const apiURL = process.env.REACT_APP_API_URL;

export const getEventdata = async () => {
  try {
    const getData = await fetch(`${apiURL}events/`);
    const jsonData = await getData.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const eventPostData = async (data) => {
  try {
    const postData = await fetch(`${apiURL}events/`, {
      method: "POST",

      headers: new Headers({ "content-type": "application/json" }),

      body: JSON.stringify(data),
    });

    const jsonData = await postData.json();

    return jsonData;
  } catch (err) {
    console.log(err);
  }
};
