using System;
using System.Collections.Generic;
using System.Text;

namespace HaifaTest
{
    class Student
    {
        protected string Name;
        private long id;

        public long ID
        {
            get { return id; }
            set 
            {
                foreach (var item in University.numOfStudents)
                {
                    if (item.ID == value)
                        throw new DuplicateWaitObjectException();
                }
                id = value; 
            }
        }

        public virtual int TuitionFee 
        {
            get { return 10000; }
        }

        public Student(string name, long id)
        {
            Name = name;
            ID = id;
        }
        public Student(Student other) : this(other.Name, other.ID)
        {

        }
        public override string ToString()
        {
            return Name + ", ID: " + ID + ", tuition fee: " + TuitionFee + ".";
        }
    }
}
