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
                compression-lossy and lossless. Lossy raster files, when its
                compressed can degrade the image quality slightly. Proprietary,
                lossy compression with millions of colors. Best use for
                photography. Png stands for Portable Networks Graphics. Its
                ideal for web graphics. It can be used for a logo, social media
                graphics, illustrations. Pngs are the good bet for maximum image
                quality. Pngs are raster graphic bitmap images. Png will be
                larger than jpgs. You can save pngs over and over without
                compromise the image quality. It also supports true
                transparency. Save as PNG-8 or PNG -24. Gif images stands for
                graphics interchange format, Its best known to support
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
                7. Product Owner: Manage product roadmap and prioritize the
                backlog. They also define the product vision and manage
                stakeholders. They have the authority to make key decisions and
                in particular, are responsible for making sure the team is
                working on the right items. It is helpful for the product owner
                to be able to communicate effectively with stakeholders. Product
                Manager: A product manager is a professional role that is
                responsible for the development of products for an organization,
                known as the practice of product management. Product managers
                own the product strategy behind a product, specify its
                functional requirements, and manage feature releases. They
                produce vision, connects directly with stakeholders and
                customers. Business Analyst: to advise businesses on how to
                utilize Agile methodology best to achieve their desired
                outcomes. The main goal of an Agile Business Analyst is to solve
                business problems as and when they occur. While the rest of the
                Agile team is focused on producing new pieces of working
                software in every iteration or sprint, they are focused on the
                main goal of the entire project. Recognize the Business needs,
                analyze the domain, stock and groom the product catalog, help
                team understand the big picture. They identify ways to make the
                product better. Scrum Master: Remove obstacles to team progress,
                including scope creep, and support team. A Scrum Master employs
                the Scrum process, ensuring that all team members understand and
                adhere to the procedures and practices and removing any
                impediments. They help facilitate agile process–organize and
                unblock impediments. UX designer: Work with the product owner to
                come up with designs for the product. Main four roles are
                concept design, product design, design support and validation.
                UX Designer does customer research (and empathize), share
                insights from that research with the Product Team, identify
                customer needs and pain points, ideate to find solutions with
                the Product Team, prototype ideas, test them with real users,
                learn from mistakes, and then ship a product or a solution.
                Developer / Engineer: Works on prioritized work by the product
                owner in the sprint. Developers will build the product,
                translating comps and prototype to the app UI, and they are
                responsible for programming, testing, and debugging the product.
                QA / SDET: QA (Quality Assurance) professionals and SDETs are
                familiar with basic testing concepts. However, SDETs tend to
                have more technical programming expertise, while QA
                professionals have more experience with traditional testing
                practices. Both can write code, but SDETs know how to design and
                write complex testing software. SDETs are technical IT
                professionals who have strong backgrounds in both programming
                and software testing. They thoroughly understand software
                testing patterns, best practices and the application under test.
                An SDET could be a sort-of tech lead for a QA team. DevOps: it
                stands for development and operations. DevOps is an approach to
                software development that enables teams to build, test, and
                release software faster and more reliably by incorporating agile
                principles and practices, such as increased automation and
                improved collaboration between development and operations teams.
                The goal of DevOps is to help bring together developers who
                write application software and operations who run the software
                in production. Also, to build and maintain the infrastructure
                where it runs. DevOps replaces the old approach of development
                teams writing applications then throwing them over the wall to
                an operations team who deploys and manages the software with
                minimal visibility into how it was developed. In a DevOps
                environment, developers and operations teams work side by side
                throughout the entire process of developing, deploying, and
                managing applications. They handling architecture and software
                for deployment, IT, security for faster cycles of deployment and
                response from use.
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
