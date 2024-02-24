import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./components/usedimensions";
import { MenuToggle } from "./components/menutoggle";
import { Navigation } from "./components/navigation";
import  './index.scss'
import { Button } from "@mui/material";
import RaeesLoginComponent from "pages/login";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
const [hide,setHide] = React.useState(false)
console.log(isOpen,'raees')
  React.useEffect(()=>{if(isOpen)setHide(true)},[isOpen])
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      {/* <Navigation /> */}
      <RaeesLoginComponent/>
      <Button className="buttony" onClick={() => toggleOpen()} color="success" variant="contained">Login</Button>
      
      {/* <MenuToggle toggle={() => toggleOpen()} /> */}
    </motion.nav>
  );
};