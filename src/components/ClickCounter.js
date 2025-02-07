import WithCounter from "./WithCounter";

const ClickCounter = (props) => {
// const [count, setCounter] = useState(0);
const{count, increment} = props;

    return(
        <div>
            <button onClick={increment}>Click Me</button>
            <h2>Count is : {count}</h2>
        </div>
    )
}

export default WithCounter(ClickCounter,10);