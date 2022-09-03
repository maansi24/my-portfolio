import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useWindowScroll, useWindowSize } from "react-use";

const StateContext = createContext<any>({
  activeSection: "home",
  setActiveSection: () => "",
  isMobile: false,
  currentColor: "orange",
  setColor: (color: string) => "",
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const { width } = useWindowSize();
  const { y } = useWindowScroll();

  const [shrink, setShrink] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>("#03C9D7");
  const [view, setView] = useState("home");

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  useEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  useEffect(() => {
    if (y > 20) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }, [y]);

  return (
    <StateContext.Provider
      value={{
        activeSection,
        setActiveSection,
        isMobile,
        currentColor,
        setColor,
        shrink,
        view,
        setView,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
