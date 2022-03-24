import {
  SIGN_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "../actionstypes/authtypes";
import axios from "axios"

export const signUp = (newUser) => async (dispatch) => {
  dispatch({ type: SIGN_UP });

  try {
    const response = await axios.post("/auth/register", newUser);

    localStorage.setItem("token", response.data.token);

    dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILED, payload: error.response.data });
  }
};