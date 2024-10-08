import React from 'react'
import cssStyle from "./nested.module.css"
console.log(cssStyle,"CSS-Style")


const Nested = () => {
  return (
  
  <body>
    <div>
       <h1 className={cssStyle.n}>Hello I'm Nested Page</h1>

    </div>
    

  </body>
  )
}

export default Nested
