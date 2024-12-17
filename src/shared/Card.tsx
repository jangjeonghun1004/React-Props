
function Card(props:{title:string, content:string}) {
    return (
        <div>
            <h2>{props.title}</h2>
            <span>{props.content}</span>
        </div>
    );
}

export default Card