import { useDispatch } from 'react-redux';
import { Button, ContactItem } from '../../components';
import { deleteContact } from '../../services/phoneBookAPI';

export const Contact = ({ item }) => {
  const { id, name, phone } = item;
  const dispatch = useDispatch();
  return (
    <ContactItem>
      {name}: {phone}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ContactItem>
  );
};
