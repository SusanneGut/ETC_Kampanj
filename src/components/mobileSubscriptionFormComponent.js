import React from "react"


const MobileSubscriptionFormComponent = ({className, prices}) => (
    
        prices.map((item)=>{
            
            return(
                <div className={className}>{JSON.stringify(item)}</div>
             )
        })

    
)
export default MobileSubscriptionFormComponent




