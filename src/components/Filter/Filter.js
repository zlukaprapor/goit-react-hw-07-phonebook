import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => dispatch(changeFilter(e.target.value));
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Rosie Simpson"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
  );
}

// import { useDispatch } from "react-redux";
// import { filterContact } from "../../redux/actions";

// const Filter = () => {
//   const dispatch = useDispatch();

//   const onFilter = (event) => dispatch(filterContact(event.target.value));

//   return (
//     <label>
//       <input type="text" name="filter" onChange={onFilter} />
//     </label>
//   );
// };

// export default Filter;
