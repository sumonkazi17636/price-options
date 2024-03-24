
import PropTypes from 'prop-types'
import { FaCheck } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <p className='flex items-center'>
            <FaCheck className='bg-green-500 mr-2'></FaCheck>
            {feature}</p>
    );
};
Feature.propTypes = {
    feature:PropTypes.string
}
export default Feature;