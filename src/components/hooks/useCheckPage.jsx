import { useLocation } from 'react-router-dom';

function useCheckPage(page) {
  const { pathname } = useLocation();

  return pathname === page;
}

export default useCheckPage;
