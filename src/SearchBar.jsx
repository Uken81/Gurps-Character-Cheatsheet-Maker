import Select from 'react-select';

const SearchBar = (props, func) => {
    const options = props.options;
    const onChange = props.onChange;
    const placeHolder = props.placeHolder
    return (  
        <div>
            <Select
                id='searchBar'
                placeholder={placeHolder}
                options={options}
                isMulti
                onChange={onChange}
            />
           
        </div>
    );
}
 
export default SearchBar;