import ProjectDetail from "@/components/ProjectDetail";
import ProjectDiscussion from "@/components/ProjectDiscussion";
import ProjectDetail2 from "@/components/ProjectDetails2";
import Navbar from "@/components/Navbar";

export default function HomePage() {

    // Random data for the project details
    const projectData = {
        title: 'Save the Forests Initiative',
        media: [
            { type: 'image', url: 'https://example.com/image1.jpg' },
            { type: 'image', url: 'https://example.com/image2.jpg' },
            { type: 'video', url: 'https://example.com/video1.mp4' },
        ],
        budget: 50000,
        funded: 20000,
        contributors: 150,
        hoursLeft: 72,
        description: 'This initiative aims to protect endangered forests by purchasing land and implementing sustainable management practices.',
        faq: [
            { question: 'What will the funds be used for?', answer: 'Funds will be used for land acquisition and sustainable management.' },
            { question: 'How can I contribute?', answer: 'You can contribute by donating or volunteering for our programs.' },
        ],
        updates: 'We have successfully acquired 50 acres of forest land and are working on planting native species.',
        comments: [
            'This is such a great initiative!',
            'How can I volunteer to help?',
            'Excited to see the progress on this project!'
        ],
    };

    return (
        <div>
            <Navbar />
            {/* <ProjectDetail
                    title={projectData.title}
                    media={projectData.media}
                    budget={projectData.budget}
                    funded={projectData.funded}
                    contributors={projectData.contributors}
                    hoursLeft={projectData.hoursLeft}
                />
                <ProjectDiscussion
                
                    description= "This is the description of the project."
                    faq= {[
                        { question: "What is this project about?", answer: "This project aims to create something amazing." },
                        { question: "How can I support it?", answer: "You can support by backing the project or sharing it with others." },
                    ]}
                    updates= "No updates yet."
                    comments= {["Great project!", "Looking forward to seeing more."]}
                /> */}

            <ProjectDetail2 {...projectData} />


        </div>
    );

}