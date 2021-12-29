
import { TaskAPI } from "../../api";
import { GET_TASKS, CREATE_TASK, DELETE_TASK, SET_MESSAGE, UPDATE_TASK } from "./task.types";



export const getTasks = () => (dispatch: any) => {
    return TaskAPI.getTasks().then(
      (response) => {
        dispatch({
          type: GET_TASKS,
          payload: response.data
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
};
  
export const addTask = (task: { name: string, tags: string[]}) => (dispatch: any) => {
  return TaskAPI.createTask(task).then(
    (response) => {
      dispatch({
        type: CREATE_TASK,
        payload: response.data
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
 
};

export const updateTask = (taskID: string, data: any) => (dispatch: any) => {
  return TaskAPI.updateTasks(taskID, data).then(
    (response) => {
      dispatch({
        type: UPDATE_TASK,
        payload: response.data
      });
      return Promise.resolve();
    }, (error) => {
      const message = 
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  )
}

export const deleteTask = (taskID: string) => (dispatch: any) => {
  return TaskAPI.deleteTask(taskID).then(
    (response) => {
      dispatch({
        type: DELETE_TASK,
        payload: response.data
      });
      return Promise.resolve();
    }, (error) => {
      const message = 
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    })
};