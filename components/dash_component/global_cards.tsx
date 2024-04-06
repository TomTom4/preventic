
export default function GlobalCards(props: { counted: any; category: any; }) {
    const {counted, category} = props;
    return (
      <div className="grid">
        <div className="rounded-full">
            <h3 className="col-span">{`${counted}`}</h3>
        </div> 
        <h4>{`${category}`}</h4>     
      </div>
    )
  }