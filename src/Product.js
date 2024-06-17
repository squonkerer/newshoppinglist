function Product({product, id, deleteProduct, toggleChecked}) {
    let rowStyleClass = ""
    if (product.isInBasket) {
        rowStyleClass = "inBasket"
    }

    const deleteClicked = () => {
        console.log('delete Clicked ' + id)
        deleteProduct (id) 
    }



    return (
        <div className={"row " + rowStyleClass}>
            <div className="col-1">
                <input
                    type="checkbox"
                    defaultChecked = {product.isInBasket}
                    onChange={() => toggleChecked(id)}
                />
            </div>
            <div className="col-8 col-lg-4">
                {product.description}
            </div>
            <div className="col-2">
                {product.unit}
            </div>
            <div className="col-2">
                {product.amount}
            </div>
            <div className="col-2">
                <button onClick={deleteClicked} className="btn"><i className="fa fa-trash"></i></button>
            </div>
        </div>
    )
}

export default Product