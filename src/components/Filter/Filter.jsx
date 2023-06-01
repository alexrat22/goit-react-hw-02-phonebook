export default function Filter({ value, onChange }) {
  return (
    <div>
      <label>
        Find contact by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
}
