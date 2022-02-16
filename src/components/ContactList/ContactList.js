import { useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from '../../redux/slice';
import { getFilter } from '../../redux/selectors';
import { Item, Name, Number, Button } from './ContactList.styled';

const ContactsList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [onDeleteContact] = useDeleteContactsMutation();

  const filter = useSelector(getFilter);

  const getFilteredContacts = (contacts) =>
    contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactFilterList = getFilteredContacts(contacts);

  // const contactFilterList = contacts ? getFilteredContacts(contacts) : null;

  return (
    <>
      {contacts && (
        <ul>
          {contactFilterList.map(({ id, name, number }) => (
            <Item key={id}>
              <Name>{name}: </Name>
              <Number href={`tel:${number}`}>{number}</Number>
              <Button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </Button>
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;

// import { useSelector, useDispatch } from "react-redux";
// import { deleteContact, fetchContacts } from "../../redux/operations";
// import { getContactList } from "../../redux/selectors";
// import "./ContactsList.module.css";
// import PropTypes from "prop-types";
// import { useEffect } from "react";

// const ContactList = () => {
//   const dispatch = useDispatch();

//   const contacts = useSelector(getContactList);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <table className="List-table">
//       <tbody>
//         {contacts.map(({ name, number, id }) => (
//           <tr key={id}>
//             <td>{name}</td>
//             <td>{number}</td>
//             <td>
//               <button type="button" onClick={() => dispatch(deleteContact(id))}>
//                 del
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
// export default ContactList;
