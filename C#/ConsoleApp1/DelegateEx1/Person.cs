using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateEx1
{
    class Person
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        private int age;

        public int Age
        {
            get { return age; }
            set { age = value; }
        }
        public override string ToString()
        {
            return Name + " is " + age;
        }

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }
    }
}
