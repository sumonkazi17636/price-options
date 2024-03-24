
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {price,name,features} = option
    
    return (
        <div className='bg-blue-500 p-4  rounded-md flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/month</span>
                
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature,index) =><Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-green-400 w-full rounded-lg mt-10 p-2 font-bold hover:bg-green-900'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option:PropTypes.object.isRequired
}
export default PriceOption;