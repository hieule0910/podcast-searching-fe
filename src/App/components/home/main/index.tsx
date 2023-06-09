import { Box, Container } from '@mui/material';
import MainPost from './MainPost';
import SearchPost from './SearchPost';
import RecommendPost from '../RecommendPost';

const MainHome = () => {
    return (
        <Container>
            <Box
                sx={{
                    paddingTop: '14px'
                }}
                component="section"
            >
                <SearchPost />
                <RecommendPost />
                <MainPost />
            </Box>
        </Container>
    );
};

export default MainHome;
