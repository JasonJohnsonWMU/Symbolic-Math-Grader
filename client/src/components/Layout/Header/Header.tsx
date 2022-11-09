import TopNavBar from "../../Navigation/TopNavBar/TopNavBar";
import { useState } from "react";
import SideNavBar from "../../Navigation/SideNavBar/SideNavBar";

function Header() {
  const [isSideNavBarOpen, setIsSideNavBarOpen] = useState(false);

  // TODO: if there are global notifications or an accept cookies banner type thing, put it here
  return (
    <>
      <TopNavBar
        setIsSideNavBarOpen={setIsSideNavBarOpen}
        isSideNavBarOpen={isSideNavBarOpen}
      />
      <SideNavBar isOpen={isSideNavBarOpen} setIsOpen={setIsSideNavBarOpen} />
    </>
  );
}

export default Header;
