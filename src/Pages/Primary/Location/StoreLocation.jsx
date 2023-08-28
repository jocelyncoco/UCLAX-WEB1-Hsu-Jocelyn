import styled from "styled-components";

/* Components ---------------*/
import AddressList from "./LocationDetail/Addresses/AddressList";

const StoreLocation = ({ location }) => {
    return (
        <StoreLocationStyled className="StoreLocation">
            <div className="hours">
                <b>Hours:</b>
                {location.hours}
            </div>
            <AddressList location={location} />
        </StoreLocationStyled>
    );
};

export default StoreLocation;

const StoreLocationStyled = styled.div`
    padding: 20px;
    font-size: 14px;
`;
