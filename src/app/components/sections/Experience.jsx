import experiences from "../../data/Experience";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-32 bg-transparent"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <p className="uppercase tracking-[5px] text-blue-400">
                        EXPERIENCE
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Professional Journey
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
                        Building enterprise AI systems, intelligent automation,
                        computer vision applications, and research-driven
                        machine learning solutions.
                    </p>

                </div>

                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.company}
                        experience={experience}
                    />
                ))}

            </div>
        </section>
    );
}