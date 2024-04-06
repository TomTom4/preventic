export default function CountCards(props: {
  counted: number;
  category: string;
}) {
  const { counted, category } = props;
  return (
    <div className="flex flex-col">
      <div className=" flex rounded-full bg-cyan-200 h-24 w-24">
        <h3 className="mx-10 my-8 col-span text-center items-center text-3xl">{`${counted}`}</h3>
      </div>
      <h4 className="text-center">{`${category}`}</h4>
    </div>
  );
}
