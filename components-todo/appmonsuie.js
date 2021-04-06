import Header from './components-todo/header';
import Todo from './components-todo/todo'
import AddTodo from './components-todo/addTodo'

export default function App() {
  const [todo, settodo] = useState([
    {name: "code React", key: '1'},
    {name: ""},
    {name: ""},
    {name: ""}
  ])


  const removeTodo = (key)=>{
    settodo((prevTodo)=>{
        return prevTodo.filter((thatPrevTodo)=>(thatPrevTodo.key != key))
    })
}

const submitTodo = (text)=>{

  if(text.length > 3){

    settodo((prevTodo)=>{
      return [
        {name: text, key: Math.random().toString()},
        ...prevTodo
      ]
    })
  } else {
    Alert.alert('oops', 'please addtodo must be 3 chars long', [
      {text: 'understood', onPress : () => console.log('alert closed')}
    ])
  }

}

// const clickHandler = ()=>{
//   setName('Nwankwo')
// }
// const pressHandler = (id)=>{
//   console.log(id)
//   setPeople((prevPeople)=>{
//     return(prevPeople.filter((pp)=>(pp.id != id)))
//   })
// }
  return (

    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
      console.log('dismissed keyboard')}}
      >
      <View style={styles.subContainer}>
        <Header/>
        <View style={styles.content}>
        {/* todo List */}
          <AddTodo submitTodo={submitTodo}/>
          <View style={styles.list}>
            <FlatList
            data={todo}
            renderItem={({ item }) =>(
              <Todo item={item} pressHandler={removeTodo}/>
            )}
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
      // <StatusBar style="auto" />
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    flex: 1,
    padding: 40,
  },
  list:{
    flex: 1,
    marginTop: 20,
  }

});
