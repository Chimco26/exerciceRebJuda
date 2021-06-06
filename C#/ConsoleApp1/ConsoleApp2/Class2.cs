using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp2
{
    class Person
    {
        string FirstName;
        string LastName;
        Date Dob;

        public void setFirst(string first)
        {
            FirstName = first;
        }

        public Person(): this("Chimeon", "COHEN")
        {

        }
        public Person(string firstName, string lastName): this(firstName, lastName, new Date(1, 1, 2020))
        {
            
        }
        public Person(string firstName, string lastName, string fullDate): this(firstName, lastName, new Date(fullDate))
        {

        }
        public Person(string firstName, string lastName, Date dob): this(firstName, lastName, dob.GetDay(), dob.GetMonth(), dob.GetYear())
        {
            
        }
        public Person(string firstName, string lastName, int day, int month, int year)
        {
            FirstName = firstName;
            LastName = lastName;
            Dob = new Date(day, month, year);
        }
        public Person(Person src): this(src.FirstName, src.LastName, new Date(src.Dob))
        {
            
        }
        public bool IsOld(Person pers)
        {
            if (Dob == pers.Dob) return false;
            if (Dob.GetYear() != pers.Dob.GetYear()) return Dob.GetYear() < pers.Dob.GetYear();
            else if (Dob.GetMonth() != pers.Dob.GetMonth()) return Dob.GetMonth() < pers.Dob.GetMonth();
            else return Dob.GetDay() < pers.Dob.GetDay();
        }

        public override string ToString()
        {
            return FirstName + " " + LastName + ". Date of Birth: " + Dob + ".";
        }
    }
}
