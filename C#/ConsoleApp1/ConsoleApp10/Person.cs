using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp10
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

        public Person(string name, int age)
        {
            Age = age;
            Name = name;
        }

        public override string ToString()
        {
            return "Name: " + name + ". Age: " + age + ".";
        }

    }
}
