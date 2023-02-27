const List = () => {
    const items = [{
        id: 1,
        name: "Matheus"
    },
    {
        id: 2,
        name: "Victor"
    },
    {
        id: 3,
        name: "Alberto"
    }
    ]
    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>{item.id} - {item.name}</p>
            ))}
        </div>
    )
}
export default List;
