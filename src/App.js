import React from "react";
import FlightSearchPage from "./views/pages/FlightSearchPage";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store";
import "./App.scss";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FlightSearchPage />
      </Provider>
    </div>
  );
}

export default App;
