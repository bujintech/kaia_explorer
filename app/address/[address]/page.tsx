import type { TxResponseData } from "@/lib/db/type";
import Table from "@/components/table";
import { columns } from "./schema";
import GcAddress from "./GcAddress";
import CommonAddress from "./CommonAddress";
import { queryGcConfig, queryTransactionByAddress } from "@/lib/db";
import style from "./index.module.css";

async function Address({ params: { address } }: { params: { address: string } }) {
  const gc_config = await queryGcConfig();

  const txs = await queryTransactionByAddress(address);

  const gcName = gc_config && gc_config[address];
  console.log(txs[0], 22);
  return (
    <div className={style.address}>
      <h1>Address</h1>
      {gcName ? <GcAddress gcName={gcName} /> : <CommonAddress address={address} />}

      <Table<TxResponseData> columns={columns} dataSource={txs || []}></Table>
    </div>
  );
}

export default Address;
