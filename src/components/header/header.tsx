import {
  Container,
  Typography,
  Box,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const Header = ({
  mode,
  toggleColorMode,
  isMobile,
}: {
  mode: string;
  toggleColorMode: () => void;
  isMobile: boolean;
}) => {
  return (
    <AppBar position="static" elevation={0} color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography fontWeight="bold">
            {isMobile ? "Новости SEOTLT" : "Новостной портал компании SEOTLT"}
          </Typography>
          <Box>
            <IconButton onClick={toggleColorMode} color="inherit">
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
