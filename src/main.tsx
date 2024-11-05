import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "jotai";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Suspense
        fallback={
          <span className="w-screen h-screen flex items-center justify-center">
            Loading...
          </span>
        }
      >
        <App />
      </Suspense>
    </Provider>
  </StrictMode>
);
