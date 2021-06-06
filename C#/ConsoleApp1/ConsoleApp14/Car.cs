using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace ConsoleApp14
{
    class Car
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        private bool needWashing;

        public bool NeedWashing
        {
            get { return needWashing; }
            set { needWashing = value; }
        }
        public Car(string name)
        {
            Name = name;
            Thread thread = new Thread(new ThreadStart(Run));
            thread.Start();
        }
        public void Run()
        {
            while (true)
            {
                Thread.Sleep(200);
                if (NeedWashing)
                {
                    Program.WaitingForWash(this);
                    NeedWashing = false;
                }
            }
        }
    }
}
