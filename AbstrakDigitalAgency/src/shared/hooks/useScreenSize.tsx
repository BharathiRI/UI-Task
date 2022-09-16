import { useEffect, useState } from "react";

export const useScreenSize = (): any => {
    const [matches, setMatches] = useState(
        screen.width
      );
    const [height, setHeight] = useState(
      screen.height
    )
    
      useEffect(() => {
        window
          .addEventListener("resize", (e) => {
            setMatches(screen.width)
            setHeight(screen.height)
          },true);
        return () =>
          window
            .removeEventListener("resize", (e) => {
              setMatches(screen.width)
              setHeight(screen.height)
            },true);
      },[]);
      
      return { matches,height }
}
