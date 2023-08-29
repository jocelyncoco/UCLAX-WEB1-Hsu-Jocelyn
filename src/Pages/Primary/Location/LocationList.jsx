import styled from "styled-components";

/* Data ---------------*/
import { LocationData } from "./LocationData";

/* Components ---------------*/
import LocationDetail from "./LocationDetail";

const LocationList = () => {
    return (
        <LocationListStyled className="LocationList">
            {LocationData.map((location) => {
                return <LocationDetail key={location.id} location={location} />;
            })}
        </LocationListStyled>
    );
};

export default LocationList;

const LocationListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1rem;
`;
