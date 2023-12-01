
import classes from "./DisplayContainer.module.css"

const DisplayContainer= (props)=>{
    return <div className={classes.displaycontainer}>
        {props.children}
    </div>
}

export default DisplayContainer;