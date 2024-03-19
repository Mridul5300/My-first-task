
import PropTypes from 'prop-types';
import { FaRegCircleCheck } from "react-icons/fa6";

const Priceoption = ({option}) => {
     const {name,price,features} =option;
     return (
          <div className='bg-amber-50 border-2 border-inherit p-4 py-4 flex-col rounded-xl shadow-lg'>
              <h2>
               <span className="text-4xl">{price}</span>
               <span className="text-3xl">/mon</span>
              </h2>
              <h3 className='text-2xl mt-2'>{name}</h3>
              <div className='pl-4 mt-2 flex-grow'>
                   {
                    features.map((feature, idx)=> 
                         <h2 className='flex gap-2' key={idx}><span className='py-2 text-green-500 font-bold'><FaRegCircleCheck></FaRegCircleCheck></span>
                    {feature}</h2>)
                   }
              </div>
              <button className='btn bg-green-500 w-full text-2xl mt-2'>Buy Now</button>
          </div>
     );
};

Priceoption.propTypes = {
     option:PropTypes.object
};

export default Priceoption;