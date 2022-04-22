import type { ComponentType } from "preact";

type AppProps = {
  Component: ComponentType;
};

function App({ Component }: AppProps) {
  return <Component />;
}

App.displayName = "VitebookApp";

export default App;
