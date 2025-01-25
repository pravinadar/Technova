import ProjectDetail from "@/components/ProjectDetail";
import Navbar from "@/components/Navbar";

export default function HomePage() {
    
        // Random data for the project details
        const projectData = {
            title: 'A New Play: the devil & i',
            media: [
                { type: 'image', url: 'https://placehold.co/600x600' },
                { type: 'video', url: 'https://cdn.pixabay.com/video/2025/01/07/251262_large.mp4' },
                { type: 'image', url: 'https://placehold.co/600x400' },
            ],
            budget: 7000,
            funded: 3615,
            contributors: 36,
            hoursLeft: 17,
        };

        return (
            <div>
                <ProjectDetail
                    title={projectData.title}
                    media={projectData.media}
                    budget={projectData.budget}
                    funded={projectData.funded}
                    contributors={projectData.contributors}
                    hoursLeft={projectData.hoursLeft}
                />
            </div>
        );
    
}