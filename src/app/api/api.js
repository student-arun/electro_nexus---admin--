import {RouteApi} from "../Routes/RoutesApi";


// Signup Api

export const signupApi = async (signupData) => {
    const res = await fetch (`${API_BASE_URL}${RouteApi.signup}`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(signupData),
    });
    const resData = await res.json();
    return resData;
};

// Login Api
export const loginApi = async (loginData) => {
    try {
      const res = await fetch(`${API_BASE_URL}${RouteApi.login}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const resData = await res.json();
      return resData;
    } catch (err) {
      console.error(err);
    }
  };