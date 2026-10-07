CREATE DATABASE DEMEEE
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE UNIVERSITY;
    SELECT * FROM STUDENTS;   
     CREATE VIEW FEMALE AS SELECT * FROM students WHERE GENDER = 'FEMALE';
    CREATE  view viewtwo AS SELECT * FROM students WHERE programme=("BSIT,DIT");
    create view viewthree as select* from students where  programme=("BSIT,DIT") and gender="FEMALE";
    create view  viewSeven as select* from students where programme=("BSIT")AND GENDER=("MALE");
    alter table  students ADD COLUMN NIN INT ;
    ALTER TABLE STUDENTS RENAME COLUMN STUDENT_ID TO STUDENT_IDENTIFICATION;
    ALTER TABLE STUDENTS DROP COLUMN LEARNS;
    