import React, {useState} from 'react'

function UseStateDemo() {
    const counters = [
        {counterName:'Allen', counterVal:'0'},
        {counterName:'Bob', counterVal:'9'},
        {counterName:'Connor', counterVal:'7'},
        {counterName:'Dude', counterVal:'2'},
    ]
  return (
    <div>
        <h1>useState Hook</h1>
        <DelayedCounter />
        {counters.map((cnt, index) => <Counter name={cnt.counterName} initial={cnt.counterVal} key={index}/>)}
    </div>
  )
}

//https://dmitripavlutin.com/react-usestate-hook-guide/#42-stale-state
function DelayedCounter(){
    const [count, setCount] = useState(0);
    const decrement = () => {
        setTimeout(function delay(){
            // setCount(count - 1) // causes issues
            setCount(strawberry => strawberry - 1)
        }, 3000);
    } 
    const increment = () => {
        setTimeout(function delay(){
            // setCount(count + 1) // causes issues
            setCount(prevCount => prevCount + 1)
            // setCount(100)
        }, 3000);
    } 
    return (
        <>
            <button onClick={decrement}>Delayed -</button>
                <span>{count}</span>
            <button onClick={increment}>Delayed +</button>
            <br></br>
            <br></br>
            <br></br>
        </>
    )

}
function Counter({name='CounterName', initial=0}){
    const [count, setCount] = useState(parseInt(initial));
    const decrement = () => setCount(count-1) //one way
    const increment = () => {
        setCount(count + 1) //better way
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={decrement}>-</button>
                <span>{count}</span>
            <button onClick={increment}>+</button>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default UseStateDemo