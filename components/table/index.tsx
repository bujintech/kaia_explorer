import style from "./index.module.css";

interface _Columns {
  title: string;
  dataIndex: string;
}

interface _Props {
  columns: _Columns[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: any[];
}

const Table = ({ columns, dataSource }: _Props) => {
  return (
    <div className={style.table}>
      <table>
        <thead>
          <tr>
            {columns.map((columnsItem, index) => {
              return <th key={index}>{columnsItem.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((dataItem, index) => (
            <tr key={index}>
              {columns.map((columnsItem, index) => {
                return <td key={index}>{dataItem[columnsItem.dataIndex]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
