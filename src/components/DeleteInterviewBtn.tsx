import { useAppContext } from '../context';
import { Interview } from '../types';
import { deleteInterview } from '../utils';

interface IDeleteInterviewBtn {
  interview: Interview;
}

const DeleteInterviewBtn = (props: IDeleteInterviewBtn) => {
  const { id } = props.interview;
  const { interviews, setInterviews } = useAppContext();

  const deleteInterviewClick = async () => {
    console.log('Delete Btn Click. Id = ', id);
    // const delSuccess = await deleteInterview(id);
    // if(delSuccess)
    setInterviews(interviews.filter((interview) => interview.id !== id));
  };

  return <button onClick={deleteInterviewClick}>Delete</button>;
};

export default DeleteInterviewBtn;
