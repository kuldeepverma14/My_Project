import HocWithExtraProps from "./HocWithExtraProps"
import SimpleComponent from "./SimpleComponent"

const EnhancedComponent = HocWithExtraProps(SimpleComponent)
const WhereToUse = () => {


    return <>
        <EnhancedComponent />
    </>
}
export default WhereToUse