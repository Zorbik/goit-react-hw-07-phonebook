import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import {
  Box,
  Section,
  FormInputContact,
  ContactsList,
  Filter,
} from './components';
import { getContacts } from './redux/selectors';
import { fetchContacts } from './services/phoneBookAPI';

function App() {
  const stateContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log('stateContacts', stateContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box width="px" mx="auto" my={5} p={4} boxShadow="normal">
      <Section title="Phonebook">
        <FormInputContact />
      </Section>
      <Section title="Contacts">
        {stateContacts?.length ? <Filter /> : ''}
        <ContactsList />
      </Section>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
}

export default App;
