const PokeData = ({
  pokeName,
  abilities,
  image,
  weight,
  types,
  marginBottom,
}: {
  pokeName: string;
  abilities: any;
  image: string;
  weight: string;
  types: any;
  marginBottom?: number;
}) => {
  return (
    <div
      className={`sm:mx-32 mx-5 py-5 sm:py-10 text-center bg-purple-200 rounded-xl mb-${marginBottom}`}
    >
      <img className="m-auto w-40" src={image} />
      <h1 className="m-auto text-center text-2xl font-bold text-pink-700 capitalize mb-5">
        {pokeName}
      </h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <p className="font-semibold"> Skills: </p>
          <ul className="italic">
            {abilities.map((item: any) => (
              <li className="capitalize">{item.ability.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold"> Types: </p>
          <ul className="italic">
            {types.map((item: any) => (
              <li className="capitalize">{item.type.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold"> Weight in Kgs: </p>
          <p className="italic">{Number(weight) / 10} Kgs</p>
        </div>
      </div>
    </div>
  );
};

export default PokeData;
