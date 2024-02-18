import { StatusBar } from "react-native";
import { Home } from "./src/screens";

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Home />
    </>
  );
};

export default App;
