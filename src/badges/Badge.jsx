import "./badges.css"
import classnames from "classnames"



// variant: square, pill
//color: red, yellow, green, blue, indigo, purple, red

export default function Badgdes({children, variant, color}) {


    let variantClass = variant && `badge-${variant}`
    let colorClass = color && `badge-${color}`
    const allClasses = classnames(colorClass, variantClass, "badge")

    return <div className={allClasses}>{children}</div>
}
