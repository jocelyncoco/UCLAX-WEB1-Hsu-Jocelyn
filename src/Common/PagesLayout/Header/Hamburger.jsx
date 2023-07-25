import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const hamburger = ({ toggleMenu }) => {
    return (
        <hamburgerStyled className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
        </hamburgerStyled>
    );
};

export default hamburger;

const hamburgerStyled = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 30px;
    color: white;

    cursor: pointer;
`;
