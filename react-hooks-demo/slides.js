

setCount(count + 1); // will work
setCount(prevCount => prevCount + 1) // much better

const [val, setVal] = useState(function getInitialState(){
    const obj = JSON.parse(props.bigJsonData);
    return obj.initialValue;
})


useEffect(() => {
    if (code.value === 'SWE Rocks!') {
      setCode(c => ({...c, countCode: c.countCode + 1}));
    }
  }, [code]);


  