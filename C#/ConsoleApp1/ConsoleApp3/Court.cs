using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp3
{
    class Court
    {
        private int date = 1990;

        public int Date
        {
            get { return date; }
            set { date = value; }
        }

        public List<Prisoner> listPrisoners = new List<Prisoner>(300);

        public void CreateTwoPrisoners()
        {
            Prisoner p1 = new Prisoner(date);
            Prisoner p2 = new Prisoner(date);
            listPrisoners.Add(p1);
            listPrisoners.Add(p2);
            Judge.Decree(p1, p2);
        }
    }
}
