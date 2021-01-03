import React from 'react';
import Container from '../../layout/Container/Container';
import Header from '../../layout/Header/Header';
import Menu from '../../layout/Menu/Menu';



const Dashboard =()=> {
    return <div className='row no-gutters'>
            <Header />
            <Menu />
            <Container />
           </div>
        
   
    
}
export default Dashboard;