import {useEffect, useState} from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAvobemediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);      
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <div className="app bg-deep-blue ">
      <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      {isAvobemediumScreens && (
        <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
      )}
      <Landing
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
