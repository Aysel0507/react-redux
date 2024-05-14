import React from "react";
import {
  useDeleteOneMutation,
  useGetAllDataQuery,
} from "../../services/MoviesApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Movies = () => {
  const { data: movies, refetch } = useGetAllDataQuery();
  const [deleteOne] = useDeleteOneMutation();

  const handleDelete = async (id) => {
    await deleteOne(id);
    refetch();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movies &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Grid style={{ marginTop: "100px" }}>
                  <Card>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={movie.posterImg}
                      title={movie.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>ReleaseYear: </b> {movie.releaseYear}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Genre: </b> {movie.genre}
                      </Typography>
                      <Button
                        onClick={() => handleDelete(movie.id)}
                        color="error"
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </SwiperSlide>
            ))}
        </Swiper>
      </Grid>
    </Container>
  );
};
export default Movies;
