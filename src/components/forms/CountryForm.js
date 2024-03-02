import React, { useState } from 'react';
import Select from 'react-select';

const CountryForm = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { label: 'United States', value: 'US', cities: ['New York', 'California', 'Texas'] },
    { label: 'Canada', value: 'CA', cities: ['Ontario', 'Quebec', 'British Columbia'] },
    { label: 'Jordan', value: 'Jordan', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] }
  ]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // If a country is selected, update options to show its cities
    if (selectedOption && selectedOption.cities) {
      setOptions(selectedOption.cities.map(city => ({ value: city, label: city })));
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={props.getWeather} style={styles.form}>
        <h2 style={styles.title}>Select Country and City</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="select" style={styles.label}>Country:</label>
          <Select
            id="select"
            name="select"
            value={selectedOption}
            onChange={handleChange}
            options={options}
            isClearable
            isSearchable
            placeholder="Select Country"
            styles={customStyles}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Get Weather</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f4f4f4',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
    color: '#555',
    fontWeight: 'bold',
  },
  submitButton: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#405de6',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    borderColor: state.isFocused ? '#405de6' : '#ccc',
    boxShadow: state.isFocused ? '0px 0px 0px 1px #405de6' : 'none',
    '&:hover': {
      borderColor: '#405de6',
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#aaa',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#405de6' : '#fff',
    color: state.isSelected ? '#fff' : '#333',
    '&:hover': {
      backgroundColor: '#405de6',
      color: '#fff',
    },
  }),
};

export default CountryForm;
