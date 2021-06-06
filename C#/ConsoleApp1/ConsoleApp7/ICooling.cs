using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp7
{
    interface ICooling
    {
        public bool Cooling { get; set; }
        public int MinCool { get; }
        public int MaxCool { get; }
        public int Fridge { get; }
    }
}
