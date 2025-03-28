import { Container, Typography, Box, Paper } from "@mui/material";

export const Footer = ({ mode }: { mode: string }) => {
  return (
    <Paper
      component="footer"
      elevation={0}
      sx={{
        py: 3,
        bgcolor: mode === "light" ? "#f1f3f5" : "#1a1a1a",
        borderTop: mode === "light" ? "1px solid #e9ecef" : "1px solid #2d2d2d",
      }}
    >
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Новостной портал
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};
