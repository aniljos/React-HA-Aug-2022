import React, { useId } from "react";

function EditCustomer() {

    const id = useId();

  return (
    <div className="col-6">
      <h3>Edit Customer</h3>
      <div className="form-group">
        <label for={id + "-name"}>Name</label>
        <input id={id + "-name"} className="form-control" type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label for={id + "-location"}>Location</label>
        <select id={id + "-location"} class="form-select">
          <option selected>Select a Location</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="3Pune">Pune</option>
        </select>
      </div>
    </div>
  );
}

export default React.memo(EditCustomer);
