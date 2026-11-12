import "./banner.css"
import classnames from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

//add eaither 1 or two p-tags as children
//staus: success, warning, error, neutral.



export default function Banner({children, status}) {
    let sizeClass = Array.isArray(children) ? "banner-" : "banner-single-line"
    let statusClass = `banner-${status}`
    const allClasses = classnames(sizeClass, statusClass, "banner")



    let icon 

    switch(status) {
        case "success": 
           icon = <FontAwesomeIcon icon="fa-solid fa-circle-check" />;
            break;
        case "warning": 
            icon = <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />;
            break;
        case "error":
            icon = <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />;
            break;
        case "neutral":
            icon = <FontAwesomeIcon icon="fa-solid fa-circle-info" />
            break;
        default:
            icon = <FontAwesomeIcon icon="fa-solid fa-circle-info" />;
    }



    return (
        <div className={allClasses}>
            <div className="icon-container">
                {icon}
            </div>
            <div className="banner-text-container">
               {children}     
            </div>
        </div>
    )
}