async function CommonAddress({ address }: { address: string }) {
  return (
    <div>
      <div>
        <span>Address:</span>
        <span>{address}</span>
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

export default CommonAddress;
