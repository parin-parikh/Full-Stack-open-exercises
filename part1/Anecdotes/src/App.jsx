import { useState } from 'react'

const MostVotes = (props) => {
  let max = props.vote[0]
  let maxIndex = 0

  for(let i = 0; i < props.size; i++) {
    if(props.vote[i] > max) {
      maxIndex = i;
      max = props.vote[i];
    }
  }

  return (
    <div>
      {props.anecdotes[maxIndex]} <br />
      has {max} votes
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [size, setSize] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0,0])

  const randomNum = () => {
    setSize(anecdotes.length)
    setSelected(Math.floor(Math.random() * size))
  }

  const updateVotes = () => {
    const newVoteArr = [...vote]
    newVoteArr[selected] += 1

    setVote(newVoteArr)
  }
  
  

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {vote[selected]} votes <br />
      <button onClick={updateVotes}>Vote</button>
      <button onClick={randomNum}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <MostVotes vote={vote} anecdotes={anecdotes} size={size} />
    </div>
  )
}

export default App