import Skeleton from "@/app/components/Skeleton";
import { Box, Grid } from "@radix-ui/themes";

const loading = () => {
  return (
    <Grid columns={{ initial: "1", md: "2" }}>
      <Box>
        <Skeleton count={2} />
      </Box>

      <Box>
        <Skeleton count={4} />
      </Box>
    </Grid>
  );
};

export default loading;
