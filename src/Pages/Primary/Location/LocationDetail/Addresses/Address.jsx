import styled from "styled-components";

const address = ({ address }) => {
    return <addressStyled className="address">{address}</addressStyled>;
};

export default address;

const addressStyled = styled.li``;
