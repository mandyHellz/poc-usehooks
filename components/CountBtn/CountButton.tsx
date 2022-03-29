const CountButton = ({
  title,
  onPress,
  children,
}: {
  title: string;
  onPress: () => void;
  children?: any;
}) => {
  return (
    <button className="border bg-red-300" title={title} onClick={onPress}>
      {children}
    </button>
  );
};

export default CountButton;
