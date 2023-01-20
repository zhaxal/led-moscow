import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    onClick: () => void
}


const RegBtn = ({ onClick }: Props) => {
    const [isHover, setHover] = useState<boolean>(false);


    return (
        <Stack sx={{
            backgroundImage: "url(/images/backgrounds/btnBg.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "95px",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
        }}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Stack sx={{ minHeight: "60px", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Mossport", fontSize: "36px", lineHeight: "36px", color: "white", textShadow: isHover ? "0px 0px 6px rgba(255, 255, 255, 0.5)" : "none" }}>ЗАРЕГИСТРИРОВАТЬСЯ</Typography>
            </Stack>
        </Stack >
    )
}

export default RegBtn