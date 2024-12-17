
type card = {
    name: string,
    count: number,
    isBoolean: boolean
}

function Card2(props:card) {
    return(
        <>
            <h1>Card 2</h1>
            <p>name = {props.name}</p>
            <p>count = {props.count}</p>
            <p>{`isBoolean = ${props.isBoolean}`}</p>
        </>
    );
}

export default Card2