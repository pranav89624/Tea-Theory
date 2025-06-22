import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { teaLists, mostLovedTeasLists } from '../../constants/index.js'

const Teas = () => {
 useGSAP(() => {
	const parallaxTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#tea',
		start: 'top 30%',
		end: 'bottom 80%',
		scrub: true,
	 }
	})
	
	parallaxTimeline
	 .from('#t-left-leaf', {
		x: -100, y: 100
	})
	 .from('#t-right-leaf', {
		x: 100, y: 100
	})
 })
 
 return (
	<section id="tea" className="noisy">
	 <img src="/images/tea-left-leaf.png" alt="l-leaf" id="t-left-leaf" />
	 <img src="/images/tea-right-leaf.png" alt="r-leaf" id="t-right-leaf" />
	 
	 <div className="list">
		<div className="popular">
		 <h2>Most popular teas:</h2>
		 
		 <ul>
			{teaLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="md:me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="loved">
		 <h2>Most loved teas:</h2>
		 
		 <ul>
			{mostLovedTeasLists.map(({ name, country, detail, price }) => (
			 <li key={name}>
				<div className="me-28">
				 <h3>{name}</h3>
				 <p>{country} | {detail}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
	 </div>
	</section>
 )
}

export default Teas