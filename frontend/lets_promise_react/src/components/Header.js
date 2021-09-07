import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

import MiniDrawer from './Drawer/MiniDrawer'

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    <MiniDrawer/>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
