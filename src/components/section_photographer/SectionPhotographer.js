import './SectionPhotographer.css';

export default function SectionPhotographer({photographer}) {
    const host = window.location.host;

    return (
        <section className="CardPhotographer">
            <div className="CardPhotographer_Container">
                <a href={`http://${host}/photographer/${photographer.id}`} className="CardPhotographer_Container_Img">
                    <img className="CardPhotographer_Img" src={`http://${host}/images/photographers/Photographers-ID-Photos/${photographer.portrait}`} alt=""/>
                </a>
                <div className="CardPhotographer_Name">{photographer.name}</div>
                <div className="CardPhotographer_Location">
                    <div>{photographer.city},</div>
                    <div>{photographer.country}</div>
                </div>
                <div className="CardPhotographer_TagLine">{photographer.tagline}</div>
                <div className="CardPhotographer_Price">{photographer.price}€/Jour</div>
            </div>
        </section>
    )
}
