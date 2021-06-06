using System;
using System.Collections.Generic;
using System.Text;

namespace ZooProject
{
    abstract class Mammals : Animal, IGivingBirth
    {
        public Mammals(double weight, double size, string name, int age) 
            : base(weight, size, name, age)
        {
        }
        public void GiveBirth()
        {

        }
    }

    class Wolf : Mammals, IWanding
    {
        public Wolf(double weight, double size, int age)
            : base(weight, size, "wolf", age)
        {
        }
        public void Wander()
        {

        }
    }

    class Tiger : Mammals, IWanding
    {
        public Tiger(double weight, double size, int age)
            : base(weight, size, "tiger", age)
        {
        }
        public void Wander()
        {

        }
    }

    class Beer : Mammals
    {
        public Beer(double weight, double size, int age)
            : base(weight, size, "beer", age)
        {
        }
    }
}
