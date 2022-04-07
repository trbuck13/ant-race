const StackedListRow = ({ primary, secondary, color, rank }) => {
  return (
    <li className="flex py-4">
      <div className={`h-10 w-10 rounded-full`} style={{ backgroundColor: color }} />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{primary}</p>
        <p className="text-sm text-gray-500">{secondary}</p>
      </div>
      <div className="flex-1 text-right">{rank ? rank : '-'} </div>
    </li>
  );
};

const StackedList = ({ children }) => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {children}
    </ul>
  );
};

export { StackedListRow };
export default StackedList;
