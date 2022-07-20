const BrandList = (props) => {

    return (
        <ul className="brand-list">
            <li>Brand: {props.brandName}</li>
            <li>Item Name: {props.itemName}</li>
        </ul>
    )
}

export default BrandList