import styled from "styled-components";

/* Components ---------------*/
import Inset from "@/Common/PagesLayout/Inset";
import LocationList from "./LocationList/";

const Location = () => {
    return (
        <LocationStyled className="Location">
            <Inset>
                <h1>Location</h1>
                <LocationList />
            </Inset>
        </LocationStyled>
    );
};

export default Location;

const LocationStyled = styled.div``;
