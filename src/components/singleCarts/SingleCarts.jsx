
function SingleCarts({cartDetail}) {
  return (
    <div>
           <div className="col shadow-sm g-0 border rounded-3 overflow-hidden mb-4 h-md-250 position-relative col-4">
        <div className="col-md-9 p-4 d-flex flex-column position-static">
          <h3 className="mb-0" style={{ maxHeight: "40px", overflow: "hidden" }}>
            {cartDetail.id}
          </h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text text-muted mb-auto" style={{ maxHeight: "40px", overflow: "hidden" }}>
            {cartDetail.date}
          </p>
          <br/>
          <p className="card-text text-muted mb-auto" style={{ maxHeight: "40px", overflow: "hidden" }}>
           product id: {cartDetail.products[0].productId}<br/>
           product quantity: {cartDetail.products.quantity}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleCarts
