import React, { useState } from 'react';

const App = () => {

    const[num,setNum] = useState(0);

    const incNum = () =>{
        setNum ( num + 1);
    };

    const decNum = () => {
        setNum (num - 1);
    };

    return(
     <>
     
             <h1> {num} </h1>
             <div className='btn_div'>
             <button onClick={incNum}>Increm</button>
             <button onClick={decNum}>Decrem</button>
             </div>
    
     </>
    );
}
export default App;