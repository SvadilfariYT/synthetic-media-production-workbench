function SuggestionPicker({ suggestions, onSelect }) {
    if (suggestions.length === 0) {
      return null;
    }
  
    return (
      <div className="suggestion-picker">
        {suggestions.map((suggestion, index) => (
          <button key={index} onClick={() => onSelect(suggestion)}>
            {suggestion}
          </button>
        ))}
      </div>
    );
  }
  
  export default SuggestionPicker;
  