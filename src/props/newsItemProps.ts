import { News } from "../types/news";

export interface NewsItemProps {
  news: News;
  onEdit: (news: News) => void;
  onDelete: (id: string) => void;
}
