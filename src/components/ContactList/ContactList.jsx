import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';
export const ContactList = () => {
  const dispatch = useDispatch();
  const test = useSelector(state => state.contacts.contacts);

  return (
    <ul className={css.list}>
      {test.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.name}>
            {name}: {number}
            <button
              className={css.btn}
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
