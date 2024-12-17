

function NewVersionCard(Card:any) {
    return (
        function NewCard(props:{isActive:boolean, title:string, content:string}) {
            const cardStyle = {
                border: "1px solid red",
                opacity: props.isActive ? "1" : "0.5"
            }

            return (
                <div style={cardStyle}>
                    <Card title={props.title} content={props.content} />
               </div>
            )
        }
    );
}

export default NewVersionCard