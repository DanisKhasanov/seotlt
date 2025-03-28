import { useState, useEffect } from "react";
import { News } from "../types/news";
import { GenerateId } from "../helpers/generateId";
import { GenerateDate } from "../helpers/generateDate";
import { useCustomSnackbar } from "./useCustomSnackbar";

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const { showSnackbar } = useCustomSnackbar();

  useEffect(() => {
    const storedNews = localStorage.getItem("news");
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    } else {
      const initialNews: News[] = [
        {
          id: GenerateId(),
          title: "Добро пожаловать в приложение новостей",
          content:
            "Это демонстрационная новость. Вы можете добавлять, редактировать и удалять новости.",
          createdAt: GenerateDate(),
        },
        {
          id: GenerateId(),
          title: "Как пользоваться приложением",
          content:
            "Нажмите кнопку 'Добавить' для создания новой новости. Для редактирования или удаления существующей новости используйте соответствующие кнопки.",
          createdAt: GenerateDate(),
        },
        {
          id: GenerateId(),
          title: "Темный режим",
          content:
            "Вы можете переключаться между светлой и темной темой с помощью кнопки в правом верхнем углу.",
          createdAt: GenerateDate(),
        },
        {
          id: GenerateId(),
          title: "Уведомления",
          content:
            "При каком-либо действии в приложении вы будете получать уведомление.",
          createdAt: GenerateDate(),
        },
      ];
      setNews(initialNews);
      localStorage.setItem("news", JSON.stringify(initialNews));
    }
  }, []);

  const addNews = (newsItem: { title: string; content: string }) => {
    const newNews = {
      ...newsItem,
      id: GenerateId(),
      createdAt: new Date().toISOString(),
    };
    const updatedNews = [...news, newNews];
    setNews(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
    showSnackbar("Новость успешно добавлена!", { variant: "success" });
  };

  const updateNews = (
    id: string,
    updatedItem: { title: string; content: string }
  ) => {
    const updatedNews = news.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    setNews(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
    showSnackbar("Новость успешно обновлена!", { variant: "info" });
  };

  const deleteNews = (id: string) => {
    const updatedNews = news.filter((item) => item.id !== id);
    setNews(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
    showSnackbar("Новость успешно удалена!", { variant: "default" });
  };

  return { news, addNews, updateNews, deleteNews };
};
