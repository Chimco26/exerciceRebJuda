using System;
using System.Collections.Generic;

namespace Test1
{
    class Program
    {
        static void Main(string[] args)
        {
            Train t1 = new Train(new List<Wagon>() { new Wagon(1, 20), new Wagon(2), new Wagon(1, 25) });
            t1.ToBook(new Client("chimi"));
        }
    }
}
