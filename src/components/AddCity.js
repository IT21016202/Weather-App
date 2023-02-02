import React from 'react'

export const AddCity = () => {
  return (
    <div className="input-group mb-3 add-city">
        <input type="text" className="form-control city-input" placeholder="Enter a city" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary city-input-btn" type="button">Add City</button>
        </div>
    </div>
  )
}
 
export default AddCity;