import React from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => <div>hello react!!</div>;

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
