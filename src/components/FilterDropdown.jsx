function FilterDropdown({ name, defaultOption, options }) {
    return (
        <select name={name} defaultValue="">
            <option value="">{defaultOption}</option>

            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default FilterDropdown;