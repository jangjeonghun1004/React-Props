
interface card {
    id: number,
    name: string,
    age: number,
    isActive: boolean
}

const card4 = ({datas}:{datas:card[]}) => {
    return (
        <>
            <h1>Card 4</h1>
            <ul>
                {
                    datas.map(data => {
                        return(
                            <li key={data.id}>
                                {data.name} &nbsp;
                                {data.age} &nbsp;
                                {String(data.isActive)}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default card4