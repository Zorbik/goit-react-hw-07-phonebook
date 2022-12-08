import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phoneBookOperations';
import { Button, ContactItem } from '../../components';
import { useState } from 'react';

export const Contact = ({ item }) => {
  const { id, name, phone } = item;
  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);
  const onClick = () => {
    try {
      setIsDeleting(true);
      dispatch(deleteContact(id));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ContactItem>
      {name}: {phone}
      <Button type="button" onClick={onClick} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </ContactItem>
  );
};
