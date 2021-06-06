using System;
using System.Collections.Generic;
using System.Text;

namespace ZooProject
{
    abstract class FlyingAnimals : Animal, ILaying
    {
        public FlyingAnimals(double weight, double size, string name, int age) 
            : base(weight, size, name, age)
        {
        }

        
        public void LayAnEgg()
        {

        }
    }

    class Eagle : FlyingAnimals, IFlying
    {
        public Eagle(double weight, double size, int age)
            : base(weight, size, "eagle", age)
        {
        }
        public void Fly()
        {

        }
    }

    class Penguin : FlyingAnimals
    {
        public Penguin(double weight, double size, int age)
            : base(weight, size, "penguin", age)
        {
        }
    }
}
