import WithCounter from "./WithCounter";

const HoverCounter = (props) => {
// const [count, setCounter] = useState(0);
    const {count, increment} = props;
    return(
        <div>
            <button onMouseOver={increment}>Click Me</button>
            <h2>Count is : {count}</h2>
        </div>
    )
}

export default WithCounter(HoverCounter);