import styled from "styled-components";

const RegisterDropDownWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 56px;
    padding: 16px 15px;
    background-color: #E7E5DE;
`;

const RegisterDropDownIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
`;

const DropdownItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #EDECE6;
    cursor: pointer;
    
    p + p {
        margin-left: 8px;
    }

    :hover {
        background-color: #E7E5DE;
      }
`;

export default{
    RegisterDropDownIcon,
    RegisterDropDownWrapper,
    DropdownItemWrapper,
}