const BrandList = (props) => {

    return (
        <div>
            {props.brands && props.brands.map((brand) => (
                <ul key={brand.id} className="brand-list">
                    <li>Brand: {brand.brand}</li>
                    <li>Item Name: {brand.name}</li>
                </ul> 
            ))}
        </div>
    
    )
}

export default BrandList