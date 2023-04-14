'use client'
import React,{useState,useEffect}from "react";

interface ChildOnlyProps {
  children: React.ReactNode;
}
const ClientOnly: React.FC<ChildOnlyProps> = ({ children }) => {
    const [hasMounted,setHasMounted]=useState(false)
    useEffect(() => {
      setHasMounted(true)
    }, [])
    if(!hasMounted){
        return null
    }
  return <>{children}</>;
};

export default ClientOnly;
