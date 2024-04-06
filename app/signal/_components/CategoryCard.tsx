export default function CategoryCard(props: { value: string; id: number }) {
  return (
    <div className="flex w-400 bg-slate-100">
      <img
        src="https://images.ctfassets.net/e5382hct74si/2P1iOve0LZJRZWUzfXpi9r/9d4d27765764fb1ad7379d7cbe5f1043/ucxb4lHy_400x400.jpg"
        className="w-12 h-12"
      />
      <p>{props.value}</p>
    </div>
  );
}
