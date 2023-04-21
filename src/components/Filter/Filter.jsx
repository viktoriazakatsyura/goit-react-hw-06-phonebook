
import { Input } from '../ContactForm/ContactForm.styles';
import { Text } from './Filter.styles';
import { useSelector, useDispatch } from 'react-redux';
import  * as actions from '../../redux/phonebook/phonebook-slice';
import { getFilter } from '../../redux/phonebook/pnonebook-selector';

const Filter = () =>{
     const value = useSelector(getFilter)
    const dispatch = useDispatch()
    
    const changeFilterInput = (e) => dispatch(actions.changeFilter(e.currentTarget.value));

    return (
        <>
            <Text>Find contact by name</Text>
               <Input
                type='text'
                name='name'
                placeholder="Name to search"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={value}
                onChange={changeFilterInput}
                required>
                </Input>
        </>
    )
}

export default Filter;

//=========REDUX==================

// const mapStateToPropes = (state) => ({
//     value: state.filter
// })
// const mapDispatchToProps = dispatch => ({
//  onChange:(e)=>dispatch(actions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToPropes, mapDispatchToProps)(Filter); 