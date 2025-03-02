// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a software engineer, I build scalable solutions with a blend of creativity and technical expertise to drive impactful digital experiences."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock
							title="Developer at the Core"
							icon={['fat', 'chart-network']}
							copy="With expertise in both front-end and back-end development, I create seamless, user-centric solutions while continuously honing my skills to stay at the forefront of technological advancements."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock
							title="Software I love to work with"
							copy="With several years of experience in software development, I have honed my skills in crafting efficient, scalable, and user-friendly applications. From front-end interfaces to complex back-end systems, I have worked with a wide range of tools and technologies to deliver high-quality software solutions."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
						<BadgesBlock
							title="Technologies I love to build with"
							copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'figma', name: 'Figma', type: 'devicon' },
	{ key: 'vscode', name: 'VSCode', type: 'devicon' },
	{ key: 'jira', name: 'Jira', type: 'devicon' },
	{ key: 'mailbox', name: 'Postman', type: 'fas' },
	{ key: 'computer-mouse', name: 'Click Up', type: 'fas' },
]

const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: "google", name: "GA4/GTM", type: "devicon" },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'redis', name: 'Redis', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
	{ key: 'amazonwebservices', name: 'AWS', type: 'devicon' },
]