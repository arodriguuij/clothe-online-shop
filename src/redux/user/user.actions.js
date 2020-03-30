export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payload: user
});

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiartionDate");
  localStorage.removeItem("userId");
  return {
    type: "LOG_OUT"
  };
};

export const auth = response => {
  const expirationTime = new Date(
    new Date().getTime() + response.data.expiresIn * 1000
  );
  localStorage.setItem("token", response.data.idToken);
  localStorage.setItem("expiartionDate", expirationTime);
  localStorage.setItem("userId", response.data.localId);

  return {
    type: "AUTH_SUCCESS",
    payload: {
      token: response.data.token,
      userId: response.data.localId
    }
  };
};

export const tryLogin = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiartionDate");
    localStorage.removeItem("userId");
    return {
      type: "LOG_OUT"
    };
  } else {
    const expirationTime = new Date(localStorage.getItem("expiartionDate"));
    if (expirationTime > new Date()) {
      const userId = localStorage.getItem("userId");
      return {
        type: "AUTH_SUCCESS",
        payload: {
          token: token,
          userId: userId
        }
      };
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("expiartionDate");
      localStorage.removeItem("userId");
      return {
        type: "LOG_OUT"
      };
    }
  }
};
