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



SELECT * from NOTES;

[

]



GET localhost/folders

RETURN

a = {
  "folder_id_1": {
    "name": 'name of folder',
    "notes": []
  }
}

for note in notes:
  if note.folder_id in a:
    a[note.folder_id].notes.push(note)
  else:
    a[note.folder_id] = {}
     [
      contents: note.contents,
      date: note.date,
    ]

[
  {
    "folder_id": 383833,
    "folder_name": "folder_name",
    "is_visible": true,
    "date_created": "oierueorue",
    "notes": [
      {
        "note_title": "oieureou",
        "date_created": "feb",
        "content": "oiereou eorieureo re",
        "permissions": eoiere
      }
    ]
  },
  {
    "folder_id": ....
  }
]