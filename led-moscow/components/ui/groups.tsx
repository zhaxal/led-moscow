import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'

interface Props {
    group: string;
    desc: string;
}

const Groups = ({ group, desc }: Props) => {
    return (
        <Stack sx={{
            background: "#F2F2F2",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            minHeight: "36px",
            alignItems: "center",
        }}
            direction={"row"}
            spacing={"24px"}
            px={"1em"}
        >
            <Stack sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "25%"
            }}>
                <Typography sx={{
                    fontFamily: "Gotham Pro Bold",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "23px",
                    color: "black",
                }}>
                    {group}
                </Typography>
            </Stack>

            <Typography sx={{
                fontFamily: "Gotham Pro Light",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "23px",
                color: "black",
                width: "70%"
            }}>
                {desc}
            </Typography>
        </Stack>
    )
}

export default Groups