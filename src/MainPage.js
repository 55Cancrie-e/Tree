import TreeTwo from './components/treeStructure/Expander'
import options from './components/JSON/treeData'

function MainPage() {
  return (
    <div className="App">
      <TreeTwo options={options.data} />
     <div>
       <div>The yellow color indicates the elements with nesting </div>
       <div>Green indicates elements without nesting </div>
    </div>
    </div>
  );
}

export default MainPage;
