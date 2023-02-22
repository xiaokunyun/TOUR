import { CONTENT_INFO } from '../content';
interface Props {
    menuName: string;
}
const Content = ({ menuName }: any) => {
    return <div className="content">
        <video className={menuName === 'Island' ? 'active' : ''} src="/assets/videos/island.mp4" autoPlay muted loop></video>
        <video className={menuName === 'Spring' ? 'active' : ''} src="/assets/videos/spring.mp4" autoPlay muted loop></video>
        <video className={menuName === 'Summer' ? 'active' : ''} src="/assets/videos/summer.mp4" autoPlay muted loop></video>
        <video className={menuName === 'Autumn' ? 'active' : ''} src="/assets/videos/autumn.mp4" autoPlay muted loop></video>
        <video className={menuName === 'Winter' ? 'active' : ''} src="/assets/videos/winter.mp4" autoPlay muted loop></video>
        <div className={`video-overlay video-overlay-${menuName}`}></div>
        <section className="text-description">
            {/* <h1>{CONTENT_INFO[menuName].h1}</h1> */}
            {/* <h2>{CONTENT_INFO[menuName].h2}</h2> */}
            {/* <p>{CONTENT_INFO[menuName].p} </p> */}
            <h1>Never Stop</h1>
            <h2>Explore the world</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus dolores sunt minima id dolorum placeat nemo atque, porro accusamus tempora praesentium! In modi voluptate magni laboriosam est, eveniet molestiae!</p>
            <a href="#">Expore</a>
        </section>
        
    </div>
}
export default Content