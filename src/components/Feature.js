import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import { Fade } from 'react-reveal';

function Feature({ characterInfo, searchItem }) {
    const [characterFeature, setCharacterFeature] = useState([]);

    useEffect(() => {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${searchItem}?&ts=1&apikey=6cedf382495d1006cfe0541128191499&hash=c8d09d64ba046c68873bcbe72b6bd587`)
            .then((response) => {
                setCharacterFeature(response.data.data.results);
            }).catch((error) => {
                console.log(error);
            })
    }, [searchItem])

    return (
        <Features>
            {characterFeature.map((item) => {
                return (
                    <Fade bottom>
                        <Card sx={{ maxWidth: 245, maxHeight: 500, backgroundColor: '#292929c1', color: 'white' }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" height={40}>
                                        {item.name}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={!item.thumbnail.path.includes("image_not_available") ? (item.thumbnail.path + "." + item.thumbnail.extension) : "https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg"}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="white" height={60}>
                                        {item.description === "" ? "Description Not Available" : item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Fade>
                )
            })}
        </Features >
    )
}

export default Feature

const Features = styled.div`
    height: 500px;
    width: auto;
`
