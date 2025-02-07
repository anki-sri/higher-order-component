import { useState } from "react";

const WithCounter = (BaseComponent, incrementBy=1) => {

    return function EnhancedComponent(){
        const [count, setCounter] = useState(0);
        return <BaseComponent count={count} increment={()=>setCounter(count+incrementBy)}/>
    }
}

export default WithCounter;