import avatar from './images/avatar.png'
import ContactButton from './components/ContactButton'
import TopInfo from './components/TopInfo'
import About from './components/About'
import SocialMedia from './components/SocialMedia'

export default function App(){
    return(
        <div className='business-card'>
            <div className='container'>
                <img src={avatar}></img>
                <TopInfo/>
                <ContactButton/>
                <About/>
            </div>
            <SocialMedia/>
        </div>
        
    )
}