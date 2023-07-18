import styled from "styled-components";

import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1:Explain the difference between HTML, CSS and JavaScript.">
                1. This is my answer
            </Essay>
            <Essay question="Q2:What is the difference between Git and Github?">
                2. This is my answer
            </Essay>
            <Essay question="Q3:What is the difference between JQuery and React?">
                3. This is my answer
            </Essay>
            <Essay question="Q4:What is the difference between a Front-End and Back-End Developer?">
                4. This is my answer
            </Essay>
            <Essay question="Q5:What are the different ways we can link files/resources to our application?">
                5. This is my answer
            </Essay>
            <Essay question="Q6:What is the difference between jpg, gif, png and svg images?">
                6. This is my answer
            </Essay>
            <Essay question="Q7:Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.">
                7. This is my answer
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
