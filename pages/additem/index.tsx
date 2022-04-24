import { Fragment } from "react";

const AddItem = (): JSX.Element => {
    return(
       <Fragment>
          <h2 className="additem__container--title">Add Item</h2>
          <input type="text" className="additem__container--input" placeholder="Item name here"/>
       </Fragment>
    )
}
export default AddItem;