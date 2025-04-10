import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {};
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectitem={handleSelectItem}
      />
    </div>
  );
}
export default App;
