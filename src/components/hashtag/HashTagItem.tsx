type HashTagItemProps = {
  children: string;
  onSelect: (company: string) => void;
};
function HashTagItem({ children, onSelect }: HashTagItemProps) {
  return (
    <li key={children}>
      <button onClick={() => onSelect(children)}>#{children}</button>
    </li>
  );
}

export default HashTagItem;
