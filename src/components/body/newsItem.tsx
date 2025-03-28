import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { NewsItemProps } from "../../props/newsItemProps";

export const NewsItem = ({ news, onEdit, onDelete }: NewsItemProps) => {
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Typography>{news.title}</Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {news.content}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1, display: "block" }}
        >
          {new Date(news.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(news)}>
          Изменить
        </Button>
        <Button size="small" color="error" onClick={() => onDelete(news.id)}>
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};
