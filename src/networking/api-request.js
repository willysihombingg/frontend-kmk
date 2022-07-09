import axios from "axios";
const apiURL = "https://tugasakhir-kmk.herokuapp.com";
export async function login(nim, password) {
  try {
    // console.log('API AXIOS')
    const response = await axios.post(`${apiURL}/api/v1/users/login`, {
      nim: nim,
      password: password,
    });
    return response;
    // console.log(response, 'Respon API')
  } catch (error) {
    console.log("login error message:", error.message);
    return error;
    // console.log('API ERROR', error)
  }
}

export async function register(
  name,
  nim,
  email,
  department,
  handphone,
  password,
  attachment,
  status
) {
  // const token = localStorage.getItem('token')
  try {
    // console.log('API AXIOS')
    const response = await axios.post(
      `${apiURL}/api/v1/users`,
      {
        name,
        nim,
        department,
        handphone,
        email,
        password,
        attachment,
        status,
      },
      {
        // headers: {
        //   token: token,
        // },
      }
    );
    return response;
    // console.log(response, 'Respon API')
  } catch (error) {
    return error;
    // console.log('API ERROR', error)
  }
}

export async function eventCreate(
  event_name,
  chairman,
  participant,
  handphone,
  title,
  place,
  date,
  attachment
) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `${apiURL}/api/v1/events`,
      {
        event_name,
        chairman,
        participant,
        handphone,
        title,
        place,
        date,
        attachment,
      },
      {
        headers: {
          token: token,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function letterCreate(formData) {
  console.log("formdata:", formData.get("attachment"));
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${apiURL}/api/v1/letters`, formData, {
      headers: {
        token: token,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    // console.log(error.message);
    return error;
  }
}

export async function getAllLetter() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${apiURL}/api/v1/letters`, {
      headers: {
        token: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getAllUser() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${apiURL}/api/v1/users`, {
      headers: {
        token: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getAllEvent() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${apiURL}/api/v1/events`, {
      headers: {
        token: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getEventDetail(_id) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${apiURL}/api/v1/events/details`, {
      params: {
        id: _id,
      },
      headers: {
        token: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getLetterDetail(_id) {
  console.log("id :", _id);
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${apiURL}/api/v1/letters/details`, {
      params: {
        id: _id,
      },
      headers: {
        token: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateEvent(
  _id,
  event_name,
  chairman,
  participant,
  handphone,
  title,
  place,
  date,
  attachment
) {
  // console.log("Chairman :", chairman);
  const token = localStorage.getItem("token");
  try {
    const response = await axios.patch(
      `${apiURL}/api/v1/events/`,
      {
        event_name: event_name,
        chairman: chairman,
        participant: participant,
        handphone: handphone,
        title: title,
        place: place,
        date: date,
        attachment: attachment,
      },
      {
        params: {
          id: _id,
        },
        headers: {
          token: token,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateLetter(
  _id,
  from,
  to,
  receiver,
  courier,
  letter_type,
  note,
  outgoing_date,
  entry_date,
  attachment
) {
  // console.log("Chairman :", chairman);
  const token = localStorage.getItem("token");
  try {
    const response = await axios.patch(
      `${apiURL}/api/v1/letters/`,
      {
        from: from,
        to: to,
        receiver: receiver,
        courier: courier,
        letter_type: letter_type,
        note: note,
        outgoing_date: outgoing_date,
        entry_date: entry_date,
        attachment: attachment,
      },
      {
        params: {
          id: _id,
        },
        headers: {
          token: token,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function deleteEvent(_id) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(`${apiURL}/api/v1/events`, {
      params: {
        id: _id,
      },
      headers: {
        token: token,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}
