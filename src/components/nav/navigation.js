import styled from "styled-components";

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
  return (
    <Navbar>
      <InputText placeholder="What are you looking for?"></InputText>
    </Navbar>
  );
}

export default NavBar;
