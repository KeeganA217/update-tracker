import React, { useReducer } from "react";
import LogContext from "./logContext";
import axios from "axios";
import logReducer from "./logReducer";
import {
  ADD_LOGS,
  DELETE_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOGS,
  FILTER_LOGS,
  CLEAR_FILTER,
  LOGS_ERROR,
  GET_LOGS,
  CLEAR_LOGS,
} from "../Types";

const LogState = (props) => {
  const initialState = {
    logs: null,
    current: {},
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(logReducer, initialState);

  // Get Contacts
  const getLogs = async () => {
    try {
      const res = await axios.get("/api/issues");
      dispatch({
        type: GET_LOGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response,
      });
    }
  };

  // Add LOG
  const addLog = async (log) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/issues", log, config);
      dispatch({ type: ADD_LOGS, payload: res.data });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response,
      });
    }
  };
  // Delete LOG
  const deleteLog = async (id) => {
    try {
      await axios.delete(`/api/issues/${id}`);
      dispatch({ type: DELETE_LOGS, payload: id });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response,
      });
    }
  };
  // Clear LOGS
  const clearLogs = () => {
    dispatch({ type: CLEAR_LOGS });
  };
  // Set Current LOG
  const setCurrent = (log) => {
    dispatch({ type: SET_CURRENT, payload: log });
  };
  // Clear Current LOG
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update LOG
  const updateLog = async (log) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/issues/${log.id}`, log, config);
      dispatch({
        type: UPDATE_LOGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response,
      });
    }
  };
  // Filter LOGS
  const filterLogs = (text) => {
    dispatch({ type: FILTER_LOGS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <LogContext.Provider
      value={{
        logs: state.logs,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addLog,
        deleteLog,
        setCurrent,
        clearCurrent,
        updateLog,
        filterLogs,
        clearFilter,
        getLogs,
        clearLogs,
      }}
    >
      {props.children}
    </LogContext.Provider>
  );
};

export default LogState;
