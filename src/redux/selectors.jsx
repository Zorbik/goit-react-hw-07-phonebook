export const getContacts = ({ contacts }) => contacts.items;
export const getError = ({ contacts }) => contacts.error;
export const getStatus = ({ contacts }) => contacts.isLoading;
export const getFilter = ({ filter }) => filter;
export const getState = ({ contacts }) => contacts;

export const getVisibleContacts = state => {
  const stateContacts = getContacts(state);
  const stateFilter = getFilter(state);
  const normalizedFilter = stateFilter.toLowerCase().trim();
  return stateContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
