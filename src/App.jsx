import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import {
  Box,
  Section,
  FormInputContact,
  ContactsList,
  Filter,
  Loader,
} from './components';
import { getContacts, getStatus } from './redux/selectors';
import { fetchContacts } from './redux/phoneBookOperations';

function App() {
  const stateContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoaderShown = isLoading && stateContacts?.length === 0;
  const isFilterShown = stateContacts?.length;
  return (
    <Box width="px" mx="auto" my={5} p={4} boxShadow="normal">
      <Section title="Phonebook">
        <FormInputContact />
      </Section>
      <Section title="Contacts">
        {isLoaderShown && <Loader />}
        {isFilterShown ? <Filter /> : ''}
        <ContactsList />
      </Section>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
}

export default App;
