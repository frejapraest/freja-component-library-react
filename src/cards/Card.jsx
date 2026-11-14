import "./cards.css"


//when mounted add 2 elements as children, one title and one text
// add icon as prop like: "<Card icon=<FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up"/>>"

export default function Card({children, icon}) {
    return (
        <div className="card">
            <div className="icon-container">
               {icon}
            </div>
            <div className="text-container">
                {children}
            </div>
        </div>
    )
}