import './App.css'

import Card1 from './shared/Card1'
import Card2 from './shared/Card2'
import Card3 from './shared/Card3'
import Card4 from './shared/Card4'

import Card from './shared/Card'
import NewVersionCard from './shared/NewVersionCard'
import ComponentA from './shared/ComponentA'

function App() {

  const arrayData = [
    {'id': 1, 'name':'jame1', 'age':11, 'isActive':true},
    {'id': 2,'name':'jame2', 'age':12, 'isActive':true},
    {'id': 3,'name':'jame3', 'age':13, 'isActive':false}
  ]

  const objectData = {'name':'jame1', 'count':11, 'isBoolean':true}
  const NewCard = NewVersionCard(Card);

  return (
    <>
      <Card1 name='cardName' count={7} isBoolean={true} />
      <Card1 {...objectData} />
      <br/><br/>

      <Card2 name='cardName' count={8} isBoolean={false} />
      <br/><br/>

      <Card3 name='cardName' count={10} />
      <br/><br/>
      
      <Card4 datas={arrayData} />
      <br/><br/>

      <NewCard isActive={true} title="활성화 카드" content='content' />
      <br/><br/>

      <NewCard isActive={false} title="비활성화 카드" content='content' />
      <br/><br/>

      <ComponentA />
    </>
  )
}

export default App
