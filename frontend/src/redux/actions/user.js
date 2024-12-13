import axios from "axios";
import { server } from "../../server";

/**
 * Action creator to load user data from the server.
 *
 * @returns {Function} - A Redux thunk function.
 */
export const loadUser = () => async (dispatch) => {
  try {
    // Dispatch action to indicate user loading is in progress
    dispatch({
      type: "LoadUserRequest",
    });

    // Make a GET request to fetch user data from the server
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });

    // Dispatch action with the user data upon successful retrieval
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    // Dispatch action if there's an error loading user data
    dispatch({
      type: "LoadUserFail",
      payload: error.response,
    });
  }
};
