import { useSnackbar, OptionsObject, SnackbarMessage } from "notistack";

export const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (message: SnackbarMessage, options?: OptionsObject) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      ...options,
    });
  };

  return { showSnackbar };
};
