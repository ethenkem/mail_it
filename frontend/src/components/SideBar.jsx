import { Drawer } from '@mui/material'
import React from 'react'


function SideBar({ open, setOpenSideBar }) {
   return (
    <Drawer open={open} onClose={() => setOpenSideBar(false)}>
    </Drawer>
  )
}

export default SideBar
