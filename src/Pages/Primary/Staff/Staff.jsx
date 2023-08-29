import styled from "styled-components";
import ReactPlayer from "react-player";

/* Components ---------------*/
import Inset from "@/Common/PagesLayout/Inset";
import StaffList from "./StaffList";

const Staff = () => {
    return (
        <StaffStyled className="Staff">
            <Inset>
                <h1>Staff</h1>
                <ReactPlayer url="https://www.youtube.com/watch?v=ppDdjQug3n0" />
                <StaffList />
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div``;
