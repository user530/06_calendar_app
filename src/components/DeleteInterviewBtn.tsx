import { useAppContext } from '../context';
import { Interview } from '../types';
import { deleteInterview } from '../utils';

interface IDeleteInterviewBtn {
  interview: Interview;
}

const DeleteInterviewBtn = (props: IDeleteInterviewBtn) => {
  const { id } = props.interview;
  const { interviews, setInterviews, setSelectedInterview } = useAppContext();

  const deleteInterviewClick = async () => {
    // 'Are you sure you want to delete selected interview?'

    deleteInterview(id).then((success: boolean) => {
      if (success) {
        setInterviews(interviews.filter((interview) => interview.id !== id));
        setSelectedInterview(null);
      }
    });
  };

  return <button onClick={deleteInterviewClick}>Delete</button>;
};

export default DeleteInterviewBtn;
