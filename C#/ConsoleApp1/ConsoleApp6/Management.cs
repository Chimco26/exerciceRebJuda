using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp6
{
    class Management
    {
        public static List<DrAppointment> listApp = new List<DrAppointment>();

        public static void CreateApp()
        {
            string name = Read("name");
            
            string drName = Read("dr name");

            int startingHour = ReadInt("hour");

            string location = Read("location");

            Console.WriteLine("Enter your date.");
            Date date = new Date(Console.ReadLine());

            if(FindAppHour(startingHour).StartingHour == 0 || FindAppDr(drName).DrName == drName)
            {
                listApp.Add(new DrAppointment(drName, name, date, startingHour, location));
            } else
            {
              Console.WriteLine("the hour is full!");
              CreateApp();
            }
        }
        public static string Read(string name)
        {
            Console.WriteLine("Enter your " + name + ".");
            return Console.ReadLine();
        }
        public static int ReadInt(string hour)
        {
            Console.WriteLine(hour + ".");
            return int.Parse(Console.ReadLine());
        }

        public static DrAppointment FindAppHour(int hour)
        {
            int index = listApp.FindIndex(i => i.StartingHour == hour);
            if(index != -1)
            {
                return listApp[index];
            } else
            {
                return new DrAppointment();
            }
        }
        public static DrAppointment FindAppDr(string drName)
        {
            int index = listApp.FindIndex(i => i.DrName == drName);
            if (index != -1)
            {
                return listApp[index];
            }
            else
            {
                return new DrAppointment();
            }
        }
        public static void RemoveApp(int hour)
        {
            int index = listApp.FindIndex(i => i.StartingHour == hour);
            listApp.RemoveAt(index);
        }
        
    }
}
