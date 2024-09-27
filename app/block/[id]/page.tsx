const BlockDetail = ({ params }: { params: { id: string } }) => {
  console.log(params);
  const id = params.id;
  console.log(id, typeof id);
  return <div>1231_{id}</div>;
};

export default BlockDetail;
