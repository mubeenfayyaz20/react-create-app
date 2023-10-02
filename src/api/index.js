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

export const getEventDataID = async (eventID) => {
  try {
    const getData = await fetch(`${apiURL}events/${eventID}`);
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

    if (!postData.ok) {
      throw new Error("Something went wrong");
    }

    const jsonData = await postData.json();

    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const eventUpdateData = async (eventId, updatedData) => {
  try {
    const updateData = await fetch(`${apiURL}events/${eventId}`, {
      method: "PUT",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(updatedData),
    });
    const response = await updateData.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const eventDelete = async (eventId) => {
  try {
    debugger;
    const deleteData = await fetch(`${apiURL}events/${eventId}`, {
      method: "DELETE",
    });
    const response = await deleteData.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
