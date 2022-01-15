import React, { useEffect, useState } from 'react'
import style from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import Feature from './Feature';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Fade } from 'react-reveal';

function Body() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(60),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red'
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(6)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '22ch',
                '&:focus': {
                    width: '25ch',
                },
            },
        },
    }));

    const [characterData, setCharacterData] = useState([]);
    const [searchCharacter, setSearchCharacter] = useState(['spider-man']);

    let count = 0;
    let countComic = 0;
    let countChar = 0;

    useEffect(() => {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchCharacter}&orderBy=-modified&limit=30&ts=1&apikey=6cedf382495d1006cfe0541128191499&hash=c8d09d64ba046c68873bcbe72b6bd587`)
            .then((response) => {
                setCharacterData(response.data.data.results);
                setSearchCharacter(searchCharacter);
            }).catch((error) => {
                console.log(error);
            })
    }, [searchCharacter])

    return (
        <Container>
            <h1>Featured Characters</h1>
            <FeatureCharacter>
                <Feature searchItem={1009368} />
                <Feature searchItem={1016181} />
                <Feature searchItem={1011006} />
                <Feature searchItem={1009351} />
            </FeatureCharacter>
            <h1>Character Comics & Series</h1>
            <Box sx={{ flexGrow: 1, paddingTop: '20px' }}>
                <AppBar position="static" sx={{ backgroundColor: '#292929c1' }}>
                    <Toolbar>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder='Press Enter to Search...'
                                inputProps={{ 'aria-label': 'search' }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        setSearchCharacter(e.target.value)
                                    }
                                }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            {characterData.map((item) => {
                count++;
                countComic = 0;
                countChar = 0;
                if (count % 2 === 0) {
                    return (
                        <Fade top>
                            <CardInformation>
                                <Card sx={{ height: '600px', width: '445px', backgroundColor: '#292929c1', color: 'white', marginTop: '60px' }}>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'} paddingTop={2}>
                                            List of Comics
                                        </Typography>
                                        {item.comics.items.map((item) => {
                                            countComic++;
                                            if (countComic <= 3) {
                                                return (
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h4" component="div" fontSize={20} marginBottom={0.1} paddingLeft={2}>
                                                            {item.name}
                                                        </Typography>
                                                    </CardContent>
                                                )
                                            }
                                            return null;
                                        })
                                        }
                                    </CardActionArea>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'} paddingTop={2}>
                                            List of Series
                                        </Typography>
                                        {item.series.items.map((item) => {
                                            countChar++;
                                            if (countChar <= 3) {
                                                return (
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h4" component="div" fontSize={20} marginBottom={0.1} paddingLeft={2}>
                                                            {item.name}
                                                        </Typography>
                                                    </CardContent>
                                                )
                                            }
                                            return null;
                                        })
                                        }
                                    </CardActionArea>
                                </Card>

                                <Card sx={{ height: '600px', width: '445px', backgroundColor: '#292929c1', color: 'white', marginTop: '60px', marginLeft: '50px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="440"
                                            image={!item.thumbnail.path.includes("image_not_available") ? (item.thumbnail.path + "." + item.thumbnail.extension) : "https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg"}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="white">
                                                {item.description === "" ? "Description Not Available" : item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </CardInformation >
                        </Fade>
                    )
                }
                else {
                    return (
                        <Fade bottom>
                            <CardInformation>
                                <Card sx={{ height: '600px', width: '445px', backgroundColor: '#292929c1', color: 'white', marginTop: '60px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="440"
                                            image={!item.thumbnail.path.includes("image_not_available") ? (item.thumbnail.path + "." + item.thumbnail.extension) : "https://i.pinimg.com/originals/0e/8b/7d/0e8b7d2c53195177a326670609fcb7ea.jpg"}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="white">
                                                {item.description === "" ? "Description Not Available" : item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ height: '600px', width: '445px', backgroundColor: '#292929c1', color: 'white', marginTop: '60px', marginLeft: '50px' }}>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'} paddingTop={2}>
                                            List of Comics
                                        </Typography>
                                        {item.comics.items.map((item) => {
                                            countComic++;
                                            if (countComic <= 3) {
                                                return (
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h4" component="div" fontSize={20} marginBottom={0.1} paddingLeft={2}>
                                                            {item.name}
                                                        </Typography>
                                                    </CardContent>
                                                )
                                            }
                                            return null;
                                        })
                                        }
                                    </CardActionArea>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'} paddingTop={2}>
                                            List of Series
                                        </Typography>
                                        {item.series.items.map((item) => {
                                            countChar++;
                                            if (countChar <= 3) {
                                                return (
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h4" component="div" fontSize={20} marginBottom={0.1} paddingLeft={2}>
                                                            {item.name}
                                                        </Typography>
                                                    </CardContent>
                                                )
                                            }
                                            else if (item === 0) {
                                                return (
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h4" component="div" fontSize={20} marginBottom={0.1} paddingLeft={2}>
                                                            "None"
                                                        </Typography>
                                                    </CardContent>
                                                )
                                            }
                                            return null;
                                        })
                                        }
                                    </CardActionArea>
                                </Card>

                            </CardInformation >
                        </Fade>
                    )
                }
            })}
        </Container >
    )
}

export default Body

const Container = style.div`
    height: auto;
    width: 100vw;
    background-color: #181818;
    padding-top: 20px;

    h1 {
        color: #e6e6e6;
        padding-left: 60px;
    }
`

const FeatureCharacter = style.div`
    height: auto;
    width: 100vw;
    background-color: #181818;
    padding: 0px 1px;
    display: flex;
    justify-content: space-evenly;
`

const CardInformation = style.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;

    h1 {
        font-style: italic;
        font-weight: 100;
    }
`
