using System;
using System.Collections.Generic;
using System.Text;

namespace ZooProject
{
    class Enclosure<T>
    {
        List<T> myEnclosureList = new List<T>();
        protected string Name;
        protected double Aera;
        private string cleanliness;

        public string Cleanliness
        {
            get { return cleanliness; }
            set { cleanliness = value; }
        }
        protected int MaximumAnimals;
        private int numberOfAnimals;

        public int NumberOfAnimals
        {
            get { return numberOfAnimals; }
            set { numberOfAnimals = value; }
        }

        public Enclosure(List<T> myEnclosureList, string name, double aera, string cleanliness, int maximumAnimals)
        {
            this.myEnclosureList = myEnclosureList;
            Name = name;
            Aera = aera;
            Cleanliness = cleanliness;
            MaximumAnimals = maximumAnimals;
        }

        public void PrintEnclosureStatus()
        {
            Console.WriteLine($"Enclosure {Name}, his aera is {Aera}, and his cleanliness is {cleanliness}.");
            Console.WriteLine($"He is actualy contain {numberOfAnimals}, and his maximum contain is {MaximumAnimals}.");
        }
        public void AddAnimal(T a)
        {
            myEnclosureList.Add(a);
        }
        public void Maintain()
        {
            if(numberOfAnimals == 0)
            {
                cleanliness = "well";
            }
        }
        public void PrintAllAnimalsInEncolure()
        {
            foreach (var item in myEnclosureList)
            {
                item.ToString();
            }
        }
    }
}
