import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Groups from './ui/groups'
import Header from './ui/header'

const Participants = () => {
    return (
        <Container maxWidth={"lg"} disableGutters sx={{ mt: "82px" }}>
            <Box>
                <Header text="УЧАСТНИКИ И ДИСТАНЦИЙ" />
            </Box>
            <Box
                sx={{
                    backgroundImage: "url(/images/backgrounds/participantsBg.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "550px",
                    position: "relative"
                }}
            >
                <Stack sx={{
                    height: "100%", width: "100%",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <Stack sx={{ width: "736px" }} spacing={"8px"}>
                        <Stack justifyContent={"center"} alignItems={"center"}>
                            <Typography sx={{ fontFamily: "Mossport", fontWeight: 400, fontSize: "36px", lineHeight: "36px", color: "white" }}>
                                50 М
                            </Typography>
                        </Stack>
                        <Groups group='1 группа' desc='школьники с 1-го по 2-ой класс' />
                        <Groups group='2 группа' desc='школьники с 3-го по 5-ый класс' />
                        <Stack justifyContent={"center"} alignItems={"center"}>
                            <Typography sx={{ fontFamily: "Mossport", fontWeight: 400, fontSize: "36px", lineHeight: "36px", color: "white" }}>
                                100 М
                            </Typography>
                        </Stack>
                        <Groups group='3 группа' desc='школьники с 6-го по 8-ой класс' />
                        <Groups group='4 группа' desc='школьники с 9-го по 11-ый класс' />
                        <Groups group='5 группа' desc='мужчины и женщины 1997-2004 гг.р.' />
                        <Groups group='6 группа' desc='мужчины и женщины 1996 г.р. и старше' />
                        <Stack justifyContent={"center"} alignItems={"center"}>
                            <Typography sx={{ fontFamily: "Gotham Pro Regular", fontWeight: 700, fontSize: "16px", lineHeight: "15px", color: "white" }}>
                                *девочки и мальчики, мужчины и женщины соревнуются отдельно
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
}

export default Participants