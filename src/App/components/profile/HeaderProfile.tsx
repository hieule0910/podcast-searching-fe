import { Box, Avatar, Typography, Button, CircularProgress } from '@mui/material';
import { FC } from 'react';
import colors from '../../../styles/colors';

interface Props {
    avatar: string | undefined;
    username: string | undefined;
    listButton: contentButton[];
    followingCount: number;
    followerCount: number;
    isFollowing: boolean;
    isFetching: boolean;
    postCount: number;
}

export interface contentButton {
    label: string;
    handleEvent: any;
}

const HeaderProfile: FC<Props> = ({ avatar, username, listButton, followingCount, followerCount, isFollowing, isFetching, postCount }) => {
    return (
        <>
            <Box
                component="header"
                sx={{
                    padding: '30px 20px 0px',
                    marginBottom: '16px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            marginRight: {
                                xs: '10px',
                                sm: '30px'
                            },
                            flexGrow: 1,
                            justifyContent: 'center'
                        }}
                    >
                        <Avatar src={avatar} sx={{ width: 150, height: 150 }} />
                    </Box>
                    <Box
                        component="section"
                        sx={{
                            flexGrow: 2
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: {
                                    xs: 'start',
                                    sm: 'center'
                                },
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row'
                                }
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h2"
                                sx={{
                                    color: `${colors.normalText}`,
                                    marginBottom: {
                                        xs: '12px',
                                        sm: 0
                                    }
                                }}
                            >
                                {username}
                            </Typography>
                            {listButton.map((item) => (
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={
                                        isFollowing
                                            ? {
                                                  marginLeft: {
                                                      xs: '0',
                                                      sm: '20px'
                                                  },
                                                  backgroundColor: `${colors.btnEditProfile}`,
                                                  textTransform: 'capitalize',
                                                  color: 'black',
                                                  ':hover': {
                                                      backgroundColor: 'myCustomTheme.main'
                                                  }
                                              }
                                            : {
                                                  marginLeft: {
                                                      xs: '0',
                                                      sm: '20px'
                                                  },
                                                  backgroundColor: `${colors.btnUpload}`,
                                                  textTransform: 'capitalize',
                                                  color: 'white',
                                                  ':hover': {
                                                      backgroundColor: `${colors.btnUploadHover}`
                                                  }
                                              }
                                    }
                                    onClick={item.handleEvent}
                                    key={item.label}
                                >
                                    {isFetching ? <CircularProgress color="success" size={22} /> : item.label}
                                </Button>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                marginBottom: '20px'
                            }}
                        ></Box>
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'flex'
                                }
                            }}
                        >
                            <Typography
                                variant="body1"
                                component="span"
                                sx={{
                                    color: `${colors.normalText}`,
                                    marginRight: '40px',
                                    cursor: 'pointer'
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        color: `${colors.normalText}`,
                                        fontWeight: '700',
                                        marginRight: '4px'
                                    }}
                                >
                                    {postCount}
                                </Typography>
                                post
                            </Typography>
                            <Typography
                                variant="body1"
                                component="span"
                                sx={{
                                    color: `${colors.normalText}`,
                                    marginRight: '40px',
                                    cursor: 'pointer'
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        color: `${colors.normalText}`,
                                        fontWeight: '700',
                                        marginRight: '4px'
                                    }}
                                >
                                    {followerCount}
                                </Typography>
                                followers
                            </Typography>
                            <Typography
                                variant="body1"
                                component="span"
                                sx={{
                                    color: `${colors.normalText}`,
                                    marginRight: '40px',
                                    cursor: 'pointer'
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{
                                        color: `${colors.normalText}`,
                                        fontWeight: '700',
                                        marginRight: '4px'
                                    }}
                                >
                                    {followingCount}
                                </Typography>
                                following
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    borderTopColor: 'myCustomTheme.main',
                    display: {
                        xs: 'block',
                        sm: 'none'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-around',
                        margin: '10px 12px'
                    }}
                >
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{
                            color: `${colors.secondaryText}`,
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="body1"
                            component="span"
                            sx={{
                                color: `${colors.normalText}`,
                                fontWeight: '700'
                            }}
                        >
                            {postCount}
                        </Typography>
                        <br />
                        post
                    </Typography>
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{
                            color: `${colors.secondaryText}`,
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="body1"
                            component="span"
                            sx={{
                                color: `${colors.normalText}`,
                                fontWeight: '700'
                            }}
                        >
                            {followerCount}
                        </Typography>
                        <br />
                        followers
                    </Typography>
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{
                            color: `${colors.secondaryText}`,
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="body1"
                            component="span"
                            sx={{
                                color: `${colors.normalText}`,
                                fontWeight: '700'
                            }}
                        >
                            {followingCount}
                        </Typography>
                        <br />
                        following
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default HeaderProfile;
