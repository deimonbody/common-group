import { useAppSelector } from '../store/hooks';

export const useAuthorized = () => {
  const { isLoading, user } = useAppSelector((store) => store.userReducer);
  if (!isLoading && user.name) return true;
  return false;
};
