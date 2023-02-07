import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { setSearchTerm, clearSearchTerm } from "../searchTerm/searchTermSlice";

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border-radius: 2px;
  box-shadow: 0px 0px 1px gray;
  position: sticky;
  top: 0px;
  width: 80%;
  background-color: #ecf0f1;
  text-align: center;
`;

const InputText = styled.input`
  font-size: 15px;
  padding: 5px;
  margin: 5px;
  background: transparent;
  border: none;
  border-radius: 3px;
  :focus {
    outline: none;
    border-bottom: 1px solid black;
    border-radius: 0;
  }
  ::placeholder {
    text-align: center;
  }
`;

function NavBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <Navbar>
      <InputText
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="What are you looking for?"
      />
    </Navbar>
  );
}

export default NavBar;
