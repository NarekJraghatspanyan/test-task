import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TransparentButton from '../../../components/buttons/TransparentButton';
import AddIcon from '@mui/icons-material/Add';

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


function Index() {
    return (
        <div className="my-profile">
            <DrawerHeader className="header-title">
                <h3>My Profile</h3>
            </DrawerHeader>
            <Box className="box-border"
                 noValidate
                 autoComplete="off"
                 sx={{mb: '20px'}}
                 id="general-info"
            >
                <div className="box-col-1">
                    <h4 className="card-title">General Info</h4>
                    <div className="my-profile-info-col">
                        <div>
                            <TextField id="standard-basic" label="First Name" defaultValue="Brooklyn"
                                       variant="standard" sx={{
                                '& .MuiInput-input': {width: '223px'},
                            }}/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Last Name" defaultValue="Simmons" variant="standard"
                                       sx={{
                                           '& .MuiInput-input': {width: '223px'},
                                       }}/>
                        </div>
                        <div>
                            <TextField
                                id="date"
                                label="Date of birth"
                                type="date"
                                defaultValue="01.01.1990"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Email" placeholder="b.simmons@mail.com"
                                       variant="standard" sx={{
                                '& .MuiInput-input': {width: '345px'},
                            }}/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Personal Email"
                                       defaultValue="brooklyn.simmons@mail.com" variant="standard" InputProps={{
                                readOnly: true,
                            }} sx={{
                                '& .MuiInput-input': {width: '345px'},
                            }}/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Mobile Phone" variant="standard" sx={{
                                '& .MuiInput-input': {width: '265px'},
                            }}/>
                        </div>
                        <div>
                            <TextField
                                id="date"
                                label="Start Date"
                                type="date"
                                defaultValue="01.01.1990"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                id="standard-number"
                                label="Absences"
                                type="number"
                                defaultValue="24"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '108px'},
                                }}
                            />
                        </div>
                        <div>
                            <FormControlLabel control={<Checkbox defaultChecked/>} label="Core team member"/>
                        </div>
                    </div>
                </div>
                <div className="box-col-2">
                    <h4 className="card-title">My accounts</h4>
                    <div className="my-profile-account-col">
                        <div>
                            <TextField id="standard-basic" label="Slack" placeholder="Enter your slack user name"
                                       variant="standard" sx={{
                                '& .MuiInput-input': {width: '345px'},
                            }} />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="GitHub" placeholder="Enter your github user name"
                                       variant="standard" sx={{
                                '& .MuiInput-input': {width: '345px'},
                            }} />
                        </div>
                    </div>
                </div>
            </Box>
            <Box className="box-border"
                 noValidate
                 autoComplete="off"
                 id="work-logs"
            >
                <div className="box-col-3">
                    <h4 className="card-title">Work Logs</h4>
                    <div className="my-profile-work-log-col">
                        <div>
                        <p>Sunday</p>
                           <TextField
                               id="time"
                               label="start/ end time"
                               type="time"
                               variant="standard"
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               sx={{
                                   '& .MuiInput-input': {width: '223px'},
                               }}
                           />
                           <TransparentButton transparentButton={<AddIcon />}/>
                       </div>
                        <div>
                            <p>Monday</p>
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TransparentButton transparentButton={<AddIcon />}/>
                        </div>
                        <div>
                            <p>Tuesday</p>
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TransparentButton transparentButton={<AddIcon />}/>
                        </div>
                        <div>
                            <p>Wednesday</p>
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TransparentButton transparentButton={<AddIcon />}/>
                        </div>
                        <div>
                            <p>Thursday</p>
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TransparentButton transparentButton={<AddIcon />}/>
                        </div>
                        <div>
                            <p>Friday</p>
                            <TextField
                                id="time"
                                label="start/ end time"
                                type="time"
                                variant="standard"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{
                                    '& .MuiInput-input': {width: '223px'},
                                }}
                            />
                            <TransparentButton transparentButton={<AddIcon />}/>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default Index;



