import styled from "styled-components";

/* Components ---------------*/
import Address from "./Address";

const AddressList = ({ location }) => {
    return (
        <AddressListStyled className="AddressList">
            {location.address.map((address, idx) => {
                return <Address key={idx} address={address} />;
            })}
        </AddressListStyled>
    );
};

export default AddressList;

const AddressListStyled = styled.ul`
    padding-left: 20px;
    list-style-type: disc;
`;
