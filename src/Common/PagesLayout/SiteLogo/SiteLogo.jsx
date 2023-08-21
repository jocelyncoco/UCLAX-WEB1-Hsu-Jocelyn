import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./strawberry-farm-logo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Thacker Berry Farm Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #076a07;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
