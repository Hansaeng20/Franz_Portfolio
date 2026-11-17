import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'

export default function Contact() {
    return (
        <Section
            id="contact"
            index="06"
            label="Contact"
            title={
                <>
                    Let&rsquo;s build
                    <span className="italic text-sage"> something.</span>
                </>
            }
            intro="I'm currently looking for internship opportunities in backend development, DevOps, infrastructure and networking."
        >
            <Reveal>
                <a
                    href={`mailto:${profile.email}`}
                    className="link-underline font-serif text-2xl break-all text-ink hover:text-sage sm:text-4xl"
                >
                    {profile.email}
                </a>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-solid"
                    >
                        GitHub ↗
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-solid"
                    >
                        LinkedIn ↗
                    </a>
                </div>
            </Reveal>
        </Section>
    )
}
