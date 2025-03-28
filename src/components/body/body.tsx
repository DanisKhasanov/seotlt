import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useNews } from "../../hooks/useNews";
import { useState } from "react";
import { News } from "../../types/news";
import { NewsItem } from "./newsItem";
import { NewsForm } from "./newsForm";

export const Body = ({ isMobile }: { isMobile: boolean }) => {
  const { news, addNews, updateNews, deleteNews } = useNews();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const handleEdit = (newsItem: News) => {
    setEditingNews(newsItem);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingNews(null);
  };

  const handleFormSubmit = (data: { title: string; content: string }) => {
    if (editingNews) {
      updateNews(editingNews.id, data);
    } else {
      addNews(data);
    }
  };
  return (
    <Container maxWidth="md" sx={{ py: 4, flex: 1 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold">
          Последние новости
        </Typography>
        <Button
          variant="contained"
          onClick={() => setIsFormOpen(true)}
          size={isMobile ? "small" : "large"}
        >
          Добавить новость
        </Button>
      </Box>

      {news.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="body1" color="text.secondary">
            Нет новостей. Будьте первым, кто добавит новость!
          </Typography>
        </Paper>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {news.map((item) => (
            <Paper key={item.id} sx={{ p: 3 }}>
              <NewsItem news={item} onEdit={handleEdit} onDelete={deleteNews} />
            </Paper>
          ))}
        </Box>
      )}

      <NewsForm
        open={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        initialData={editingNews || undefined}
      />
    </Container>
  );
};
