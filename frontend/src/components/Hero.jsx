import './Hero.css';


export default function Hero(){

    return(
        <div className='hero'>
            <h1 className='hero-title'>Peter Elliott</h1>
            <div className="hero-body">
                <div className="hero-left">
                    <h2>SOFTWARE DEVELOPER</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum iste consequuntur facilis ducimus obcaecati temporibus dolorem doloribus enim aliquid.</h3>
                </div>
                <div className="hero-right">
                    <img src='./profile-picture.jpg' alt="Profile photo" className='profile-pic'/>
                </div>
            </div>
           
        </div>
    )
}