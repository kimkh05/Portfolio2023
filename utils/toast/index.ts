import { toast } from 'react-toastify';

export function customToast(message: string, type: 'success' | 'error'): void {
  switch (type) {
    case 'success':
      toast.success(message, {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case 'error':
      toast.error(message, {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    default:
      toast('개발자오류');
      break;
  }
}
