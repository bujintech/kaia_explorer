import type { TxResponseData } from "@/lib/db/type";
import Table, { addressColumns } from "@/components/table";
import GcAddress from "./GcAddress";
import CommonAddress from "./CommonAddress";
import { queryGcConfig, queryTransactionByAddress } from "@/lib/db";
import style from "./index.module.css";

async function Address({ params: { address } }: { params: { address: string } }) {
  const gc_config = await queryGcConfig();

  const txs = await queryTransactionByAddress(address);

  const gcName = gc_config && gc_config[address];

  return (
    <div className={style.address}>
      <h1>Address</h1>
      {gcName ? <GcAddress gcName={gcName} /> : <CommonAddress address={address} />}

      <Table<TxResponseData> columns={addressColumns} dataSource={txs || []}></Table>
    </div>
  );
}

export default Address;
