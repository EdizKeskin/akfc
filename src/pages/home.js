import { useMemo } from "react";
import { Box, Grid } from "@chakra-ui/react";
import Card from "../components/card";
import Header from "../components/header";
import Trap from "../components/trap";

import axios from "axios";
import { useQuery } from "react-query";
import CustomSpinner from "../components/spinner";

function Home() {
  const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT;
  const MEMBER_QUERY = useMemo(() => {
    return `
  {
    members {
      link
      animeGirls
      avatar
      desc
      descEn
      detail
      detailEn
      name
      sm
      tag
      bestSeries
      bestGames
      bestMovies
      bestAnime
    }
  }
`;
  }, []);

  const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: MEMBER_QUERY,
      },
    }).then((response) => response.data.data);
  });

  if (isLoading) return <CustomSpinner />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <Box minh="100vh">
      <div data-aos="fade-up">
        <Header />
      </div>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        mt={"16"}
      >
        {data.members.map((user, index) => (
          <div key={index} data-aos="zoom-in-up">
            <Card item={user} />
          </div>
        ))}
      </Grid>

      <Trap />
    </Box>
  );
}

export default Home;
