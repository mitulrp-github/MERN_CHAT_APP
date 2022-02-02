import React, {Suspense} from "react";
import "./App.css";
//import {Button} from "@chakra-ui/button";
//import HomePage from "./Pages/HomePage";
//import ChatPage from "./Pages/ChatPage";
import { Routes, Route } from "react-router-dom";
import ErrorFallback from "./components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import { Spinner } from "@chakra-ui/react";

//() => window.setTimeout( () => { window.location.reload(true) },1500)

const HomePage = React.lazy(() => import("./Pages/HomePage"));
const ChatPage = React.lazy(() => import("./Pages/ChatPage"));

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload(true)}
      >
        <Suspense
          fallback={
            <div style={{margin:"auto"}}>
              {" "}
              {
                <Spinner
                  thickness="9px"
                  speed="0.65s"
                  w={30}
                  h={30}
                  emptyColor="gray.200"
                  color="gray.500"
                  size="xl"
                />
              }{" "}
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chats" element={<ChatPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
