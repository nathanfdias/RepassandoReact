import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" lançamento={1985}/>
                <Item marca="Fiat" lançamento={1964}/>
                <Item />
            </ul>
        </>
    )
}

export default List;