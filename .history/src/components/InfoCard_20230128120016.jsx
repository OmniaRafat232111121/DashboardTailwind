import React from 'react'
import CountUp from 'react-countup'
const InfoCard = (props) => {
    return (
       <div className={` mt-3 rounded-xl ${props.bgColor} bg-opacity-10 p-5  w-36    ${props.textColor}`}>
          
        
            <div className='text  flex justify-between   '>
        {props.icon}
                <p>
          <CountUp
            start={0}
            end={props.count}
            duration={props.count < 20 ? 1 : props.count < 200 ? 2 : 3}
            decimals={0}
                    />
                    +
                    </p>
            </div>
            {props.label}
           
          </div>
        
        
    
  )
}

export default InfoCard