using System;

namespace ConsoleApp6
{
    class Program
    {
        static void Main(string[] args)
        {
            Appointment app1 = new Appointment();
            for(int i = 0; i < 2; i++)
            {
                Management.CreateApp();
            }

            foreach(Appointment app in Management.listApp)
            {
                Console.WriteLine(app);
            }
            Management.RemoveApp(2);
            foreach (Appointment app in Management.listApp)
            {
                Console.WriteLine(app);
            }
        }
    }
}
