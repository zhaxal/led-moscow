import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

interface Props {
    dateFrom: string;
    dateTo: string;
    desc: string;
}

const Date = ({ dateFrom, dateTo, desc }: Props) => {
    return (
        <Stack sx={{
            background: "linear-gradient(301.38deg, #B81D1D -7.89%, #E7352E 151.15%)",
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
                    fontFamily: "Gotham Pro Light",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "23px",
                    color: "white",
                }}>
                    {dateFrom} - {dateTo}
                </Typography>
            </Stack>

            <Typography sx={{
                fontFamily: "Gotham Pro Light",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "23px",
                color: "white",
                width: "70%"
            }}>
                {desc}
            </Typography>
        </Stack>
    )
}

export default Date