import { useHistory } from 'react-router';

const usePushBackToCreateOrManage = () => {
  const history = useHistory();
  history.push('/create-or-manage-page');
};

export default usePushBackToCreateOrManage;
