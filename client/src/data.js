let data = [
  [
    {id : 1} , {notes : ['note 1', 'note 2', 'note 3'] }
  ],
  [
    {id : 2},{notes : ['note a', 'note b', 'note c'] }
  ],
  [
    {id : 3},{notes : ['note I'] }
  ],
  [
    {id : 9},{notes : null }
  ],
  [
    {id : 10} , {notes : null }
  ]
]

console.log(data[0][1].notes[2]); //note 3
console.log(data[1][0].id); // 2
