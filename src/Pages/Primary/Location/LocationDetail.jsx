import styled from "styled-components";

/* Components ---------------*/
import StoreLocation from "./StoreLocation";

const LocationDetail = ({ location }) => {
    return (
        <LocationDetailStyled className="LocationDetail">
            <img src={location.image} alt={location.name} />
            <h3>{location.city}</h3>
            <StoreLocation location={location} />
        </LocationDetailStyled>
    );
};

export default LocationDetail;

const LocationDetailStyled = styled.div`
    border: solid 1px red;
    padding: 10px;
    margin: 10px;

    background-color: white;

    img {
        width: 100%;
        display: block;
    }

    h3 {
        font-size: 20px;
        color: white;
        background-color: #076a3c;
        margin: 0px;
        padding: 5px 10px;
    }
`;
