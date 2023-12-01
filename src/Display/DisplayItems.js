

const DisplayItems = (props) => {
    return (
        <div>
            {props.data.map((item, index) => (
                <div key={index}>
                    <h3>{item.name} {item.description} {item.price}</h3>
                    <p></p>
                </div>
            ))}
        </div>
    );
}

export default DisplayItems;
