import styled from "styled-components";

import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                HTML stands for hypertext markup language. It is the foundation
                of the web page. It creates the basic structure, marking up the
                content and layout of the web page design. Tags for visual
                hierarchy for headings, second header and content text. Readable
                to all browsers. CSS stands for cascading style sheet. It’s an
                upgrade from basic layout created from html. Just like its name,
                it stylizes the appearance of the website, and make the website
                more visually pleasing and modern. It targets various size for
                screens to make the web pages responsive. It can use for add
                size, weight, and adding color on fonts. Creating general style
                for the look and feel. Java script controls the behavior and
                adds interactivity to a web page. It handles the complex
                functions and features. If we want to script thing, java is what
                can get us there. The power house of interactive elements. It
                can be a slides show or scrolling down to a web page.
            </Essay>
            <Essay question="Q2: What is the difference between Git and Github?">
                Git is a free and open-source code made available to modify and
                use. It tracks changes via a distributed version control system.
                Git can track the state of different version of the project
                while being developed. While the project is being build, it
                needs a way to be track and documented to help to organized the
                work and keep track of all the changes being made. It can also
                branching feature requests and deploy the change. GitHub is a
                cloud place or platform to host your code, where git users can
                build, collaborated and share software together. GitHub uses Git
                underneath and you can manage your Git repositories or folders
                easily on its platform.
            </Essay>
            <Essay question="Q3: What is the difference between JQuery and React?">
                jQuery is a utility library that enables developers to build web
                apps using JavaScript. It's a lightweight JaveScript library, it
                includes different utilities, plugins for any kind of task. It
                runs exactly the same on almost all major browsers. Wrapping
                many lines of JavaScript code into methods within a single line
                of code. Write less, do more. React is an open source, flexible
                library that allows embedding HTML within JavaScript using JSX.
                React provides reusable library code, which cuts down on the
                development time and shorten the scope of errors. Scaling larger
                applications. It focused on user interfaces. Virtual DOM
                technology, helps reusable components and application state.
            </Essay>
            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                All websites require front-end and back-end development.
                Front-end development focuses on the visual aspects of a website
                — the part that users see and interact with directly. It
                includes the design, navigation menus, texts, images, video.
                Language uses for the frontend are html, CSS and JavaScript.
                Responsiveness and performance are the two main objectives of
                the front end. Tools and framework / libraries, React, Vue,
                Angular. Back-end development comprises a site’s structure,
                system, data, and logic. It’s the server side of the website.
                The portion of the software doesn’t not come in contact with the
                users. APIs, creating libraries, and working with system
                components without user interfaces or even systems of scientific
                programming. Database, storage, server apis, services, serving
                up the site, security. PHP, ASP, .Net, Python, Java.
            </Essay>
            <Essay question="Q5: What are the different ways we can link files/resources to our application?">
                Absolute linking: The global address of a resource. URL across.
                Doesn’t matter where you are located in the world, the link will
                be the same. (The entire URL) Root: Relative to the project
                root. Root relative link is not specific to a domain. Each one
                can have a different domain. (The folders within the URL, in
                between /) Document relative: are links that relative to the
                document you are writing.
            </Essay>
            <Essay question="Q6: What is the difference between jpg, gif, png and svg images?">
                Jpg / jpeg stands for joint photographic experts group. Jpg
                compression-lossy and lossless. Lossy raster files, when it’s
                compressed can degrade the image quality slightly. Proprietary,
                lossy compression with millions of colors. Best use for
                photography. Png stands for Portable Networks Graphics. It’s
                ideal for web graphics. It can be used for a logo, social media
                graphics, illustrations. Pngs are the good bet for maximum image
                quality. Pngs are raster graphic bitmap images. Png will be
                larger than jpgs. You can save pngs over and over without
                compromise the image quality. It also supports true
                transparency. Save as PNG-8 or PNG -24. Gif images stands for
                graphics interchange format, It’s best known to support
                animations. This bitmap format supports up to 8 bit/pexel, which
                limits the color format to 256. Supports transparency. Svg
                stands for scalable vector graphics. You can scale the size of
                svg images without any loss in quality, also supports a
                transparent background and animation. Svg files are
                code-a-series of mathematical equations that defines shape,
                colors, and size. They retain high quality no matter how much it
                was resized. Svg files are ideal for logo, icons, and simple
                line art. You will lost quality when the bitmap image is being
                use in the svg.
            </Essay>
            <Essay question="Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.">
                7. This is my answer
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
