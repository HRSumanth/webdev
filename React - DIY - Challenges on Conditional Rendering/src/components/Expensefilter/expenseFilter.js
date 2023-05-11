import "./expenseFilter.css";

const ExpenseFilter = ({inityear,onSelectedYear, selected}) => {
  const currentYear = new Date().getFullYear();
  const year = createArrayRange(2020, currentYear);

  function createArrayRange(start, end) {
    let yearArray = [];
    for (let i = start; i < end; i++) {
      yearArray.push(i);
    }
    return yearArray;
  }

  const selectedYearHandler=(event)=>{
    onSelectedYear(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label >Filtered Expenses</label>
        <select  value={selected} onChange={selectedYearHandler}>
          <option value="">All</option>
          {year.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
