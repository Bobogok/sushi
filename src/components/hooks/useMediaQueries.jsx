import { useMedia } from 'react-use';

function useMediaQueries() {
  const xxl = useMedia('(min-width: 1630px)');
  const xl = useMedia('(min-width: 1151px) and (max-width: 1629px)');
  const lg = useMedia('(min-width: 1025px) and (max-width: 1150px)');
  const tb = useMedia('(min-width: 635px) and (max-width: 1100px)');
  const mb = useMedia('(max-width: 634px)');
  const smb = useMedia('(max-width: 375px)');

  return { xxl, xl, lg, tb, mb, smb };
}

export default useMediaQueries;
