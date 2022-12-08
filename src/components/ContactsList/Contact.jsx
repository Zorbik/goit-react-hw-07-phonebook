import { useDispatch } from 'react-redux';
import { Button, ContactItem } from '../../components';
import { deleteContact } from '../../redux/phoneBookOperations';

export const Contact = ({ item }) => {
  const { id, name, phone } = item;
  const dispatch = useDispatch();
  let isLoading = false;
  return (
    <ContactItem>
      {name}: {phone}
      <Button
        type="button"
        onClick={() => {
          isLoading = true;
          dispatch(deleteContact(id));
        }}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </ContactItem>
  );
};
