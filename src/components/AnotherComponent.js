const AnotherComponent = () => {
    const handleClick = () => {
        console.log("Clikou");
    }

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr></hr>
            <button onClick={() => console.log("Teste")}>Test</button>
        </div>
    )
}
export default AnotherComponent
