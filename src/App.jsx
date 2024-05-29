import { createContext, useState } from "react";
import Menu from "./components/Menyu/Menu";
import { CgCarousel } from "react-icons/cg";

export const CountContext = createContext();
export const SumContext = createContext();

const App = () => {
  const [count, setCount] = useState(true);
  const [sum, setSum] = useState(1);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <SumContext.Provider value={{ sum, setSum }}>
        <div>
          <Menu />
        </div>
      </SumContext.Provider>
    </CountContext.Provider>
  );
};

export default App;
