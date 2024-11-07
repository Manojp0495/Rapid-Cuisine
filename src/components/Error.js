import { useRouteError } from "react-router-dom"

const Error=()=>{
  const err=useRouteError();
  console.log(err);
  return(
    <div>
      <h1>OOp's</h1> 
        <h1>something went wromng!!</h1>
      <h1>{err.status}:{err.statusText} Error</h1>
    </div>
  )
}

export default  Error