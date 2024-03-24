import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        
            <li className='mr-10 hover:bg-blue-400 rounded-full px-6'>
                <a href={route.path}>{route.name}</a>
                </li>
        
    );
};
Link.propTypes = {
    route:PropTypes.object.isRequired
}
export default Link;