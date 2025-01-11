export default function Main(props){
    return (
        <main className="main">
              <div className="image">  
                <img height="168px" src={props.img.src} alt= {props.img.alt}/>
            </div>
            <div className="content">
                <header className="entryheader">
                <i className="fa-solid fa-location-dot"></i>
                <div>{props.country}</div>
                <a className="link" href={props.googleMapsLink}>View on Google maps</a>
                </header>
                <h1>{props.title}</h1>
                <text>{props.dates}</text>
                <p>{props.text} </p>
            </div>
        </main>
    )
}
