import React from "react";

////// react functional componenet: function which is react element  called functional componenet

const Title = () => <h1>Nmastey React functional componenet</h1>
///component composition: one under another
const HeaderCopmponent1 = () =>{
    <Title/>
    return <h1>this is namserty js</h1>
    // <h1 className="heading">this is another way to write the class</h1>
    
}
//we can use normal function but industry standard use arrow functions
const HeaderCopmponent13 = function(){
    return(
        <h1 className="head1">namstey react normal function in palcee of aarrow function and it is working fine</h1>
    )
}



///both function same
const fn = () => true // 

const fn1 = () =>{
    return true
}


root.render(<HeaderCopmponent1/>)
////////////////////

// coponent composition: containg two component one under another

