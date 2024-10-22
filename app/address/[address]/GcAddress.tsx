import { queryGcInfoByName } from "@/lib/db";

async function Address({ gcName }: { gcName: string }) {
  const data = await queryGcInfoByName(gcName);

  if (!data) return;

  return (
    <div>
      <div>
        <img src={data.thumbnail}></img>
        <div>{data.name}</div>
      </div>

      <div>
        <ul>
          {data.contracts.map((v) => (
            <li key={v.address}>
              <span style={{ marginRight: 20 }}>{v.type}</span>
              <span>{v.address}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span>Balance</span>
        <span>{0}KLAy</span>
      </div>
      <div>
        <span>Key</span>
        <span>xxxx</span>
      </div>
      <div>
        <span>Total TXs</span>
        <span>0</span>
      </div>
    </div>
  );
}

export default Address;
