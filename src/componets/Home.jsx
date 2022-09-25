import { Grid, Typography } from '@mui/material'
import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import xray from '../assests/xray.jpg';
import CT from '../assests/CT.jpg';
import MRI from '../assests/MRI.jpg';
import oosi from '../assests/oosi.jpg';
import thermography from '../assests/thermography.jpg'

import { bgcolor } from '@mui/system';

const Home = () => {
    return (
        <Grid sx={{ bgColor: "black", alignItems:"center"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} container>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={xray}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Xray
                        </Typography>
                        <Typography variant="body2" color="">
                            X-rays are a type of radiation called electromagnetic waves.
                            X-ray imaging creates pictures of the inside of your body.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Select</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* CT Grid */}
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={CT}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            CT
                        </Typography>
                        <Typography variant="body2">
                            A computerized tomography (CT) scan combines a series of X-ray images taken from
                            different angles around your body and uses computer
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Select</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* ------------------------ */}
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={MRI}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            MRI
                        </Typography>
                        <Typography variant="body2">
                            Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Select</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* ------------------------ */}

            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={oosi}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            MRI
                        </Typography>
                        <Typography variant="body2">
                            Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Select</Button>
                    </CardActions>
                </Card>
            </Grid>
                  {/* ------------------------ */}

                  <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 385, bgcolor: "#3C3C3C", color: "white" }}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={thermography}
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            MRI
                        </Typography>
                        <Typography variant="body2">
                            Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Select</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Home