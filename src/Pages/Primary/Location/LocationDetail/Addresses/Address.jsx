import styled from "styled-components";

const Address = ({ address }) => {
    return <AddressStyled className="Address">{address}</AddressStyled>;
};

export default Address;

const AddressStyled = styled.li``;
