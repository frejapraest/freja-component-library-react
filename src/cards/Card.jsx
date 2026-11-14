import "./cards.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

//when mounted add 2 elements as children, one title and one text

export default function Card({children}) {
    return (
        <div className="card">
            <div className="icon-container">
                <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" className="card-icon"/>
            </div>
            <div className="text-container">
                {children}
            </div>
        </div>
    )
}