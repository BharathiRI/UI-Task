// import {useLayoutEffect, useState} from "react";

// export const useScreenSize = (offset = 0) => {
//     const [isStick, setIsStick] = useState(false);
//     const [isMobile, setIsMobile] = useState(
//       screen.width >= 1024
//     );
//     const handleScroll = () => {
//       setIsStick( window.scrollY > offset );
//     };

//     console.log({scrollY:window.scrollY,offset:offset});

//     const handleWidth = () =>{
//       setIsMobile(screen.width>=1024)
//     }
//     useLayoutEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener("resize", handleWidth);
//         return(() => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener("resize", handleWidth);
//         });
//     });
//     return {isStick,isMobile};
// }

import { useEffect, useState } from 'react'

/**
 * 
 * @returns Current width and height of the screen
 */

export const useScreenSize = (): any => {
  const [matches, setMatches] = useState(screen.width)
  const [height, setHeight] = useState(document.body.scrollTop)

  console.log({ height: window.innerHeight })

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setMatches(screen.width)
    })
    window.addEventListener('scroll', (e: Event) => {
      console.log(window.innerHeight, document.body.scrollTop)
    })
    return () => {
      window.removeEventListener('resize', (e) => setMatches(screen.width))
      window.removeEventListener('scroll', (e: any) =>
        setHeight(window.innerHeight + e.target.documentElement.scrollTop)
      )
    }
  })
  return { matches, height }
}
