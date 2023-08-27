/* Components --------------------*/
import LocationData from "./Location/LocationList";

const Location = ({ City }) => {
    return (
        <StaffBioStyled className="StaffBio">
            <div className="year">
                <b>Address:</b> {City.Address}
            </div>
            <AccoladeList member={member} />
        </StaffBioStyled>
    );
};

export default StaffBio;

const StaffBioStyled = styled.div`
    padding: 20px;
    font-size: 14px;
`;
