import { NextPage } from "next"
interface props{
    buttonname: string
}
const SearchBar:NextPage<props> = (props) => {
  const {buttonname} = props
  return (
    <div className="d-flex flex-column text-center my-4">
      <div className="input-group justify-content-center">
        <input
          type="text"
          className="additem__container--input w-50 rounded-start"
          placeholder="   Search here"
        />
        <button className="btn btn-outline-dark ms-2">{buttonname}</button>
      </div>
    </div>
  );
};
export default SearchBar;
