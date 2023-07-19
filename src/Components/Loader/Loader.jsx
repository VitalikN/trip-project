import { Ball, Box, Container, Shadow } from "./Loader.styked";

export const Loader = () => {
  return (
    <Container>
      <Box>
        <Ball></Ball>
        <Ball></Ball>
        <Ball></Ball>
        <Shadow></Shadow>
        <Shadow></Shadow>
        <Shadow></Shadow>
      </Box>
    </Container>
  );
};