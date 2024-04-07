export default function CountCards(props: {
  counted: number;
  category: string;
  importantThreshold: number;
  criticalThreshold: number;
}) {
  const { counted, category, importantThreshold, criticalThreshold } = props;

  const switchColor = (counted: number) => {
    if (counted >= criticalThreshold) return "bg-red-200";
    if (counted >= importantThreshold) return "bg-amber-200";
    return "bg-green-200";
  };

  return (
    <div className="flex flex-col">
      <div className={"flex rounded-full {} h-24 w-24 " + switchColor(counted)}>
        <h3 className="mx-10 my-8 col-span text-center text-slate-600 items-center text-3xl">{`${counted}`}</h3>
      </div>
      <h4 className="text-center">{`${category}`}</h4>
    </div>
  );
}
