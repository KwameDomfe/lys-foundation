import propTypes from 'prop-types'

function Feature(props) {
        
    const { desc, value } = props
    
    return (
        <div className="flex flex-column items-center 
            w11-00 h11-00
            bg-secondary
            black-20
            ba bw3 br-100"
        >
            <h2 className="f3-00 mt1-00 gold">
                {value}<sup className="f2-50">+</sup>
            </h2>
            <h2 className="white-90">
                {desc}
            </h2>
        </div>
    )
}

Feature.defaultProps = {
    desc :'Default Description' ,
    value :'600'
}

Feature.propTypes = {
    desc : propTypes.string,
    value : propTypes.string
}
export default Feature
