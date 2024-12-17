
const card1 = (props: {name:string, count:number, isBoolean:boolean}) => {
    return (
        <>
         <h1>Card 1</h1>
         <p>name = {props.name}</p>
         <p>count = {props.count}</p>
         <p>isBoolean = {String(props.isBoolean)}</p>
        </>
    );
}

export default card1;