import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function DialogsIcon(props: SvgProps & { isActive?: boolean }) {



   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width={24}
         height={24}
         viewBox="0 0 20 20"
         fill={props.isActive ? "#C5EAFF" : "none"}

         {...props}
      >
         <Path
            d="M19 9.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.379 8.379 0 01-3.8-.9L1 19l1.9-5.7A8.38 8.38 0 012 9.5a8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke={props.isActive ? "#3CB8FF" : "#000"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   )
}

export default DialogsIcon
