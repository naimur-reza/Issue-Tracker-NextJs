import Skeleton from "@/app/components/Skeleton";
import { Box, Card, Flex, Grid } from "@radix-ui/themes";

const LoadingIssueDetailPage = () => {
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <Skeleton />
        <Flex className="space-x-3" my="2">
          <Skeleton width="5rem" />
          <Skeleton width="8rem" />
        </Flex>
        <Card className="prose" mt="4">
          <Skeleton count={3} />
        </Card>
      </Box>
      <Box>
        <Flex direction="column" gap="3">
          <Skeleton height="1.5rem" count={3} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default LoadingIssueDetailPage;
