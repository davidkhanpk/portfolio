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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
				/>
				<section className={about.content}>
					<div className={about.image}>
						{/* <div className={about.image.area}></div> */}
						<Image src="/img/layout.jpg" width={600} height={800}/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Soft Skills That Drive Success"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Beyond my technical expertise as a developer with 7 years of experience, I bring strong problem-solving, leadership, and adaptability skills—refined through years of working on complex projects, mentoring teams, and collaborating with cross-functional stakeholders. My ability to manage time effectively and juggle multiple priorities has been instrumental in delivering high-quality solutions. Outside of coding, I enjoy staying engaged with the tech community, continuously learning new technologies, and exploring creative problem-solving approaches. I am confident in my ability to contribute passion, innovation, and value to any development project."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of development is architecting scalable and efficient solutions. From designing robust backend systems to optimizing frontend performance—I enjoy working across the full stack to create seamless and impactful user experiences."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]