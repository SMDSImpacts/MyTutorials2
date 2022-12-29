const EventHandle = ()=> {
    const handle = ()=> {
        
        console.log("Button is clicked")
    }
    return <div>
        <p>Welcome</p>
        <button onClick={handle}>Click button</button>
    </div>
}
export default EventHandle;