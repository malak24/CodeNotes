MAIN COMMANDS :
'---------------------------------------------------------------'
CREATE TABLE notes (
    note_id INT AUTO_INCREMENT,
    note_title VARCHAR(20),
    note_content LONGTEXT,
    folder_id INT,
    PRIMARY KEY(note_id)
);
'---------------------------------------------------------------'
CREATE TABLE folders (
    folder_id INT AUTO_INCREMENT,
    folder_name VARCHAR(20) NOT NULL,
    PRIMARY KEY(folder_id)
);
'---------------------------------------------------------------'
ALTER TABLE notes
ADD folder_name VARCHAR(20);
'---------------------------------------------------------------' 
ALTER TABLE notes
ADD FOREIGN KEY (folder_id)  
REFERENCES folders(folder_id)
ON DELETE SET NULL;
'---------------------------------------------------------------' 
ALTER USER 'root'@'localhost' 
IDENTIFIED WITH mysql_native_password 
BY ''
'---------------------------------------------------------------'
================================================================
DELETE :
'---------------------------------------------------------------'
DELETE FROM notes
WHERE note_id = (19);
'---------------------------------------------------------------'
================================================================
SELECT :
'---------------------------------------------------------------'
SELECT * FROM folders;
SELECT * FROM notes;
'---------------------------------------------------------------'
SELECT folders.folder_name,
'---------------------------------------------------------------'
SELECT folders.folder_id, notes.folder_id
FROM folders 
JOIN notes 
USING (folder_id);
'---------------------------------------------------------------'
SELECT LOCATE('il', note_title)
FROM notes ;
'---------------------------------------------------------------'
SELECT LOCATE('note', note_content)
FROM notes;
'---------------------------------------------------------------'
SELECT folder_name, LOCATE('in', folder_name)
FROM folders ;
'---------------------------------------------------------------'
SELECT folders.folder_id , folders.folder_name, notes.note_id, notes.note_title, notes.note_content
FROM folders 
INNER JOIN notes ON folders.folder_id = notes.folder_id;
'---------------------------------------------------------------'
SELECT folders.folder_id , folders.folder_name, notes.note_id, notes.note_title, notes.note_content 
FROM folders 
LEFT JOIN notes 
ON folders.folder_id = notes.folder_id;
================================================================
INSERT : 
'---------------------------------------------------------------'
INSERT INTO notes (note_title) 
VALUES ('MySQL')
WHERE folder_id = '1';
'---------------------------------------------------------------'
INSERT INTO notes (note_title) VALUES ('Note 3') WHERE folder_id = '1';
'---------------------------------------------------------------'
INSERT INTO notes (folder_id)
SELECT folder_name
FROM folders
WHERE folder_id = folder_id;
'---------------------------------------------------------------'
INSERT INTO notes (folder_id, note_title) VALUES ('1', 'Note 4');
================================================================
UPDATE :
'---------------------------------------------------------------'
UPDATE notes
SET folder_id = '3'
WHERE note_id = '28';
'---------------------------------------------------------------'
UPDATE notes 
SET note_title = 'Note 2' 
WHERE note_id = 2;
'---------------------------------------------------------------'
================================================================
ALTER :
'---------------------------------------------------------------'
ALTER TABLE notes 
DROP folder_name;
================================================================
DROP :
DROP TABLE folders;

