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

const Nav = ({ columns, dataSource }: _Props) => {
  return (
    <div>
      <div className={style.header}>
        {columns.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
      <div className={style.body}>
        {dataSource.map((dataItem, index) => {
          return (
            <div key={index}>
              {columns.map((columnsItem, index) => {
                return <div key={index}>{dataItem[columnsItem.dataIndex]}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
