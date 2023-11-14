import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Pricing from './Pricing';
import ECOFRIENDLYPicture from '../assets/ECOFRIENDLY.jpg';
import BolsasBiodegradablesPicture from '../assets/bolsas-biodegradables.jpg';
import PedidoYaPicture from '../assets/pedido-ya.jpg';  
import DescuentoPicture from '../assets/descuento.jpg';  

const mainFeaturedPost = {
    title: 'BOLSAS BIODEGRADABLES',
    description:
        "Hechas a base de gelatina.",
    image: ECOFRIENDLYPicture,
    imageText: 'ECO FRIENDLY Bolsas Biodegradables',
};

const featuredPosts = [
    {
        title: 'Bolsas biodegradables',
        description:
            'Las mejores bolsas biodegradables que podes encontrar, cuidemos juntos el medio ambiente.',
        image: BolsasBiodegradablesPicture,
        imageLabel: 'Bolsas Biodegradables',
    },
    {
        title: 'Pedilas ya',
        description:
            '¡Realiza tu pedido que se vuelan!',
        image: PedidoYaPicture,
        imageLabel: 'Pedilas Ya',
    },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="ECO FRIENDLY" />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                        <img style={{ borderRadius: '0.25rem', width: '23%' }} src={DescuentoPicture} alt={"descuento"} />
                        <img style={{ borderRadius: '0.25rem', width: '23%' }} src={DescuentoPicture} alt={"descuento"} />
                        <img style={{ borderRadius: '0.25rem', width: '23%' }} src={DescuentoPicture} alt={"descuento"} />
                        <img style={{ borderRadius: '0.25rem', width: '23%' }} src={DescuentoPicture} alt={"descuento"} />
                    </div>
                    <Pricing />
                </main>
            </Container>
            <Footer
                title="Eco Friendly by Gerónimo Martín Escudero"
                description="Prácticas Profesionales, Organizacion y Gestión de la Producción, Marco Jurídico"
            />
        </ThemeProvider>
    );
}