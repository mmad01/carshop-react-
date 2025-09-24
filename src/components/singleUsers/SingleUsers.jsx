
function SingleUsers({userDetail}) {
  return (
    <div>
           <div className="row shadow-sm g-0 border rounded-3 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div className="col-md-9 p-4 d-flex flex-column position-static">
          <h3 className="mb-0" style={{ maxHeight: "40px", overflow: "hidden" }}>
            {userDetail.city}
          </h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text text-muted mb-auto" style={{ maxHeight: "40px", overflow: "hidden" }}>
            {userDetail.street}
          </p>
          <br/>
          <p className="card-text text-muted mb-auto" style={{ maxHeight: "40px", overflow: "hidden" }}>
           Number : {userDetail.number}<br/>
           zip code: {userDetail.zipcode}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleUsers
