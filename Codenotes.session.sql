CREATE TABLE notes (
    note_id INT AUTO_INCREMENT,
    note_title VARCHAR(100),
    note_content LONGTEXT,
    folder_id INT,
    PRIMARY KEY(note_id)
);

CREATE TABLE folders (
    folder_id INT AUTO_INCREMENT,
    folder_name VARCHAR(100) NOT NULL,
    PRIMARY KEY(folder_id)
);

ALTER TABLE notes
ADD folder_name VARCHAR(100);

ALTER TABLE notes
ADD FOREIGN KEY (folder_id)  
REFERENCES folders(folder_id)
ON DELETE SET NULL;

SELECT * FROM folders;
SELECT * FROM notes;

UPDATE folders 
SET folder_name = 'Instructions' 
WHERE folder_id = 1;

SELECT * FROM notes;