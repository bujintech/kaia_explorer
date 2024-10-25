import type { TxResponseData } from "@/lib/db/type";
import Table, { addressColumns } from "@/components/table";
import { queryGcConfig, queryTransactionByAddress } from "@/lib/db";
import style from "./index.module.css";

async function Address({ params: { address } }: { params: { address: string } }) {
  const gc_config = await queryGcConfig();

  const txs = await queryTransactionByAddress(address);

  const gcName = gc_config && gc_config[address];

  return (
    <div className={style.addressPage}>
      <div className={style.title}>Address</div>

      <div className={`${style.detail} ${style.card}`}>
        <div className="flex fl_ac">
          <span>Address</span>
          <span>111</span>
        </div>
        <div className="flex fl_ac">
          <span>Balance</span>
          <span>111</span>
        </div>
        <div className="flex fl_ac">
          <span>Key</span>
          <span>222</span>
        </div>
        <div className="flex fl_ac">
          <span>Totao TXs</span>
          <span>333</span>
        </div>
      </div>
      <div className={`${style.card}`}>
        <Table<TxResponseData> columns={addressColumns} dataSource={txs || []}></Table>
      </div>
    </div>
  );
}

export default Address;
