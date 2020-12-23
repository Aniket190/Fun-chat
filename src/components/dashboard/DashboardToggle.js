import React from 'react'
import { Button, Icon,Drawer } from 'rsuite'
import { useModalState,useMediaQuery } from '../../misc/custom-hooks.js/useModalState'
import Dashboard from '.';

const DashboardToggle = () => {
     
    const {isOpen,open,close} = useModalState()

    const is992px = useMediaQuery('(max-width: 992px)')
    console.log(isOpen)
    return (
       <>
         <Button block color="blue" onClick={open}>
             <Icon icon="dashboard"/>  Dashboard
         </Button>
         <Drawer full={is992px} show={isOpen} onHide={close}    placement="left">
           <Dashboard />
       </Drawer>
       </>
    )
}


export default DashboardToggle
