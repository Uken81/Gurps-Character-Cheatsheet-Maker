import { useHistory } from 'react-router';

const UsePushBackToLanding = () => {
  const history = useHistory();
  history.push('/create-or-manage-page');
};

export default UsePushBackToLanding;
