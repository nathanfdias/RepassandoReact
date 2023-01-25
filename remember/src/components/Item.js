import PropTypes from "prop-types";

function Item({marca ,lançamento}) {
    return(
        <>
            <li>{marca} - {lançamento}</li>
            <p>x</p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lançamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'Marca Vazia',
    lançamento: 0,
}

export default Item;