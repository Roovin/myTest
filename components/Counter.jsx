// import React, {useEffect} from 'react'
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// export default function Counter({data}) {
    
//  const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   return (
//     <section className="counter bg-[#001f3d]">
//         <div className="container">
//             <div className="itemWrapper w-[calc(100%+40px)] ml-[-20px] max-md:flex-wrap max-md:w-[calc(100%+20px)] max-md:ml-[-10px] max-sm:w-full max-sm:ml-0 flex" data-aos="fade-up">
//                 {
//                     data?.map((item, i) => {
//                         return (
//                             <div className="item bg-[#003366] w-[calc(33.33%-20px)] p-[20px] mx-[20px] max-md:w-[calc(50%-20px)] max-md:mx-[10px] max-md:last:mt-[20px] max-sm:w-full max-sm:mx-0 max-sm:mb-[20px] max-sm:last:mt-0 max-md:last:mb-0 rounded-[10px] text-center">
//                                 {/* <h2 className='text-white !font-[600]'>{item?.count}<span>{item?.sing}</span></h2> */}
//                                 {inView && <h2>
//                                     <CountUp className='text-white !font-[600]' end={item?.count} duration={2.5} />
//                                     {item?.count}<span>{item?.sing}</span>
//                                 </h2> } 
//                                 <h3 className='text-white'>{item?.title}</h3>
//                                 <p className='text-white mt-[10px]'>{item?.description}</p>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     </section>
//   )
// }

import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ count, sing, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="item bg-[#003366] w-[calc(33.33%-20px)] p-[20px] mx-[20px] max-md:w-[calc(50%-20px)] max-md:mx-[10px] max-md:last:mt-[20px] max-sm:w-full max-sm:mx-0 max-sm:mb-[20px] max-sm:last:mt-0 max-md:last:mb-0 rounded-[10px] text-center"
    >
        {count && 
            <h2 className="text-white !font-[600]">
                {inView ? <CountUp end={count} duration={3.5} /> : 0}
                <span>{sing}</span>
            </h2>
        }
      <h3 className="text-white">{title}</h3>
      <p className="text-white mt-[10px]">{description}</p>
    </div>
  );
};

export default function Counter({ data }) {
  return (
    <section className="counter bg-[#001f3d]">
      <div className="container">
        <div className="itemWrapper w-[calc(100%+40px)] ml-[-20px] max-md:flex-wrap max-md:w-[calc(100%+20px)] max-md:ml-[-10px] max-sm:w-full max-sm:ml-0 flex" data-aos="fade-up">
          {data?.map((item, i) => (
            <CounterItem
              key={i}
              count={item?.count}
              sing={item?.sing}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

