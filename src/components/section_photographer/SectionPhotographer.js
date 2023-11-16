import './SectionPhotographer.css';

export default function SectionPhotographer({photographer, tabIndex}) {
    const host = window.location.host;

    return (
        <section className="CardPhotographer">
            <div className="CardPhotographer_Container">
                <div className="CardPhotographer_Container_Img">
                    <a href={`http://${host}/photographer/${photographer.id}`} tabIndex={tabIndex + 2}>
                        <img className="CardPhotographer_Img" src={`http://${host}/images/photographers/Photographers-ID-Photos/${photographer.portrait}`} alt=""/>
                    </a>
                </div>
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
