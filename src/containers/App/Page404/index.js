import { Box } from '@mui/system'
import React from 'react'
import { IMAGES } from '../../../assests'

function Page404() {
  return (
    <>
    <Box component={'img'}
    src = {IMAGES.Page404}
    alt = 'page404'
    sx={{
        mt:20,
        ml:15
    }}
    >

    </Box>
    </>
  )
}

export default Page404