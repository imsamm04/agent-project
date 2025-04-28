import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  user: null,
  notifications: [],
  healthRecords: [],
  challenges: [],
  loading: false,
  error: null
};

// Action types
const ActionTypes = {
  SET_USER: 'SET_USER',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  SET_HEALTH_RECORDS: 'SET_HEALTH_RECORDS',
  SET_CHALLENGES: 'SET_CHALLENGES',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case ActionTypes.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    case ActionTypes.SET_HEALTH_RECORDS:
      return { ...state, healthRecords: action.payload };
    case ActionTypes.SET_CHALLENGES:
      return { ...state, challenges: action.payload };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
    actions: {
      setUser: (user) => dispatch({ type: ActionTypes.SET_USER, payload: user }),
      setNotifications: (notifications) => dispatch({ type: ActionTypes.SET_NOTIFICATIONS, payload: notifications }),
      setHealthRecords: (records) => dispatch({ type: ActionTypes.SET_HEALTH_RECORDS, payload: records }),
      setChallenges: (challenges) => dispatch({ type: ActionTypes.SET_CHALLENGES, payload: challenges }),
      setLoading: (loading) => dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
      setError: (error) => dispatch({ type: ActionTypes.SET_ERROR, payload: error }),
    }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext; 