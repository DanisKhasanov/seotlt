export interface NewsFormProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; content: string }) => void;
    initialData?: { title: string; content: string };
  }